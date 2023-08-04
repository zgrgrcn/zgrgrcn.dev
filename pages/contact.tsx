import { MDXLayoutRenderer } from '~/components/MDXComponents'
import { getFileBySlug } from '~/libs/mdx'
import type { MdxFileData } from '~/types'

export async function getStaticProps() {
  let contactData = await getFileBySlug('authors', 'resume')
  return { props: { contactData } }
}

export default function Contact({ contactData }: { contactData: MdxFileData }) {
  let { mdxSource, frontMatter } = contactData

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
