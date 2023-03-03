import Section from "../components/section";
import styled from "styled-components";
import { useSpring, animated, useSpringRef } from "@react-spring/web";
import { useHover } from "@use-gesture/react";
import { useRef, useState } from "react";

const IMG_CHARACTER_WIDTH = 260;

const Container = styled.div`
  width: auto;
  flex-grow: 1;
  /* height: 100%; */
  display: flex;
  position: relative;
  flex-direction: column;
  /* background-color: #fff; */
  margin: auto auto;
`;

const Ul = styled.ul`
  display: flex;
  margin: auto auto;
  column-gap: 1em;
`;

const Li = styled.li`
  list-style: none;
  position: relative;
`;

const Copyright = styled.span`
  font-size: 0.8em;
  font-weight: 300;
  display: inline-flex;
  margin-left: auto;
  margin-top: 1.5em;
`;

const CloseButton = styled.button`
  width: max-content;
  margin: 1em;
  margin-left: auto;
`;

const calcX = (cx: number) => Math.abs(cx - window.innerWidth / 2);

const LiChara: React.FC<{
  src: string;
  alt: string;
  index: number;
  desc: string;
}> = ({ src, alt, index, desc }) => {
  const [isDisplayingInfo, setIsDisplayingInfo] = useState(false);
  const charaRef = useRef<HTMLDivElement | null>(null);

  const [hover_props, hover_api] = useSpring(
    () => ({
      scale: 1,
      marginLeft: "0",
      marginRight: "0",
      top: "0",
      zIndex: "1",
    }),
    []
  );

  const img_ref = useSpringRef();
  const [click_props, click_api] = useSpring(
    () => ({
      ref: img_ref,
      width: `${IMG_CHARACTER_WIDTH}px`,
      height: "auto",
      top: "0",
      zIndex: "3",
    }),

    []
  );

  const [desc_props, desc_api] = useSpring(
    () => ({
      transformOrigin: "left",
      scaleX: 0,
      zIndex: "2",
    }),
    []
  );

  useHover(
    ({ _active }) => {
      if (!isDisplayingInfo && _active) {
        hover_api.start({
          scale: 1.1,
          marginLeft: "16px",
          marginRight: "16px",
        });
      } else {
        hover_api.start({
          scale: 1,
          marginLeft: "0",
          marginRight: "0",
        });
      }
    },
    { target: charaRef }
  );

  const displayDetail: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDisplayingInfo(true);
    console.log(calcX(e.clientX));
    console.dir(e.clientX);

    hover_api.start({ zIndex: "4" });
    click_api.start({
      zIndex: "6",
      top: "100px",

      onResolve() {
        desc_api.start({ zIndex: "5", scaleX: 1 });
      },
    });
  };

  const closeDetail: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDisplayingInfo(false);

    hover_api.start({ zIndex: "1" });
    desc_api.start({
      scaleX: 0,
      zIndex: "2",
      onResolve() {
        click_api.start({
          zIndex: "3",
          top: "0px",
        });
      },
    });
  };

  return (
    <>
      <Li>
        <animated.div
          ref={charaRef}
          style={{ position: "relative", ...hover_props }}
          onClick={displayDetail}
        >
          <animated.img
            style={{
              position: "relative",
              objectPosition: "center",
              objectFit: "fill",
              ...click_props,
            }}
            src={src}
            alt={alt}
          />

          <animated.div
            style={{
              backgroundColor: "grey",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              top: "50%",
              left: "50%",
              paddingLeft: "10em",
              width: "300px",
              ...desc_props,
            }}
          >
            <CloseButton onClick={closeDetail}>X</CloseButton>
            <div>{desc}</div>
          </animated.div>
        </animated.div>
      </Li>

      {isDisplayingInfo && (
        <Li
          style={{
            zIndex: 2,
            backgroundColor: "grey",
            opacity: 0,
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        ></Li>
      )}
    </>
  );
};

const Chara = () => {
  return (
    <Section>
      <Container>
        <Ul>
          {[
            {
              src: "/assets/1.png",
              alt: "chara 1",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi blanditiis repellendus ipsum, vitae inventore?",
            },
            {
              src: "/assets/2.png",
              alt: "chara 2",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi blanditiis repellendus ipsum, vitae inventore?",
            },
            {
              src: "/assets/3.png",
              alt: "chara 3",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi blanditiis repellendus ipsum, vitae inventore?",
            },
            {
              src: "/assets/4.png",
              alt: "chara 4",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi blanditiis repellendus ipsum, vitae inventore?",
            },
          ].map((img, i) => (
            <LiChara
              key={img.alt}
              index={i}
              src={img.src}
              desc={img.desc}
              alt={img.alt}
            />
          ))}
        </Ul>
        <Copyright>
          Gambar dibuat di{"  "}
          <a target={"_blank"} href="https://waifus.nemusona.com/?">
            Nemu's Waifu Generator
          </a>
        </Copyright>
      </Container>
    </Section>
  );
};

export default Chara;
