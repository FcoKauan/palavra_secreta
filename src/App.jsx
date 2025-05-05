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

const guessesQty = 5


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    //escolhe uma categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() *  Object.keys(categories).length)];

    // escolhe uma palavra aleatória
    const word = words[category][Math.floor(Math.random() *  words[category].length)]

    return { word, category }
  }, [words]);


  // começar o jogo das palavras secretas
  const startGame = useCallback(() => {
    // reiniciar todas as letras
    clearLettersStates();

    //escolher palavra e categoria
    const {word, category} = pickWordAndCategory();

    // array de letras separadas das palavras
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // setando estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

  //processar as letras do input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    //checar se a letra ja foi utilizada de alguma maneira
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // coloca a letra adivinhada ou remove uma chance
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses -1)
    }
  };

  //reiniciar jogo
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  };

  //limpar letters state
  const clearLettersStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // verificando se as tentativas acabaram
  useEffect(() => {
    if(guesses <= 0){
      // reiniciar todo o estado
      clearLettersStates()

      setGameStage(stages[2].name);
    }
  }, [guesses])

  // verificando a vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    //condição de vitória
    if (guessedLetters.length === uniqueLetters.length) {
      //adicionar pontuação
      setScore((actualScore) => (actualScore += 100));

      //reinicia o jogo com a nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === "end" && <GameOver retry={retry} score={score}/>}
    </div>
  )
}

export default App
