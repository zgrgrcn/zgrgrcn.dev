import { siteMetadata } from '~/data/siteMetadata'
import { DevIcon } from './DevIcon'
import { Link } from './Link'

export function BuiltWith() {
  return (
    <div className="flex items-center space-x-1">
      <span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>
      <div className="flex items-center space-x-1.5">
        <Link
          href="https://nextjs.org?ref=ozgurgurcan.com"
          title="Next.js"
          aria-label="Next.js"
          className="text-gray-500 transition-all duration-150 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <DevIcon type="NextJS" className="h-5 w-5" />
        </Link>
        <Link
          href="https://tailwindcss.com?ref=ozgurgurcan.com"
          title="Tailwind CSS"
          aria-label="Tailwind CSS"
          className="text-gray-500 transition-all duration-150 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <DevIcon type="TailwindCSS" className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.typescriptlang.org?ref=ozgurgurcan.com"
          title="TypeScript"
          aria-label="TypeScript"
          className="text-gray-500 transition-all duration-150 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <DevIcon type="Typescript" className="h-5 w-5" />
        </Link>
        <Link
          href="https://orm.drizzle.team?ref=ozgurgurcan.com"
          title="Drizzle ORM"
          aria-label="Drizzle ORM"
          className="text-gray-500 transition-all duration-150 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <DevIcon type="Drizzle" className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.postgresql.org?ref=ozgurgurcan.com"
          title="PostgreSQL"
          aria-label="PostgreSQL"
          className="text-gray-500 transition-all duration-150 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <DevIcon type="Postgres" className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.docker.com?ref=ozgurgurcan.com"
          title="Docker"
          aria-label="Docker"
          className="text-gray-500 transition-all duration-150 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <DevIcon type="Docker" className="h-5 w-5" />
        </Link>
        <Link
          href="https://coolify.io?ref=ozgurgurcan.com"
          title="Coolify"
          aria-label="Coolify"
          className="text-gray-500 transition-all duration-150 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <DevIcon type="Coolify" className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.cloudflare.com?ref=ozgurgurcan.com"
          title="Cloudflare"
          aria-label="Cloudflare"
          className="text-gray-500 transition-all duration-150 hover:scale-110 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <DevIcon type="Cloudflare" className="h-5 w-5" />
        </Link>
      </div>
      <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
      <Link
        href={siteMetadata.siteRepo}
        className="text-gray-500 underline underline-offset-4 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      >
        <span data-umami-event="view-source">View source</span>
      </Link>
    </div>
  )
}
