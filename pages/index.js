import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Experience from '../components/Experience'

const Profile = styled.img`
  border-radius: 50%;
  max-width: 300px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.flexAlign};
  margin: ${props => props.margin || '0 0 24px'};
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Kevin Zou</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Section flexAlign="center">
        <Profile
          src="/static/profile_picture.jpg"
          alt="Picture of the author, Kevin"
        />
      </Section>
      <Section>
        <h2>Hi, I'm Kevin!</h2>
        <p>I’m a computer science student in their final year at the University of British Columbia. As an aspiring developer I am passionate about implementing thoughtful and pleasing user experiences. I enjoy evaluating development processes and improving them iteratively.</p>
        <p>My experience includes full stack development with a focus on the front end. I've worked in product-led organizations and am extremely comfortable with collaborating with design and product teams in agile.</p>
        <p>In my spare time you can find me on one of BC’s beautiful trails, playing ultimate frisbee, enjoying video games, or relaxing with friends and family.</p>
      </Section>
      <Section>
        <h2>What I'm up to</h2>
        <Experience
          title="Development Director"
          organization="nwPlus"
          tenure="May 2021 - present"
          color="#06C1C0"
        />
        <Experience
          title="Development Director"
          organization="UBC Esports Association"
          tenure="May 2021 - present"
          color="#15204E"
        />
        <Experience
          title="Software Developer Co-op"
          organization="Vidyard"
          tenure="May 2021 - August 2021"
          color="#46DB83"
        />
      </Section>
    </Layout>
  )
}
