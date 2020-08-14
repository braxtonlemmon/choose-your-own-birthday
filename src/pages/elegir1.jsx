import React, { useState, useContext } from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import AdventureContext from '../utils/AdventureContext';

const grow = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.05) }
  100% { transform: scale(1) }
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
  0% { transform: translateX(-300px) }
  100% { transform: translateX(0) }

`

const Container = styled(Wrapper)`
  max-width: 800px;
  margin: 0 auto;
  max-height: 800px;
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
  #elegir1-yes, #elegir1-no {
    position: relative;
    opacity: 0;
    animation: ${fadeIn} 1s forwards, ${grow} 800ms infinite;
    animation-delay: 1s;
    margin-bottom: 15px;
  }
  #elegir1-yes {
    margin-right: 60px;
    background: green;
    animation-delay: 500ms;
  }
  #elegir1-no {
    margin-left: 60px;
    margin-top: 50px;
    background: red;
    cursor: pointer;
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
    font-size: 5em;
    transform: translateX(-600px);
    animation: ${goAcross} 600ms cubic-bezier(0.73, 0.34, 0.6, 1.31) forwards;
  }
`

const Choice = styled(Button)`
  position: absolute;
  height: ${props => props.noOpt ? `${props.noSize}px` : '140px'};
  width: ${props => props.noOpt ? `${props.noSize}px` : '140px'};
  animation: ${grow} 800ms ease-in-out infinite;
  visibility: ${props => props.noOpt && props.noSize < 60 ? 'hidden' : 'visible'};
`;

function Elegir1() {
  const {
    choices: { sore, bored, ungry },
    updateChoices
  } = useContext(AdventureContext);
  const [noSize, setNoSize] = useState(140);
  
  const handleNoClick = () => {
    const size = noSize;
    console.log(noSize);
    setNoSize(size - 20);
  }

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
              <Choice id="elegir1-yes">YES</Choice>
            </AniLink>
          {/* <AniLink
            paintDrip
            to="#"
            duration={0.8}
            className="link"
            hex="#e2f89c"
          > */}
            <Choice 
              id="elegir1-no"
              onClick={handleNoClick}
              noOpt
              noSize={noSize}
            >NAH</Choice>
          {/* </AniLink> */}
          </>
        :
          <p>How are you?</p>
      }
    </Container>
  )
}

export default Elegir1
