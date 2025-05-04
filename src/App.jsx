// CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from "react";

//data
import {wordsList} from "./data/words"

//Components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

//Determinadando os estágios das páginas
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    //escolhe uma categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() *  Object.keys(categories).length)];

    console.log(category);

    // escolhe uma palavra aleatória
    const word = words[category][Math.floor(Math.random() *  words[category].length)]

    console.log(word);

    return { word, category }
  };


  // começar o jogo das palavras secretas
  const startGame = () => {
    //escolher palavra e categoria
    const {word, category} = pickWordAndCategory();

    // array de letras separadas das palavras
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters)
    console.log(word, category)
    
    // setando estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  };

  //processar as letras do input
  const verifyLetter = (letter) => {
    console.log(letter);
  };

  //reiniciar jogo
  const retry = () => {
    setGameStage(stages[0].name)
  };

  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
