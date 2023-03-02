import React from 'react';
import Squares from '../Squares/Squares';
// import Square from '../Squares/Squares';
import './Board.css';

type BoardProps = {
    squares: Array<string | null>;
    onClick: (i: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
    const renderSquare = (i: number) => (
        <Squares value={squares[i]} onClick={() => onClick(i)} />
    );

    return (
        <div className="big-board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
