import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Tag from "../../components/Tag";
import LoonieImg from "../../public/assets/loonie.png";

const FlexList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const SectionHeader = styled.h3`
  &:not(:first-of-type) {
    margin-top: 32px;
  }
`

const metadata = {
  title: 'Loonie | Kevin Zou',
  image: 'https://kevinzou.xyz/meta-image.png',
};

export default function Loonie() {
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
      <h2>Loonie</h2>
      <FlexList>
        <Tag bgColor="#ffffff" color="black">Next.js</Tag>
        <Tag bgColor="#29b9ad" color="black">Chakra UI</Tag>
        <Tag bgColor="#f7c52b" color="black">Firebase</Tag>
        <Tag bgColor="#black" color="white">Vercel</Tag>
      </FlexList>
      <SectionHeader>Description</SectionHeader>
      <p>
        Loonie is a project that I work on with two other people (a designer and a product manager) during our spare
        time. Canadian colleges and universities often have alumni discounts and offers, but many alumni don't know
        about them or can't find them. Our answer to this is Loonie, a website aggregating alumni deals for
        post-secondary alumni.
      </p>
      <p>
        I wanted a stack that would let me quickly boostrap the project as well as being popular (in case we onboard
        another dev). I've worked with Next.js before and typically I write custom components, but I've wanted to try a
        component library and have found working with Chakra UI quite nice. Firebase is my favourite provider of a NoSQL
        database, and it provides easy access to authentication and storage (which we plan to use down the line). We use
        Firestore to store data on discounts and schools. Next.js has great integration with Vercel, so it made sense to
        deploy there.
      </p>
      <SectionHeader>Links</SectionHeader>
      <a href="https://loonie.fyi" target="_blank">loonie.fyi</a>
      <SectionHeader>Media</SectionHeader>
      <Image placeholder="blur" width="1401px" height="738px" src={LoonieImg} />
    </Layout>
  )
}
