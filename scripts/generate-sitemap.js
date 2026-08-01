import { catalogCategories } from '../src/data/catalogData.js'
import fs from 'fs'

const today = new Date().toISOString().split('T')[0]
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/catalogo', priority: '0.9', changefreq: 'weekly' },
  { url: '/nosotros', priority: '0.7', changefreq: 'monthly' },
  { url: '/servicios', priority: '0.8', changefreq: 'monthly' },
  { url: '/contacto', priority: '0.6', changefreq: 'monthly' },
]

routes.forEach((r) => {
  xml += `  <url>\n    <loc>https://mdautoelevadores.com${r.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>\n`
})

catalogCategories.forEach((cat) => {
  cat.products.forEach((prod) => {
    xml += `  <url>\n    <loc>https://mdautoelevadores.com/catalogo/${cat.slug}/${prod.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`
  })
})

xml += '</urlset>'

fs.writeFileSync('public/sitemap.xml', xml, 'utf8')
const total = routes.length + catalogCategories.reduce((a, c) => a + c.products.length, 0)
console.log(`sitemap.xml generated with ${total} URLs`)
