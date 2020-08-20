import React  from 'react';
import Square from './square';

export default function Board (props) {

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
