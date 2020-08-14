import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const zoom = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;  

const shimmer = keyframes`
  0% { color: ${props => props.theme.colors.laurel} }
  20% { color: ${props => props.theme.colors.light} }
  40% { color: ${props => props.theme.colors.pewter} }
  60% { color: red }
  80% { color: green }
  100% { color: pink }
`
const fadeIn = keyframes`
  0% { transform: scale(0) }
  100% { transform: scale(1) }
`

const Container = styled(Wrapper)`
  p {
    animation: ${zoom} 400ms ease forwards;
    color: ${props => props.theme.colors.laurel};
    transform: scale(0);
    margin-bottom: 15px;
  }
  #hot-today {
    font-size: 2em;
    animation-delay: 500ms;
  }
  #hot-is {
    font-size: 3em;
    animation-delay: 1s;
  }
  #hot-hot {
    font-size: 4em;
    animation-delay: 1.5s;
  }
  #hot-girl {
    font-size: 5em;
    animation-delay: 2s;
  }
  #hot-summer {
    font-size: 5.9em;
    animation: ${zoom} 400ms ease forwards, ${shimmer} 500ms infinite;
    animation-delay: 2.5s;
  }
`

const MyButton = styled(Button)`
  transform: scale(0);
  animation: ${fadeIn} 800ms forwards 3.5s;
`

function HotGirlSummer() {
  return (
    <Container>
      <p id="hot-today">TODAY</p>
      <p id="hot-is">IS</p>
      <p id="hot-hot">HOT</p>
      <p id="hot-girl">GIRL</p>
      <p id="hot-summer">SUMMER</p>
      <AniLink
        paintDrip
        to="/checklist"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <MyButton>C'mon</MyButton>
      </AniLink>
    </Container>
  )
}

export default HotGirlSummer
