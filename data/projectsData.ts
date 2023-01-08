import type { Project } from '~/types'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'Minimog',
    description: `The Next Generation of highest-converting and extensible Shopify theme (Weekly bestseller & Top trending in Themeforest eCommerce category).`,
    imgSrc: '/static/images/minimog.jpg',
    url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968',
    builtWith: ['Theme-kit', 'Liquid', 'Webpack', 'Tailwind'],
  },
  {
    type: 'work',
    title: 'Fox Kit',
    description: `The upsells and boost conversion tools that is built to support Minimog theme.`,
    imgSrc: '/static/images/foxkit.jpg',
    url: 'https://apps.shopify.com/foxecom-boost-sales',
    builtWith: ['Koa.js', 'JWT', 'MongoDB', 'Polaris'],
  },
  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/leoblog.jpg',
    repo: 'leohuynh.dev',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
  {
    type: 'self',
    title: 'Shopify theme starter',
    imgSrc: '/static/images/shopify-theme-store.png',
    repo: 'shopify-theme-starter',
    builtWith: ['Shopify', 'Liquid', 'Webpack', 'Tailwind', 'Theme-kit'],
  },
  {
    type: 'self',
    title: 'Shopify KoaJS React boilerplate',
    imgSrc: '/static/images/shopify-app-store.png',
    repo: 'shopify-koajs-react-boilerplate',
    builtWith: ['Koa.js', 'JWT', 'MongoDB', 'Polaris'],
  },
  {
    type: 'self',
    title: 'Animate loading bar',
    imgSrc: '/static/images/animate-loading-bar.jpg',
    repo: 'animate-loading-bar',
    builtWith: ['Javascript', 'CSS'],
  },
  {
    type: 'self',
    title: 'Travel Egypt Picture Puzzle',
    imgSrc: '/static/images/travel-egypt.jpg',
    repo: 'Travel_Egypt',
    builtWith: ['Python', 'Pygame'],
  },
  {
    type: 'self',
    title: 'Infinite Loading Gallery',
    imgSrc: '/static/images/infinite-gallery.jpg',
    repo: 'infinite-gallery',
    builtWith: ['React', 'Semantic UI', 'Picsum API'],
  },
  {
    type: 'self',
    title: 'Store Manager',
    imgSrc: '/static/images/java-store-manager.jpg',
    repo: 'StoreManager',
    builtWith: ['Java', 'Java Swing', 'JDBC', 'SQL Server'],
  },
  {
    type: 'self',
    title: 'Tiny retry',
    imgSrc: '/static/images/tiny-retry.png',
    repo: 'tiny-retry',
    builtWith: ['Javascript', 'Node'],
  },
]
