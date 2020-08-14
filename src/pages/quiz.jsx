import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Wrapper, Button } from "../components/Shared"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import jazz from '../audio/bensound-jazzyfrenchy.mp3';
import { AiFillPlayCircle } from 'react-icons/ai';

const Container = styled(Wrapper)`
  position: relative;
`;

const TheQuiz = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
`;

const Tile = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0,0,0,0.6);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  color: rgba(0,0,0,0.9);
  background: ${props => props.theme.colors.pewter};
  font-size: 1.5em;
  background: ${props => props.correct ? props.theme.colors.spring : props.theme.colors.pewter};
  transition: background-color 300ms ease-in;
`;

const Winner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  #quiz-button {
    border-color: ${props => props.theme.colors.blue};
    font-size: 4em;
  }
`;

const Intro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  flex-direction: column;
  h2 {
    font-size: 3em;
    text-align: center;
    line-height: 1.5em;
  }
  #quiz-play {
    cursor: pointer;
  }
`;

function Spot({ children, guesses, setGuesses, num, setQuestions, resetQuiz, questions }) {
  const [correct, setCorrect] = useState(false);

  const handleClick = () => {
    let current = guesses;
    if ((num - current[current.length - 1]) === 1) {
      current.push(num);
      setCorrect(true);
      setQuestions(prev => ({ ...prev, [num]: true }))
      setGuesses(current);
    } else {
      setCorrect(false);
      resetQuiz();
      setGuesses([0])
    }
  }

  return (
    <Tile
      id="quiz-1"
      onClick={handleClick}
      correct={correct && questions[num]}
    >
      {children}
    </Tile>
  )
}

function Quiz() {
  const [guesses, setGuesses] = useState([0]);

  const reset = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  }
  const [questions, setQuestions] = useState(reset);
  const [play, setPlay] = useState(false);

  const resetQuiz = () => {
    setQuestions(reset);
  }

  const handlePlayClick = () => {
    setPlay(true);
  }
  
  return (
    <Container>
      <audio src={jazz} autoPlay loop />
      {!play && 
        <Intro>
          <h2>WHAT is the correct sequence, brainiac?</h2>
          <AiFillPlayCircle size={100} id="quiz-play" onClick={handlePlayClick} />
        </Intro>
      } 
      <TheQuiz
        guesses={guesses}
        >
        <Spot
          guesses={guesses}
          setGuesses={setGuesses}
          num={6}
          questions={questions}
          setQuestions={setQuestions}
          resetQuiz={resetQuiz}
          questions={questions}
          >The silky sakai lemur is saved.</Spot>
        <Spot
          guesses={guesses}
          setGuesses={setGuesses}
          num={3}
          questions={questions}
          setQuestions={setQuestions}
          resetQuiz={resetQuiz}
          questions={questions}
        >Butler is in a fish freezer.</Spot>
        <Spot
          guesses={guesses}
          setGuesses={setGuesses}
          num={8}
          questions={questions}
          setQuestions={setQuestions}
          resetQuiz={resetQuiz}
          questions={questions}
          >Foaly's wife receives a gift.</Spot>
        <Spot
          guesses={guesses}
          setGuesses={setGuesses}
          num={1}
          questions={questions}
          setQuestions={setQuestions}
          resetQuiz={resetQuiz}
          questions={questions}
        >Artemis is paid in gold.</Spot>
        <Spot
          guesses={guesses}
          setGuesses={setGuesses}
          num={5}
          questions={questions}
          setQuestions={setQuestions}
          resetQuiz={resetQuiz}
          questions={questions}
          >N°1 is kidnapped by Minerva.</Spot>
        <Spot
          guesses={guesses}
          setGuesses={setGuesses}
          num={4}
          questions={questions}
          setQuestions={setQuestions}
          resetQuiz={resetQuiz}
          questions={questions}
          >A bio-bomb almost explodes.</Spot>
        <Spot
          guesses={guesses}
          setGuesses={setGuesses}
          num={2}
          questions={questions}
          setQuestions={setQuestions}
          resetQuiz={resetQuiz}
          questions={questions}
          >Goblin rebellion!</Spot>
        <Spot
          guesses={guesses}
          setGuesses={setGuesses}
          num={7}
          questions={questions}
          setQuestions={setQuestions}
          resetQuiz={resetQuiz}
          questions={questions}
          >Arty has paranoia.</Spot>
      </TheQuiz>
      { guesses.length > 8 &&
        <Winner>  
          <AniLink
            paintDrip
            to="/postquiz"
            duration={0.8}
            className="link"
            hex="#e2f89c"
            >
          <Button id="quiz-button">🤓</Button>
          </AniLink>
        </Winner>
      }
    </Container>
  )
}

export default Quiz