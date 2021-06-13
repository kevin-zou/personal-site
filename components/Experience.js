import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
  }

  border-left: 5px solid ${props => props.color || '#519E8A'};
  padding-left: 8px;

  :not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export default function Experience({ title, organization, tenure, color }) {
  return (
    <Container color={color}>
      <div>
        <h3>{title}</h3>
        <div>{organization}</div>
      </div>
      <div>{tenure}</div>
    </Container>
  );
}
