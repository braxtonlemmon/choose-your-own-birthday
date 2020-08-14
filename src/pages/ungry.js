import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

const spin = keyframes`
  0% { transform: rotate(0) }
  100% { transform: rotate(-360deg) }
`;

const Container = styled(Wrapper)`
  #ungry-button {
    margin-top: 20px;
    width: 120px;
    height: 120px;
  }
`

const ImgDiv = styled.div`
  width: 90%;
  max-width: 500px;
  animation: ${spin} 3s linear infinite;
`

const Coffee = styled(Img)`
  width: 100%;
`

function Ungry({ data }) {
  return (
    <Container>
        <ImgDiv>
          <Coffee fluid={data.file.childImageSharp.fluid} alt="coffee" />
        </ImgDiv>
      <AniLink
        paintDrip
        to="/elegir1"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <Button id="ungry-button">Done</Button>
      </AniLink>
    </Container>
  )
}

export default Ungry

export const query = graphql`
  query ungryQuery {
    file(relativePath: { eq: "coffee.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

