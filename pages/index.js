import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Link from 'next/link'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.flexAlign};
  ${props => props.margin && `margin: ${props.margin};`}
`;

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
      <Section>
        <h2>Hi, I'm Kevin! 👋</h2>
        <p>I’m a computer science student in their final year at the University of British Columbia. As an aspiring developer I am passionate about implementing thoughtful and pleasing user experiences. I enjoy evaluating development processes and improving them iteratively.</p>
        <p>My experience includes full stack development with a focus on the front end. I've worked in product-led organizations and am extremely comfortable with collaborating with design and product teams in agile.</p>
        <p>In my spare time you can find me on one of BC’s beautiful trails, playing ultimate frisbee, enjoying video games, or relaxing with friends and family.</p>
        <p>Click <Link href="/Kevin_Zou_Resume.pdf">here</Link> for my resume!</p>
      </Section>
      <Section margin="0 0 16px">
        <h2>Work Experience</h2>
        <Experience
          title="Software Developer Co-op"
          organization="Vidyard"
          tenure="May 2021 - August 2021"
          color="#46DB83"
        />
        <Experience
          title="Full-Stack Software Engineer Co-op"
          organization="Opencare.com"
          tenure="September 2020 - December 2020"
          color="#F37F6E"
        />
        <Experience
          title="Software Developer Co-op"
          organization="Vidyard"
          tenure="January 2020 - August 2020"
          color="#46DB83"
        />
      </Section>
      <Section margin="0 0 16px">
        <h2>Extracurricular</h2>
        <Experience
          title="Development Director"
          organization="nwPlus"
          tenure="May 2021 - present"
          color="#79FBB5"
        />
      </Section>
    </Layout>
  )
}
