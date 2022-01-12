import styled from 'styled-components'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import moment from 'moment'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

const Content = styled.div`
  h1 {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`;

export default function Post({ markdown, postData }) {
  const metadata = {
    title: `${postData.title} | Kevin Zou`,
    description: postData?.description ?? 'Website of a person learning how to code and stuff',
    image: '../../meta-image.png',
  };

  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta itemprop="name" content={metadata.title} />
        <meta itemprop="description" content={metadata.description} />
        <meta itemprop="image" content={metadata.image} />

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
      <Content>
        <h1>
          {postData.title}
        </h1>
        <p>{moment(postData.date).format('MMMM Do, YYYY')}</p>
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
