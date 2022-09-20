import styled from "styled-components";
import Head from "next/head";
import Layout from "../../components/Layout";
import Project from '../../components/Project'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8px;
`;

const metadata = {
  title: 'Projects | Kevin Zou',
  description: 'Personal projects that I\'ve worked on over the years',
  image: 'https://kevinzou.xyz/meta-image.png',
};

export default function Projects() {
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
      <h2>Projects</h2>
      <p>Here are some of the personal projects I've worked on! Click on them for more details.</p>
      <Grid>
        <Project
          bgSrc="https://media.giphy.com/media/nfnF2zVPRemXu/giphy.gif"
          link="/projects/hydro-pump"
          name="Hydro Pump"
          description="Discord reminders to stay hydrated"
          techStack="Node.js, MongoDB, Discord API, Heroku"
        />
        <Project
          bgSrc="/assets/nwPlus-website-preview.png"
          link="/projects/nwPlus-website"
          name="nwPlus Homepage"
          description="Led development of new nwPlus website"
          techStack="Next.js, Firebase"
        />
        <Project
          bgSrc="/assets/nwPlus-portal-preview.png"
          link="/projects/nwPlus-portal"
          name="nwPlus Portal"
          description="Implemented project submission system in live event portal"
          techStack="Next.js, Firebase"
        />
      </Grid>
    </Layout>
  )
}
