const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1 className="text-[2em] sm:text-[3.5em] font-bold">Fim de jogo!</h1>
        <h2 className="text-[1.2em]">A sua pontuação foi: <span className="text-yellow-300 text-[1.2em] font-bold">{score}</span>!</h2>
        <button onClick={retry} className="h-[50px] pt-[24px] sm:pr-[24px] sm:pb-[2px] sm:pl-[24px]
         sm:h-[60px] sm:pt-[10px] sm:pr-[45px] sm:pb-[10px] sm:pl-[45px] sm:text-[1.2em] 
         text-[0.8em] mt-[1.5em]"> Resetar jogo </button>
    </div>
  )
}

export default GameOver;