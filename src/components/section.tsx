import styled from "styled-components";

const Section = styled.section<{ bg?: string; sytle?: string }>`
  scroll-snap-align: start;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: auto;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 2em 0;
  background-color: ${(props) => props?.bg || "transparant"};
  position: relative;
`;

export default Section;
