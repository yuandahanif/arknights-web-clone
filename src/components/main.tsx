import styled from "styled-components";
const Main = styled.main`
  flex-grow: 1;
  width: auto;
  box-sizing: border-box;
  max-height: 100vh;
  gap: 2em;

  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(3rem);
  scroll-snap-type: y mandatory;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Main;
