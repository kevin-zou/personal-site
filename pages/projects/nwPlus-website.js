import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Tag from "../../components/Tag";
import nwPlusImage from "../../public/assets/nwPlus_website.png";

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
  title: 'nwPlus Website | Kevin Zou',
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
      <h1>nwPlus Website</h1>
      <FlexList>
        <Tag bgColor="#5ed3f3" color="black">Next.js</Tag>
        <Tag bgColor="#f7c52b" color="black">Firebase</Tag>
      </FlexList>
      <SectionHeader>Description</SectionHeader>
      <p>
        In the 2021 - 2022 school year I was the Development Director for nwPlus, a university group that organizes
        hackathons for post-secondary students. We wanted to revitalize our brand with a new design language and a big
        part of this was our website. As Development Director I led a team of developers in implementing a new homepage
        for our club.
      </p>
      <p>
        The framework of choice was Next.js as the majority of the site content is static. We do have some parts of
        the site that change periodically (eg. event announcements, resources, FAQ), so we used Firestore to store flags
        and content that changes. These flags and content are editable through a content management system (CMS) that is
        accessible only to internal staff.
      </p>
      <SectionHeader>Links</SectionHeader>
      <FlexList>
        <a href="https://github.com/nwplus/www" target="_blank">GitHub Repo</a>
        <a href="https://nwplus.io" target="_blank">Deployed site</a>
      </FlexList>
      <SectionHeader>Media</SectionHeader>
      <Image placeholder="blur" width="1524px" height="5529px" src={nwPlusImage} />
    </Layout>
  )
}
