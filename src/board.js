import Square from "./square";
import React from "react";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sqares: Array(9).fill(''),
            next: true,
        };
    }
    renderSquare(i) {
        return <Square value={this.state.sqares[i]} onClick={() => this.clickSquare(i)} />;
    }

    clickSquare(i) {
        if(calculateWinner(this.state.sqares)){
            alert("game over");
            this.setState({sqares:Array(9).fill('')})
            return ;
        }
        const sqares = this.state.sqares.slice();
        if(this.state.sqares[i]){
            alert("this block has content");
            return ;
        }
        sqares[i] = this.state.next ? 'X' : 'O';
        this.setState({ sqares: sqares, next: !this.state.next });
    }

    check() {
        return calculateWinner(this.state.sqares);
    }

    render() {
        let status = 'Next player: ' + (this.state.next ? 'X' : 'O');
        const winner = calculateWinner(this.state.sqares);
        if (winner) {
            status = 'Winner: ' + winner;
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

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
export default Board;