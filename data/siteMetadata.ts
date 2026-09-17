export let siteMetadata = {
  title: "Ozgur's blog",
  author: 'Ozgur Gurcan',
  fullName: 'Ozgur Gurcan',
  headerTitle: "Ozgur's blog",
  footerTitle: "Ozgur's blog",
  description:
    "Ozgur Gurcan's personal website & engineering blog — deep dives into backend systems, distributed architectures, and pragmatic tooling.",
  language: 'en-us',
  siteUrl: 'https://ozgurgurcan.com',
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
  analyticsURL: 'https://stats.ozgurgurcan.com/share/e1iDJvwlxmbxnuRf',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '43a7ae95-5f80-4144-88ab-a956af9a40bf',
    umamiScriptUrl: 'https://stats.ozgurgurcan.com/script.js',
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
