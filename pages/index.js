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
      <p>This is my my little page on the internet.</p>
      <h3>Software engineering things</h3>
      <p>I've always enjoyed programming and I'm fortunate enough to do it for a living. I'm currently working at <a href="https://www.shopcanal.com/" target="_blank">Canal</a> as a software engineer!</p>
      <p>
        In previous lives I've:
      </p>
      <ul>
        <li>helped build a comprehensive data transformation platform at <a href="https://www.liquidaty.com" target="_blank">Liquidaty</a></li>
        <li>interned at <a href="https://www.vidyard.com" target="_blank">Vidyard</a> and <a href="https://opencare.com" target="_blank">Opencare</a></li>
      </ul>
      <h3>Fun things</h3>
      <p>
        During my spare time I like to play video games, watch anime and films, and practice bass guitar. I also play volleyball, spikeball, and ultimate frisbee.
      </p>
      <p>
        Feel free to reach out to say hi or click <Link href="/Kevin_Zou_Resume.pdf">here</Link> for my resume!
      </p>
    </Layout>
  )
}
