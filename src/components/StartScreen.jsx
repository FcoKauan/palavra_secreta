const GameStart = ({ startGame }) => {
  return (
    <div>
        <h1 className="text-[2em] sm:text-[3.5em] font-bold"> Palavra Secreta </h1>
        <p className="text-[0.8em] sm:text-[1em] mb-[2em] color text-yellow-300 mt-[1.2em]">Clique no botão abaixo para começar a jogar</p>
        <button  className="h-[50px] pt-[24px] sm:pr-[24px] sm:pb-[2px] sm:pl-[24px]
         sm:h-[60px] sm:pt-[10px] sm:pr-[45px] sm:pb-[10px] sm:pl-[45px] sm:text-[1.2em] 
         text-[0.8em]" onClick={startGame}> Começar o jogo </button>
    </div>
  )
}

export default GameStart;