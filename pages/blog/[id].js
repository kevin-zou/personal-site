import styled from 'styled-components'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

const Content = styled.div`
  img {
    max-width: 100%;
  }
`;

export default function Post({ markdown, postData }) {
  return (
    <Layout>
      <h1>
        {postData.title}
      </h1>
      <p>{postData.date}</p>
      <Content>
        <Markdown remarkPlugins={[gfm]}>
          { markdown }
        </Markdown>
      </Content>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.id)
  const markdown = post.content
  const postData = post.data
  return {
    props: {
      markdown,
      postData
    }
  }
}
