const Game = ({verifyLetter}) => {
  return (
    <div>
        <p>
            <span>Pontuação: 000</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3>Dica sobre a palavra: <span>Dica...</span></h3>
        {/* word container */}
        <div>
            {/* letra */}
            <span>A</span>
            {/* quadrado branco */}
            <span></span>
        </div>
        {/* letter container */}
        <div>   
            <p>Tente adivinhar uma letra da palavra: </p>
            <form>
                <input className="bg-white" type="text" name="letter" maxLength="1" required/>
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