import { useEffect } from 'react'

interface PageMetaOptions {
  title: string
  description: string
  canonicalPath?: string
}

const SITE_NAME = 'Make Work Flow™'
const BASE_URL = 'https://www.makeworkflow.dev'

export function usePageMeta({ title, description, canonicalPath }: PageMetaOptions) {
  useEffect(() => {
    // Title
    document.title = `${title} — ${SITE_NAME}`

    // Description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', `${title} — ${SITE_NAME}`)

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    // OG url / canonical
    if (canonicalPath !== undefined) {
      let ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) ogUrl.setAttribute('content', `${BASE_URL}${canonicalPath}`)

      // Canonical link tag
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = `${BASE_URL}${canonicalPath}`
    }
  }, [title, description, canonicalPath])
}
