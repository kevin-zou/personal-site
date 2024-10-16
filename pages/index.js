import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

const metadata = {
  title: 'Home | Kevin Zou',
  description: 'Website of a person learning how to code and stuff',
  image: 'https://kevinzou.xyz/meta-image.png',
};

export default function Home() {
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
      <h2>Hi, I'm Kevin! 👋</h2>
      <p>
        I'm a software developer. What do I work on?
      </p>
      <p>
        Right now I'm working as a software engineer at <a href="https://www.liquidaty.com/" target="_blank">Liquidaty</a> where
        I'm building a comprehensive platform for data automation and processing.
      </p>
      <p>
        In previous lives I've interned as a software developer at <a href="https://www.vidyard.com" target="_blank">Vidyard</a> and <a href="https://opencare.com" target="_blank">Opencare</a>.
        With extensive product-led engineering experience, I specialize in creating intuitive and pleasant user experiences.
      </p>
      <p>
        Some of the languages and frameworks I've used include JavaScript, React, Next, Vue, Ruby on Rails, and Express.
        I'm also familiar with accessibility, E2E testing using Cypress, and working on CI/CD pipelines. I love learning and
        using new technologies to solve whatever problem is at hand.
      </p>
      <p>
        During my spare time I like to play video games, watch films, and practice bass guitar. I also play ultimate frisbee
        and volleyball when I get the chance.
      </p>
      <p>
        Feel free to reach out to say hi or click <Link href="/Kevin_Zou_Resume.pdf">here</Link> for my resume!
      </p>
    </Layout>
  )
}
