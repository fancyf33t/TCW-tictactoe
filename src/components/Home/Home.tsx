import React, { useState } from 'react'
import Board from '../Board/Board';
// import Board from '../Board/Board';
import './Home.css'

type Props = {};

const Home: React.FC<Props> = () => {
    const [history, setHistory] = useState<Array<{ squares: Array<string | null> }>>([
    { squares: Array(9).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [xScore, setXScore] = useState<number>(0);
  const [oScore, setOScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const squares = [...current.squares];

    if (winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory([...newHistory, { squares }]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };
  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
  const resetGame = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
    setXScore(0);
    setOScore(0);
    setRound(1);
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
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div>
            <h1>Home Page</h1>
            {/* placing a board component */}
            <section className="board-section">
                <Board squares={current.squares} onClick={handleClick} />
            </section>
            <section className="score-section"></section>
        </div>
    )
}

export default Home;