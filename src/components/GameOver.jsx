const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1 className="text-[3.5em] font-medium mb-[0.4em]">Fim de jogo!</h1>
        <h2 className="text-[1.2em]">A sua pontuação foi: <span className="text-yellow-300 text-[1.2em] font-bold">{score}</span>!</h2>
        <button onClick={retry} className="mt-[1.5em]"> Resetar jogo </button>
    </div>
  )
}

export default GameOver;