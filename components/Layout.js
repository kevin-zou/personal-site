import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 0 48px;
  color: #519E8A;
`;

const Title = styled.div`
  font-family: 'Roboto Slab', serif;
  font-size: 32px;
  margin: 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

const Content = styled.div`
  margin: 0 30% 48px;
  min-height: calc(100vh - 150px - 50px - 64px);

  @media only screen and (max-width: 768px) {
    margin-left: 10%;
    margin-right: 10%;
  }

  h1, h2 {
    font-family: 'Roboto Slab', serif;
    color: #519E8A;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 0 12px;
  color: #519E8A;
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
    <>
      <Header>
        <Title>
          <Link href="/">Kevin Zou</Link>
        </Title>
        <Navigation>
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
    </>
  )
}
