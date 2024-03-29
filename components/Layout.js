import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Page = styled.div`
  margin: 0 25%;

  @media only screen and (max-width: 768px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  color: #E76F51;
  text-transform: lowercase;

  a::after {
    display: block;
    content: '';
    width: 0;
    height: 0.1em;
    background-color: #e24d28;
    transition: color 400ms, width 400ms;
  }

  a:hover::after,
  a:focus::after {
    color: #e24d28;
    width: 100%;
  }
`;

const Title = styled.div`
  font-family: 'Poppins', serif;
  font-weight: 600;
  font-size: 32px;
  margin: 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 20px;
  gap: 20px;
`;

// If everything can fit on one screen (ie. 100vh), make sure that the footer is visible
// 150px header height, 20px top margin of h2 element, 48px bottom margin, 50px footer height, 12px footer margin
const Content = styled.div`
  margin-bottom: 48px;
  min-height: calc(100vh - 150px - 20px - 48px - 50px - 12px);

  h1, h2 {
    font-family: 'Poppins', serif;
    font-weight: 600;
  }

  a {
    background-image: linear-gradient(to right, #E76F51, #e24d28);
    background-size: 0% 0.1em;
    background-position: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
  }

  a:hover {
    background-size: 100% 0.1em;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: #E76F51;
  margin-bottom: 12px;
`;

const Icon = styled.div`
  margin: 0px 24px;
  font-size: 24px;
  transition: transform .2s ease-in-out;

  :hover {
    transform: scale(1.5);
  }
`;

export default function Layout({children}) {
  return (
    <Page>
      <Header>
        <Title>
          <Link href="/">Kevin Zou</Link>
        </Title>
        <Navigation>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </Navigation>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>
        <Icon>
          <a href="https://github.com/kevin-zou" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Icon>
        <Icon>
          <a href="https://www.linkedin.com/in/kevin-zou" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Icon>
        <Icon>
          <a href="https://twitter.com/therealkevinzoo" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Icon>
      </Footer>
    </Page>
  )
}
