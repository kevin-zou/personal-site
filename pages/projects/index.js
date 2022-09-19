import styled from "styled-components";
import Layout from "../../components/Layout";
import Project from '../../components/Project'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
`;

export default function Projects() {
  return (
    <Layout>
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
