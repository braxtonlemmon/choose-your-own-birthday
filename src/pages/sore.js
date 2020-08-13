
import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from 'gatsby-image';

const changeHue = keyframes`
  0% { filter: hue-rotate(0deg) }
  20% { filter: hue-rotate(100deg) }
  50% { filter: hue-rotate(250deg) }
  100% { filter: hue-rotate(0deg) }
`

const Container = styled(Wrapper)`
  p {
    color: ${props => props.theme.colors.spring};
    width: 100%;
    max-width: 200px;
    font-size: 3em;
    text-align: center;
  }
`

const ImgDiv = styled.div`
  width: 90%;
  max-width: 500px;
`

const Otter = styled(Img)`
  width: 100%;
  animation: ${changeHue} 1s linear infinite;
`

function Sore({ data }) {
  return (
    <Container>
      <p>BDAY BACK MASSAGE</p>
      <ImgDiv>
        <Otter fluid={data.file.childImageSharp.fluid} alt="otter" />
      </ImgDiv>
      <AniLink
        paintDrip
        to="/elegir1"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <Button>Back</Button>
      </AniLink>
    </Container>
  )
}

export default Sore

export const query = graphql`
  query soreQuery {
    file(relativePath: { eq: "otter.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
