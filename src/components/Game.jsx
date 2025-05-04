const Game = ({verifyLetter}) => {
  return (
    <div>
        <p>
            <span className="font-bold">Pontuação: 000</span>
        </p>
        <h1 className="text-[2.5em]">Adivinhe a palavra:</h1>
        <h3>Dica sobre a palavra: <span className="text-yellow-300">Dica...</span></h3>
        {/* word container */}
        <div className="m-[1.5em] p-[1.5em] border-[20px] border-yellow-300 flex">
            {/* letra */}
            <span className="text-[70px] leading-[1.7] border-[3px] border-black h-[120px] w-[120px] uppercase bg-white text-black font-bold">A</span>
            {/* quadrado branco */}
            <span className="text-[70px] leading-[1.7] border-[3px] border-black h-[120px] w-[120px] uppercase bg-white text-black font-bold"></span>
        </div>
        {/* letter container */}
        <div className="mb-[1.2em]">   
            <p className="mb-[1.2em]">Tente adivinhar uma letra da palavra: </p>
            <form className="flex items-center justify-center">
                <input className="bg-white h-[50px] w-[50px] text-[2em] text-center mr-[1em]" type="text" name="letter" maxLength="1" required/>
                <button> Jogar! </button>
            </form>
        </div>
        {/*  wrong letters container*/}
        <div>
            <p>Letras já utilizadas:</p>
            <span>a,</span>
            <span>b,</span>
        </div>
    </div>
  )
}

export default Game