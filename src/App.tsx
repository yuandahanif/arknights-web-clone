import { useState } from "react";
import { useScroll, animated } from "@react-spring/web";
import "./App.css";
import Section from "./components/section";
import Main from "./components/main";
import Landing from "./sections/landing";

function App() {
  const [count, setCount] = useState(0);
  const { scrollYProgress } = useScroll();

  return (
    <Main>
      <Landing />
      <Section bg="skyblue">
        <animated.div>Hello World</animated.div>
      </Section>
    </Main>
  );
}

export default App;
