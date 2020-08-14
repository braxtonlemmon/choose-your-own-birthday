import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled, {keyframes} from 'styled-components';
import { Wrapper } from '../components/Shared';


const pulse = keyframes`
  0% { opacity: 0.1}
  50% { opacity: 1 }
  100% { opacity: 0.1 }
`;

const Container = styled(Wrapper)`
  h1 {
    font-size: 11em;
    animation: ${pulse} 1.5s ease infinite;
    color: ${props => props.theme.colors.light};
  }
`;


const IndexPage = () => (
  <Container>
    <AniLink
      paintDrip
      to="/welcome"
      duration={2}
      className="link"
      hex="#e2f89c"
    >
      <h1>8:17</h1>
    </AniLink>
    {/* <AniLink 
      paintDrip 
      to="/page-2/" 
      duration={0.8}
      color="yellow"
      >Page 2</AniLink>
      
      <AniLink
      cover
      to="/page-2"
      bg="orange"
      direction="left"
    >Blah</AniLink> */}
  </Container>
)

export default IndexPage
