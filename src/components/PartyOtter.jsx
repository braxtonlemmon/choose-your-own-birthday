import React from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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

const wobble = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(-30deg) }
  100% { transform: rotate(0deg) }
`;

const flip = keyframes`
  0% {
    transform: rotate(0deg) translateY(0);
  }
  25% {
    transform: rotate(-20deg) translateY(-50px);
  }
  50% {
    transform: rotate(20deg) translateY(-100px);
  }
  75% {
    transform: rotate(-20deg) translateY(-50px);
  }
  100% {
    transform: rotate(0deg) translateY(0);
  }
`;

const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgDiv = styled.div`
  width: 95%;
  max-width: 500px;
  height: 380px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Otter = styled(Img)`
  width: 90%;
  animation: ${shake} 2s cubic-bezier(0.25, 0.46, 0.45, 1.3) infinite;
`;

const Horn = styled.div`
  width: 100px;
  position: absolute;
  top: 120px;
  right: 0;
  animation: ${wobble} 1s ease infinite;
  #party-horn {
    width: 100%;
  }
`;

const Hat = styled.div`
  width: 60%;
  position: absolute;
  top: 0px;
  right: 25%;
  animation: ${flip} 1s linear infinite;
  #party-hat {
    width: 100%;
  }
`;


function PartyOtter() {
  const data = useStaticQuery(graphql`
    query {
      otter: file(relativePath: { eq: "otter.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      horn: file(relativePath: { eq: "trumpet.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hat: file(relativePath: { eq: "hat.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return ( 
    <Wrapper>
      <ImgDiv>
        <Otter fluid={data.otter.childImageSharp.fluid} alt="" />
        <Horn>
          <Img id="party-horn" fluid={data.horn.childImageSharp.fluid} alt="/" />
        </Horn>
        <Hat>
          <Img id="party-hat" fluid={data.hat.childImageSharp.fluid} alt="/" />
        </Hat>
      </ImgDiv>
    </Wrapper>
  )
}

export default PartyOtter;


