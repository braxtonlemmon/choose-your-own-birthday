import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const Container = styled(Wrapper)`
  p {
    color: ${props => props.theme.colors.light};
    font-size: 3em;
  }
  .bored-action {
    animation: ${shake} 0.9s cubic-bezier(.36,.07,.19,.97) infinite;
    transform: translate3d(0,0,0);
    font-size: 6em;
  }
  #bored-button {
    margin-top: 20px;
    width: 120px;
    height: 120px;
  }
`


function Bored() {
  return (
    <Container>
      <p class="bored-action">LOOK</p>
      <p>and</p>
      <p class="bored-action">LISTEN</p>
      <AniLink
        paintDrip
        to="/elegir1"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <Button id="bored-button">Done</Button>
      </AniLink>
    </Container>
  )
}

export default Bored
