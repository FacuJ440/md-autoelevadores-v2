/**
 * Cloudflare Worker — CV upload & download using R2 storage
 *
 * Files are stored in Cloudflare R2 (no expiration, free 10 GB tier).
 *
 * Setup:
 *   1. Go to https://dash.cloudflare.com → R2 → Create bucket
 *   2. Name it "cv-uploads"
 *   3. Go to Workers & Pages → your worker → Settings → Bindings
 *   4. Add R2 bucket binding: Variable name = CV_BUCKET, Bucket = cv-uploads
 *   5. Deploy this code
 *   6. Set VITE_CV_UPLOAD_URL in .env to the worker URL
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    // GET /file/{key} — serve the CV from R2 (for email download links)
    if (request.method === 'GET' && url.pathname.startsWith('/file/')) {
      const key = url.pathname.replace('/file/', '')

      const object = await env.CV_BUCKET.get(key)
      if (!object) {
        return new Response('File not found', { status: 404 })
      }

      const headers = new Headers()
      object.writeHttpMetadata(headers)
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set('Content-Disposition', `attachment; filename="${key}"`)

      return new Response(object.body, { headers })
    }

    // POST — upload CV to R2
    if (request.method === 'POST') {
      try {
        const formData = await request.formData()
        const file = formData.get('file')

        if (!file) {
          return new Response(
            JSON.stringify({ success: false, error: 'No file provided' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          )
        }

        // Generate a unique key: timestamp + original filename
        const timestamp = Date.now()
        const originalName = file.name || 'cv'
        const key = `${timestamp}-${originalName}`

        // Store in R2
        await env.CV_BUCKET.put(key, file.stream(), {
          httpMetadata: {
            contentType: file.type || 'application/octet-stream',
          },
        })

        // Build the download URL
        const downloadUrl = `${url.origin}/file/${encodeURIComponent(key)}`

        return new Response(
          JSON.stringify({ success: true, link: downloadUrl }),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        )
      } catch (error) {
        return new Response(
          JSON.stringify({ success: false, error: error.message }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        )
      }
    }

    return new Response('Method not allowed', { status: 405 })
  },
}
