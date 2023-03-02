import React from 'react'
import Board from '../Board/Board';
import './Home.css'

const Home: React.FC<P> = () => {
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
    return (
        <div>
            <h1>Home Page</h1>
            {/* placing a board component */}
            <section className="board-section">
                <Board squares={[]} onClick={function (i: number): void {
                    throw new Error('Function not implemented.');
                } }/>
            </section>
            <section className="score-section"></section>
        </div>
    )
}

export default Home