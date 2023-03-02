import styled from "styled-components";

const Section = styled.section<{ bg?: string }>`
  scroll-snap-align: start;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: auto;
  flex-grow: 1;
  background-color: ${(props) => props?.bg || "salmon"};
`;

export default Section;
