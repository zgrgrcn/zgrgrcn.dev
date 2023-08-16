import 'css/tailwind.css'
import 'css/twemoji.css'
import '@react-pdf-viewer/core/lib/styles/index.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { Analytics as UmamiAnalytics } from '~/components/analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { LayoutWrapper } from '~/components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <UmamiAnalytics />
      <VercelAnalytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
