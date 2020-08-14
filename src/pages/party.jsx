import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import PartyOtter from '../components/PartyOtter';



const Container = styled(Wrapper)`
  position: relative;
  h2 {
    position: absolute;
    font-size: 2.5em;
    bottom: 40px;
    width: 200px;
    text-align: center;
    color: ${props => props.theme.colors.spring};
  }
`

function Party() {
  return (
    <Container>
      <PartyOtter />
      <h2>
        HAPPY BIRTHDAY BB!
      </h2>
    </Container>
  )
}

export default Party


