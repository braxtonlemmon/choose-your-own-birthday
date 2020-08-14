import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Container = styled(Wrapper)``

function Template() {
  return (
    <Container>
      <AniLink
        paintDrip
        to="/welcome"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <Button></Button>
      </AniLink>
    </Container>
  )
}

export default Template


