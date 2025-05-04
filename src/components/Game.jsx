const Game = ({verifyLetter}) => {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={verifyLetter}>
            Game OVER
        </button>
    </div>
  )
}

export default Game