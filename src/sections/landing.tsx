import Section from "../components/section";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useMove } from "@use-gesture/react";

const Container = styled.div`
  width: auto;
  flex-grow: 1;
  /* height: 100%; */
  display: flex;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 400px;
  object-position: center;
  object-fit: cover;
  background-color: #fff;

  filter: grayscale(60%) opacity(100%);

  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 0.5em;
`;

const Div = styled.div`
  position: absolute;
  z-index: 3;
`;

const Landing = () => {
  return (
    <Section>
      <Container>
        <Div>
          <h1>Apa kau tau apa makna dari "hidup"?</h1>
          <span>Apa yang membedakan dirimu dengan AI?</span>
          <span>
            Apakah pengalaman, ingatan, atau masa lalu. Apa kau yakin semua itu
            benar-benar terjadi, apa kau yakin dirimu benar-benar ada?
          </span>
        </Div>

        <Img src="/assets/bg_landing.JPG" alt="Background" />
      </Container>
    </Section>
  );
};

export default Landing;
