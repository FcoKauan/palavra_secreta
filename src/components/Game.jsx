//React
import { useState, useRef } from "react";

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div>
      <p>
        <span className="font-bold text-[1.2em]">Pontuação</span>: {score}
      </p>
      <h1 className="text-[2.5em]">Adivinhe a palavra:</h1>
      <h3 className="mb-[1.2em]">
        Dica sobre a palavra: <span className="text-yellow-300 font-bold">{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>

      {/* word container */}
      <div className="m-[1.5em] p-[1.5em] border-[20px] border-yellow-300 flex">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span
              key={i}
              className="text-[70px] leading-[1.7] border-[3px] border-black h-[120px] w-[120px] uppercase bg-white text-black font-bold"
            >
              {letter}
            </span>
          ) : (
            <span
              key={i}
              className="text-[70px] leading-[1.7] border-[3px] border-black h-[120px] w-[120px] uppercase bg-white text-black font-bold"
            ></span>
          )
        )}
      </div>

      {/* letter container */}
      <div className="mb-[1.2em]">
        <p className="mb-[1.2em]">Tente adivinhar uma letra da palavra: </p>
        <form
          className="flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-white h-[50px] w-[50px] text-[2em] text-center mr-[1em] text-black outline-none"
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <button> Jogar! </button>
        </form>
      </div>
      {/*  wrong letters container*/}
      <div>
        <p>Letras erradas:</p>
        {wrongLetters.map((letter, i) => (
          <span className="font-bold" key={i}>
            {letter},   
          </span>
        ))}
      </div>
    </div>
  );
};

export default Game;