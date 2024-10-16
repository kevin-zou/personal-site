import Head from 'next/head'
import Link from 'next/link'
import moment from 'moment'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { getSortedPostsData } from '../../lib/posts'

const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

const metadata = {
  title: 'Blog | Kevin Zou',
  description: 'Blog of a person learning how to code and stuff',
  image: 'https://kevinzou.xyz/meta-image.png',
};

export default function Blog({allPostsData}) {
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta itemProp="name" content={metadata.title} />
        <meta itemProp="description" content={metadata.description} />
        <meta itemProp="image" content={metadata.image} />

        <meta property="og:url" content="https://kevinzou.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <h2>All posts</h2>
      <PostList>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>
              {title}
            </Link>
            <div>{moment(date).format('MMMM Do, YYYY')}</div>
          </li>
        ))}
      </PostList>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
