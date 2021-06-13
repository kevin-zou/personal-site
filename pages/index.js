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
      <Section flexAlign="center">
        <Profile
          src="/static/profile_picture.jpg"
          alt="Picture of the author, Kevin"
        />
      </Section>
      <Section>
        <h2>Hi, I'm Kevin!</h2>
        <p>I’m a software developer currently studying at the University of British Columbia. When it comes to tech and development, I love thinking about how to improve engineering processes and create thoughtfully designed and pleasing experiences for the user.</p>
        <p>In my spare time you can find me on one of BC’s beautiful trails, playing a game of ultimate, playing video games, or relaxing with friends and family.</p>
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
