import React, { useState, useContext } from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import AdventureContext from '../utils/AdventureContext';

const grow = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.05) }
  10% { transform: scale(1) }
`

const slideIn = keyframes`
  0% { transform: translateX(-500px)}
  100% { transform: translateX(0) }
`

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

const goAcross = keyframes`
  0% { transform: translateX(-600px) }
  20% { transform: translateX(0) }
  40% { transform: translateX(600px) }
  50% { transform: translateY(500px) }
  100% { transform: translateX(0) }

`

const Container = styled(Wrapper)`
  #sore {
    top: 30px;
    left: 50px;
    animation-delay: 100ms;
  }

  #bored {
    bottom: 30px;
    right: 100px;
    animation-delay: 400ms;
  }

  #ungry {
    top: 30%;
    right: 15px;
    animation-delay: 300ms;
  }
  #next {
    position: relative;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
    animation-delay: 1s;
  }
  p {
    position: absolute;
    left: 10px;
    top: 30%;
    width: 50%;
    max-width: 300px;
    font-size: 4em;
    color: ${props => props.theme.colors.light};
    transform: translateY(-500px);
    animation: ${slideIn} 500ms forwards;
    animation-delay: 500ms;
  }
  #elegir-ready {
    text-align: center;
    top: 10px;
    left: 30px;
    transform: translateX(-600px);
    animation: ${goAcross} 8s linear forwards;
  }
`

const Choice = styled(Button)`
  position: absolute;
  animation: ${grow} 800ms ease-in-out infinite;
  height: 140px;
  width: 140px;
`;

function Elegir1() {
  const {
    choices: { sore, bored, ungry },
    updateChoices
  } = useContext(AdventureContext);

  
  return (
    <Container>
      

      {sore && (
        <>
          <AniLink
            paintDrip
            to="/sore"
            duration={0.8}
            className="link"
            hex="#e2f89c"
            onClick={() => updateChoices(prev => ({ ...prev, sore: false }))}
          >
            <Choice id="sore">Sore</Choice>
          </AniLink>
        </>
      )}
      {ungry && (
        <>
          <AniLink
            paintDrip
            to="/ungry"
            duration={0.8}
            className="link"
            hex="#e2f89c"
            onClick={() => updateChoices(prev => ({ ...prev, ungry: false }))}
          >
            <Choice id="ungry">'Ungry</Choice>
          </AniLink>
        </>
      )}
      {bored && (
        <>
          <AniLink
            paintDrip
            to="/bored"
            duration={0.8}
            className="link"
            hex="#e2f89c"
            onClick={() => updateChoices(prev => ({ ...prev, bored: false }))}
            >
            <Choice id="bored">Bored</Choice>
          </AniLink>
        </>
      )}
      {(!bored && !ungry && !sore) 
        ?
          <>
            <p id="elegir-ready">More?</p>
            <AniLink
              paintDrip
              to="/hotgirlsummer"
              duration={0.8}
              className="link"
              hex="#e2f89c"
            >
              <Choice id="next">NEXT</Choice>
            </AniLink>
          </>
        :
          <p>How are you?</p>
      }
    </Container>
  )
}

export default Elegir1
