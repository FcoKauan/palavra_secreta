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
    <div className="h-full sm:h-full md:h-ful flex justify-center items-center flex-col">
      <p>
        <span className="font-bold text-[0.8em] md:text-[1.2em]">
          Pontuação
        </span>
        : {score}
      </p>
      <h1 className="mt-[0.8em] mb-[0.8em] text-[1.5em] md:text-[2.5em]">Adivinhe a palavra:</h1>
      <h3 className="mb-[1.2em] text-[0.7em] md:text-[1.2em]">
        Dica sobre a palavra:{" "}
        <span className="text-yellow-300 font-bold">{pickedCategory}</span>
      </h3>
      <p className="text-[0.7em] md:text-[1.2em]">Você ainda tem {guesses} tentativa(s)</p>

      {/* word container */}
      <div className="m-[1.5em] p-[0.5em] sm:p-[0.8em] md:p-[1.5em] border-[10px]  md:border-[20px] border-yellow-300 flex flex-wrap justify-center">
        {letters.map((letter, i) => {
          const isGuessed = guessedLetters.includes(letter);
          return (
            <span
              key={i}
              className="text-[28px] sm:text-[40px] md:text-[70px] 
                     h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[120px] md:w-[120px]
                     border-[2px] md:border-[3px] 
                     flex items-center justify-center
                     bg-white uppercase text-black font-bold flex-shrink-0"
            >
              {isGuessed ? letter : ""}
            </span>
          );
        })}
      </div>

      {/* letter container */}
      <div className="mb-[1.2em]">
        <p className="mb-[1.2em] text-[0.7em] md:text-[1.2em]">Tente adivinhar uma letra da palavra: </p>
        <form
          className="flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-white h-[40px] sm:h-[50px] w-[40px] sm:w-[50px] text-[2em] text-center mr-[1em] text-black outline-none"
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <button className="h-[50px] pt-[24px] sm:pr-[24px] sm:pb-[2px] sm:pl-[24px]
         sm:h-[60px] sm:pt-[10px] sm:pr-[45px] sm:pb-[10px] sm:pl-[45px] sm:text-[1.2em] 
         text-[0.8em]"> Jogar! </button>
        </form>
      </div>
      {/*  wrong letters container*/}
      <div>
        <p className="text-[0.7em] md:text-[1.2em]">Letras erradas:</p>
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
