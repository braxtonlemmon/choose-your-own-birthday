import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Wrapper, Button } from '../components/Shared';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Container = styled(Wrapper)`
  color: ${props => props.theme.colors.light};
  p {
    font-size: 5em;
    margin-top: 20px;
  }
`;

const grow = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.02) }
  10% { transform: scale(1) }
`

const bounce = keyframes`
  0% { transform: translateY(0) rotate(3deg)}
  50% { transform: translateY(20px) rotate(-3deg)}
  100% { transform: translateY(0) rotate(3deg)}
`

const ImgDiv = styled.div`
  width: 90%;
  max-width: 500px;
  animation: ${bounce} 600ms ease-in-out infinite;
`;

const Otter = styled(Img)`
  width: 100%;
`;

const Go = styled(Button)`
  margin-top: 15px;
  animation: ${grow} 1s ease-in-out infinite;
`


function Welcome({ data }) {
  return (
    <Container>
      <ImgDiv>
        <Otter fluid={data.file.childImageSharp.fluid} alt="otter" />
      </ImgDiv>
      <p>BOOYAH!!</p>
      <AniLink
        paintDrip
        to="/elegir1"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <Go>Let's go</Go>
      </AniLink>

    </Container>
  )
}

export default Welcome;

export const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "otter.webp"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`