import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Container = styled(Wrapper)`
  h2 {
    font-size: 3em;
    color: ${props => props.theme.colors.light};
    text-align: center;
  }
  & > * {
    margin-bottom: 15px;
  }
`

function PostQuiz() {
  return (
    <Container>
      <h2>You are so smart.</h2>
      <AniLink
        paintDrip
        to="/preview"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <Button>I know.</Button>
      </AniLink>
      <AniLink
        paintDrip
        to="/preview"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <Button>I know.</Button>
      </AniLink>
    </Container>
  )
}

export default PostQuiz


