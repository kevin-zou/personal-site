import styled from "styled-components";

const StyledTag = styled.span`
  background-color: ${p => p.bgColor};
  color: ${p => p.color};
  border-radius: 4px;
  padding: 2px 4px;
  text-align: center;
`

export default function Tag({ bgColor, color, children }) {
  return (
    <StyledTag bgColor={bgColor} color={color}>
      {children}
    </StyledTag>
  )
}
