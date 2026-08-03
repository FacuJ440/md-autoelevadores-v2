/**
 * Cloudflare Worker — CV upload proxy
 *
 * Receives a file from the browser and uploads it to file.io,
 * returning the download link back to the client.
 *
 * Deploy:
 *   1. Go to https://dash.cloudflare.com → Workers & Pages → Create
 *   2. Name it "cv-upload" and paste this code
 *   3. Deploy
 *   4. Set the worker URL in .env: VITE_CV_UPLOAD_URL
 *
 * The worker URL will be something like:
 *   https://cv-upload.<your-subdomain>.workers.dev
 */

export default {
  async fetch(request) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    try {
      // Forward the file to file.io
      const formData = await request.formData()
      const response = await fetch('https://file.io', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
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
  },
}
