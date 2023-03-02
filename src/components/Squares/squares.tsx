import React from 'react';
import './Squares.css';

type SquareProps = {
    value: string | null;
    onClick: () => void;
};

const Squares: React.FC<SquareProps> = ({ value, onClick }) => (
    <>
    <button className="square" onClick={onClick}>
        {value}
    </button>
    {/* <div className="square"></div> */}
    </>
    
);

export default Squares;