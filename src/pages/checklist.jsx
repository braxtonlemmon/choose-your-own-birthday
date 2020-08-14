import React from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Container = styled(Wrapper)`
  h2 {
    color: ${props => props.theme.colors.light};
    font-size: 3em;
    text-decoration: underline;
    margin-bottom: 20px;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  width: 100%;
  font-size: 2.5em;
  margin: 10px 0;
  label {
    padding-top: 8px;
  }
  .container {
    display: block;
    position: relative;
    padding-left: 65px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0; 
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 48px;
    width: 48px;
    border-radius: 10px;
    border: 5px solid ${props => props.theme.colors.laurel};
    background-color: ${props => props.theme.colors.pewter};
  }

  .checkmark::after {
    content: '★';
    font-size: 1.5em;
    position: absolute;
    opacity: 0;
    transform: scale(0);
    transition: opacity 200ms ease-in, transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.45);
  }

  .container input:checked ~ .checkmark:after {
    display: block;
    opacity: 1;
    transform: scale(1);
  }

  .container .checkmark:after {
    left: -5px;
    top: -8px;
  }
`;

const Ok = styled(Button)`
  height: 80px;
  width: 80px;
`;

function Checklist() {
  return (
    <Container>
      <h2>To pack:</h2>
      <List>
        <Row>
          <label class="container">Sunglasses
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </Row>
        <Row>
          <label class="container">Swimsuit
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </Row>
        <Row>
          <label class="container">Raincoat
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </Row>
        <Row>
          <label class="container">Mask
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </Row>
        <Row>
          <label class="container">Train tix
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </Row>
      </List>
      <AniLink
        paintDrip
        to="/welcome"
        duration={0.8}
        className="link"
        hex="#e2f89c"
      >
        <Ok>Ok</Ok>
      </AniLink>
    </Container>
  )
}

export default Checklist
