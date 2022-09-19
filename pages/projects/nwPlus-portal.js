import Head from "next/head";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Tag from "../../components/Tag";

const FlexList = styled.div`
  display: flex;
  gap: 8px;
`

const SectionHeader = styled.h3`
  &:not(:first-of-type) {
    margin-top: 32px;
  }
`

const metadata = {
  title: 'nwPlus Portal | Kevin Zou',
  image: 'https://kevinzou.xyz/meta-image.png',
};

export default function nwPlusWebsite() {
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
      <h2>nwPlus Portal</h2>
      <FlexList>
        <Tag bgColor="#ffffff" color="black">Next.js</Tag>
        <Tag bgColor="#f7c52b" color="black">Firebase</Tag>
      </FlexList>
      <SectionHeader>Description</SectionHeader>
      <p>
        In the 2021 - 2022 school year I was the Development Director for nwPlus, a university group that organizes
        hackathons for post-secondary students. Previous developers created Portal, a website that provides live
        information such as announcements, schedules, and a peer-to-peer judging system. We would ask attendees to
        submit their completed projects through a third party (DevPost), where we would then export a CSV and import it
        into our judging system. This process was prone to breaking as the CSV schema changed often.
      </p>
      <p>
        To solve this problem we decided to implement a new project submission system in Portal. I architected the
        new system and overlooked development of the submission form and project gallery. The submission form includes
        robust input validation with error and success handling, which was important as there were many edge cases in
        adding team members to your project. We also locked the submission form behind authentication using Firebase to
        prevent unauthorized submissions. The project gallery was developed with search and filters so that users and
        judges could easily find their relevant projects.
      </p>
      <SectionHeader>Links</SectionHeader>
      <FlexList>
        <a href="https://github.com/nwplus/www" target="_blank">GitHub Repo</a>
        <a href="https://portal.nwplus.io" target="_blank">Deployed site</a>
      </FlexList>
      <SectionHeader>Media</SectionHeader>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/m1EAe2FQYUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Layout>
  )
}
