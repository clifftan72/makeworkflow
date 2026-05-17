import { useEffect } from 'react'

interface PageMetaOptions {
  title: string
  description: string
  canonicalPath: string
  schemaType?: 'WebPage' | 'Article'
  articleDate?: string
}

export const BASE_URL = 'https://www.makeworkflow.dev'

export function usePageMeta({
  title,
  description,
  canonicalPath,
  schemaType = 'WebPage',
  articleDate,
}: PageMetaOptions) {
  useEffect(() => {
    const fullUrl = `${BASE_URL}${canonicalPath}`

    // ── Title ──
    document.title = title

    // ── Meta description ──
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)

    // ── OG tags ──
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', fullUrl)

    // ── Canonical ──
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = fullUrl

    // ── WebPage / Article JSON-LD (per route) ──
    const schemaId = 'page-schema-ld'
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.id = schemaId
      schemaScript.type = 'application/ld+json'
      document.head.appendChild(schemaScript)
    }

    const schemaData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      '@id': fullUrl,
      'name': title,
      'description': description,
      'url': fullUrl,
      'isPartOf': { '@id': `${BASE_URL}/#website` },
    }

    if (schemaType === 'Article' && articleDate) {
      schemaData['datePublished'] = articleDate
      schemaData['author'] = {
        '@type': 'Person',
        'name': 'Clifford Tan',
      }
      schemaData['publisher'] = {
        '@id': `${BASE_URL}/#organization`,
      }
    }

    schemaScript.textContent = JSON.stringify(schemaData)
  }, [title, description, canonicalPath, schemaType, articleDate])
}
