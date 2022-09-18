import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Tag from "../../components/Tag";
import HydroPumpImage from "../../public/assets/hydro-pump.jpg";

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
  title: 'Hydro Pump | Kevin Zou',
  image: 'https://kevinzou.xyz/meta-image.png',
};

export default function HydroPump() {
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
      <h2>Hydro Pump</h2>
      <FlexList>
        <Tag bgColor="#6aa05c" color="white">Node.js</Tag>
        <Tag bgColor="#118d4d" color="white">MongoDB</Tag>
        <Tag bgColor="#5562ea" color="white">Discord API</Tag>
        <Tag bgColor="#6112aa" color="white">Heroku</Tag>
      </FlexList>
      <SectionHeader>Description</SectionHeader>
      <p>
        Hydro Pump is a Discord bot that I created to remind users of a Discord server to stay hydrated. The bot sends
        scheduled reminders (configurable to hourly or daily) to drink water.
      </p>
      <p>
        The codebase is written in JavaScript and makes heavy use of the Discord API for functionality. Currently the
        bot runs on a Heroku free dyno (which is enough to keep the bot running 24/7). I utilized MonogDB to persist
        configurations per server.
      </p>
      <SectionHeader>Links</SectionHeader>
      <a href="https://github.com/kevin-zou/hydro-pump-2" target="_blank">GitHub Repo</a>
      <SectionHeader>Media</SectionHeader>
      <Image placeholder="blur" width="473px" height="521px" src={HydroPumpImage} />
    </Layout>
  )
}
