import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Project from '../components/Project'

const Profile = styled.img`
  border-radius: 50%;
  max-width: 300px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.flexAlign};
  ${props => props.margin && `margin: ${props.margin};`}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
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
      <Section margin="0 0 16px">
        <h2>Work Experience</h2>
        <Experience
          title="Software Developer Co-op"
          organization="Vidyard"
          tenure="May 2021 - August 2021"
          color="#46DB83"
        />
        <Experience
          title="Full-Stack Software Engineer"
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
        <h2>Projects</h2>
        <Grid>
          <Project
            bgSrc="https://media.giphy.com/media/nfnF2zVPRemXu/giphy.gif"
            link="https://github.com/kevin-zou/hydro-pump-2"
            name="Hydro Pump"
            description="Discord reminders to stay hydrated"
            techStack="Node.js, MongoDB, Discord API"
          />
          <Project
            bgSrc="/assets/nwPlus-website.png"
            link="https://nwplus.io"
            name="nwPlus Homepage"
            description="Led development of new nwPlus website"
            techStack="React.js, Firebase"
          />
        </Grid>
      </Section>
      <Section margin="0 0 16px">
        <h2>Extracurricular</h2>
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
      </Section>
    </Layout>
  )
}
