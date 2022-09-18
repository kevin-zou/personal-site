import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  border-radius: 4px;
  background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${p => p.bgSrc}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;
  padding: 12px;

  &:hover {
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${p => p.bgSrc}) center;
    background-size: cover;
    cursor: pointer;
  }
`;

export default function Project({ bgSrc, link, name, description, techStack}) {
  return (
    <Link href={link}>
      <Card bgSrc={bgSrc}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{techStack}</p>
      </Card>
    </Link>
  );
};
