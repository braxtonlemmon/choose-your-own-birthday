import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Container = styled(Wrapper)`
  h2 {
    font-size: 3em;
    color: ${props => props.theme.colors.light};
    padding-top: 10px;
    padding-bottom: 15px;
    text-align: center;
  }
  #popquiz-button {
    height: 120px;
    width: 120px;
    margin: 15px;
  }
`;

function PopQuiz() {
  return (
    <Container>
      <h2>OmG pOp QuIz!</h2>
      <h2>...</h2>
      <h2>hOpE yOu'Re SmArT</h2>
      <AniLink
        paintDrip
        to="/quiz"
        duration={0.8}
        className="link"
        hex="#e2f89c"
        >
        <Button id="popquiz-button">I am.</Button>
      </AniLink>
      <h2>💪💪💪💪💪</h2>
    </Container>
  )
}

export default PopQuiz
