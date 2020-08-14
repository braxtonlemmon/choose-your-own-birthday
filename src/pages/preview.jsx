import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';


const Container = styled(Wrapper)`
  h2 {
    font-size: 3em;
    color: ${props => props.theme.colors.spring};
    text-align: center;
  }
  & > * {
    margin: 15px 0;
  }
`

const Image = styled.div`
  width: 90%;
  max-width: 500px;
`;

const Pic = styled(Img)`
  height: 100%;
`;

const Duh = styled(Button)`
  position: absolute;
  top: ${props => `${props.y}%`};
  left: ${props => `${props.x}%`};
`;
function Preview({ data }) {
  const elements = [
    (<div></div>),
    (<h2 id="pre-now">Now.</h2>),
    (<h2 id="pre-today">Today involves the following:</h2>),
    (<Image 
      id="pre-flower"
      >
      <Pic 
        loading="eager"
        fluid={data.flower.childImageSharp.fluid} 
        alt="" 
        fadeIn={true}
        critical
      />
    </Image>),
    (<Image 
      id="pre-water"
      >
      <Pic 
        fluid={data.water.childImageSharp.fluid} 
        alt="" 
        fadeIn={true}
      />
    </Image>
    ),
    (<Image 
      id="pre-bagel"
      >
      <Pic 
        fluid={data.bagel.childImageSharp.fluid} 
        alt="" 
        fadeIn={true}
      />
    </Image>
    ),
    (<Image 
      id="pre-football"
      >
      <Pic 
        fluid={data.football.childImageSharp.fluid} 
        alt="" 
        fadeIn={true}
      />
    </Image>
    ),
    (<Image 
      id="pre-nachos"
      >
      <Pic 
        fluid={data.nachos.childImageSharp.fluid} 
        alt="" 
        fadeIn={true}
      />
    </Image>
    ),
    (<Image 
      id="pre-nachos"
      >
      <Pic 
        fluid={data.nachos.childImageSharp.fluid} 
        alt="" 
        fadeIn={true}
      />
    </Image>
    ),
    (<Image 
      id="pre-beans"
      >
      <Pic 
        fluid={data.beans.childImageSharp.fluid} 
        alt="" 
        fadeIn={true}
      />
    </Image>
    ),
    (<Image 
      id="pre-raspberries"
      >
      <Pic 
        fluid={data.raspberries.childImageSharp.fluid} 
        alt="" 
        fadeIn={true}
      />
    </Image>
    )
  ]
  const [current, setCurrent] = useState(elements[1])
  const [x, setX] = useState(25);
  const [y, setY] = useState(60);
  const [count, setCount] = useState(0);
  const [nextUrl, setNextUrl] = useState('#');

  const randomPercent = () => {
    return Math.floor(Math.random() * 55);
  }

  const handleDuh = () => {
    setX(randomPercent());
    setY(randomPercent());
    const theCount = count;
    setCount(theCount + 1);
    if (theCount > 6) {
      setNextUrl('/welcome');
    }
  }

  useEffect(() => {
    let x = 0;
    let runIt = setInterval(() => {
      x += 1;
      setCurrent(elements[x])

      if (x === elements.length) {
        setCurrent(false);
        clearInterval(runIt)
      }
    }, 200)
  }, [])

  return (
    <Container>
      {current && current}
      {
        !current &&
        <>
          <h2>ARE. YOU. EXCITED?</h2>
          <AniLink
            paintDrip
            to={nextUrl}
            duration={0.8}
            className="link"
            hex="#e2f89c"
            >
            <Duh onClick={handleDuh} x={x} y={y}>Duh.</Duh>
          </AniLink>
        </>
      }
    </Container>
  )
}

export default Preview


export const query = graphql`
  query previewQuery {
    bagel: file(relativePath: {eq: "bagel.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beans: file(relativePath: {eq: "coffee-beans.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flower: file(relativePath: {eq: "flower.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    football: file(relativePath: {eq: "football.webp"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nachos: file(relativePath: {eq: "nachos.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    raspberries: file(relativePath: {eq: "raspberries.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    water: file(relativePath: {eq: "water.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`

