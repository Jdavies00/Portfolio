import React, { useState } from 'react';
import { calculateWinner } from "./calculateWinner"
import Board from "./Board";
const style = {
    width: '200px',
    margin: '20px auto'
};

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setSetepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        if (winner || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setSetepNumber(timeInHistory.length);

        setXisNext(!xIsNext);

    }
    const jumpto = step => {
        setSetepNumber(step);
        setXisNext(step % 2 === 0)
    }
    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to Start';
            return (
                <li key={move}>
                    <button onClick={() => jumpto(move)}>{destination}</button>
                </li>

            )
        })
    )

    return (
        <>
            <Board squares={history[stepNumber]} onClick = {handleClick}/>
            <div style={style}>
                <p>
                    {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
                </p>
                {renderMoves()}
            </div>
        </>
    )
}
export default Game