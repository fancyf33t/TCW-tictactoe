import React, { useState } from 'react'
import Board from '../Board/Board';
// import Board from '../Board/Board';
import './Home.css'

type Props = {};

const Home: React.FC<Props> = () => {
    const [history, setHistory] = useState<Array<{ squares: Array<string | null> }>>([
        { squares: Array(9).fill(null) },]);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [xScore, setXScore] = useState<number>(0);
    const [oScore, setOScore] = useState<number>(0);
    const [round, setRound] = useState<number>(1);

    const current = history[stepNumber];

    const handleClick = (i: number) => {
            const newHistory = history.slice(0, stepNumber + 1);
            const squares = [...current.squares];

            if (calculateWinner(squares) || squares[i]) {
              return;
            }

            squares[i] = xIsNext ? 'X' : 'O';

            const newWinner = calculateWinner(squares);

            setHistory([...newHistory, { squares }]);
            setStepNumber(newHistory.length);
            setXIsNext(!xIsNext);

            if (newWinner) {
              if (newWinner === 'X') {
                    setXScore((xScore) => xScore + 1);
              } else if (newWinner === 'O') {
                    setOScore((oScore) => oScore + 1);
              }
              setRound((round) => round + 1);
            } else if (squares.every((square) => square !== null)) {
              setRound((round) => round + 1);
            }
      };
    const resetGame = () => {
        setHistory([{ squares: Array(9).fill(null) }]);
        setStepNumber(0);
        setXIsNext(true);
        setXScore(0);
        setOScore(0);
        setRound(1);
    };



    function calculateWinner(squares: Array<string | null>): string | null {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    let status;
    if (calculateWinner(current.squares)) {
        status = `Winner: ${calculateWinner(current.squares)}`;
    } else if (current.squares.every((square) => square !== null)) {
        status = 'Tie game!';
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <>
            <h1>Tic-Tac-Toe</h1>
            <p><em>Mohammed & Keitron collaboration</em></p>
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={handleClick} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div>
                        <button onClick={resetGame}>Reset</button>
                    </div>
                    <div>
                        Round: {round} | Player X Score: {xScore} | Player O Score: {oScore}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;