import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { getSortedPostsData } from '../../lib/posts'

const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export default function Blog({allPostsData}) {
  return (
    <Layout>
      <Head>
        <title>Blog | Kevin Zou</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>All posts</h2>
      <PostList>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <div>{date}</div>
            <Link href={`/blog/${id}`}>
              {title}
            </Link>
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
