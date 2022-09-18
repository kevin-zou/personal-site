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
      <h2>Hi, I'm Kevin! 👋</h2>
      <p>
        I'm a recent graduate from the University of British Columbia, where I majored in Computer Science. I've
        interned as a software developer at <a href="https://www.vidyard.com" target="_blank">Vidyard</a> and <a href="https://opencare.com" target="_blank">Opencare</a>,
        working closely with other engineers, product managers, and designers. The majority of my professional
        experience is in working in B2B companies with a strong emphasis on product.
      </p>
      <p>
        Some of the languages and frameworks I've used include JavaScript, React, Next, Vue, Ruby on Rails, and Express.
        I'm also familiar with accessibility, E2E testing using Cypress, and working on CI/CD pipelines. That being
        said, I love learning and using new technologies to solve whatever problem is at hand. Check out some of my
        projects <Link href="/projects">here</Link>.
      </p>
      <p>
        In my off time I enjoy video games, playing ultimate frisbee or volleyball, and hiking one of BC's beautiful
        trails. Thank you for reading, and feel free to reach out to say hi!
      </p>
      <p>Click <Link href="/Kevin_Zou_Resume.pdf">here</Link> for my resume!</p>
    </Layout>
  )
}
