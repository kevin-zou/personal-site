import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import Layout from '../../components/Layout'
import utilStyles from '../../styles/utils.module.scss'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ markdown, postData }) {
  return (
    <Layout>
      <h1 className={utilStyles['post-title']}>
        {postData.title}
      </h1>
      <div>{postData.date}</div>
      <Markdown remarkPlugins={[gfm]}>
        { markdown }
      </Markdown>
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
