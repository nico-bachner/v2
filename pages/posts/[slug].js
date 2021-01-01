import Head from 'next/head'

export default function Post({ post}) {
    return (
        <>
            <Head>
                <title>
                    {post.title} | Nico Bachner
                </title>
            </Head>
            <article>
                <PostHeader
                    title={post.title}
                    date={post.date}
                />
                <PostBody content={post.content} />
            </article>
        </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}