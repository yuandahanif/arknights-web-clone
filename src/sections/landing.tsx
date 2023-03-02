import Section from "../components/section";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
  width: auto;
  flex-grow: 1;
  background-image: url("/assets/bg_landing.JPG");
`;

const Landing = () => (
  <Section>
    <Container>Hello World</Container>
  </Section>
);

export default Landing;
