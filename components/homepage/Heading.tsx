import { Twemoji } from '~/components/Twemoji'
import { siteMetadata } from '~/data/siteMetadata'

export function Heading() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">{siteMetadata.fullName}</span>
      <span className="hidden font-medium">Izmir, TR</span>
      <span className="hidden absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-turkey" />
      </span>
    </h1>
  )
}
