const StartScreen = ({ startGame }) => {
  return (
    <div>
        <h1 className="text-[3.5em] font-bold"> Palavra Secreta </h1>
        <p className="mb-[2em] color text-yellow-300 mt-[1.2em]">Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}> Começar o jogo </button>
    </div>
  )
}

export default StartScreen