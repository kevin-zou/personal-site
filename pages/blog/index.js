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
