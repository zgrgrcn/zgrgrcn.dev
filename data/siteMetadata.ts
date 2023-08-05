export let siteMetadata = {
  title: "Ozgur's blog",
  author: 'Ozgur Gurcan',
  fullName: 'Ozgur Gurcan',
  headerTitle: "Ozgur's blog",
  footerTitle: "Ozgur's blog",
  description:
    "Ozgur's coding journey - work and life stories through the keyboard of an open-minded Software Engineer",
  language: 'en-us',
  siteUrl: 'https://www.ozgurgurcan.dev',
  siteRepo: 'https://github.com/zgrgrcn/zgrgrcn.dev',
  siteLogo: '/static/images/logo.jpeg',
  image: '/static/images/logo.jpeg',
  socialBanner: '/static/images/logo.jpeg',
  email: 'ozgurgurcan1996@gmail.com',
  github: 'https://github.com/zgrgrcn',
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
  youtube: 'https://www.youtube.com',
  linkedin: 'https://www.linkedin.com/in/zgrgrcn/',
  locale: 'en-US',
  analyticsURL: 'https://analytics.umami.is/share/BKLaO8RNJPa5hOe4/ozgurgurcan.dev',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: 'e6711638-cb00-4c9d-a98d-1da8e2d3b54b', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'zgrgrcn',
    twitter: '',
    linkedin: 'zgrgrcn',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
