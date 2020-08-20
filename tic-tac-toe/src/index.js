import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyModal from './modal'
import Leaders from './leaders'

function Square(props) {
      return (
        <button 
        className="square" 
        onClick={props.onClick}>
        {props.value}
        </button>
      );
    }
  
  
  function Board (props) {

      function ofSquare(i){
      return <Square 
      value= {props.squares[i]}
      onClick= { () => {props.onClick(i)}}
      />;
      }

      return (
        <div>
          <div className="board-row">
            {ofSquare(0)}
            {ofSquare(1)}
            {ofSquare(2)}
          </div>
          <div className="board-row">
            {ofSquare(3)}
            {ofSquare(4)}
            {ofSquare(5)}
          </div>
          <div className="board-row">
            {ofSquare(6)}
            {ofSquare(7)}
            {ofSquare(8)}
          </div>
        </div>
      );
   
  }

  
  function Game () {
      const [Main, setMain] = useState({
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
        })

  
    function handleClick(i) {
      const historyBook = Main.history.slice(0, Main.stepNumber + 1);
      const current = historyBook[historyBook.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = Main.xIsNext ? 'X' : 'O';
      setMain({
        history: historyBook.concat([{
        squares: squares
        }]),
        stepNumber: historyBook.length,
        xIsNext: !Main.xIsNext,
      });
    }

    function jumpTo(step) {
        setMain({
            history: history,
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
     
      const history = Main.history;
      console.log(Main)
      const current = history[Main.stepNumber].squares;
      const winner = calculateWinner(current);
  
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (Main.xIsNext ? 'X' : 'O');
      }

      const moves = history.map((step, move)=> {
          const desc = move ? 
          'Go to move #' + move : 'Go to game start'
          return (
              <li key={move}>
                  <button onClick={()=> jumpTo(move)}>{desc}</button>
              </li>
          )

      })
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current}
              onClick={(i) => handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
          <div>{winner && <MyModal/>}</div>
          <Leaders/>
        </div>
      );
    }
  
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
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