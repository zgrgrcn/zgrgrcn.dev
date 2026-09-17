import Script from 'next/script'
import { siteMetadata } from '~/data/siteMetadata'

export function UmamiScript() {
  return (
    <Script
      async
      defer
      data-website-id={siteMetadata.analytics.umamiWebsiteId}
      src={siteMetadata.analytics.umamiScriptUrl || 'https://stats.ozgurgurcan.com/script.js'}
    />
  )
}
