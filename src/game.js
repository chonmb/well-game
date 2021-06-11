import Board from "./board";
import React from "react";

class Game extends React.Component {

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">

                </div>
            </div>

        );
    }
}

export default Game;