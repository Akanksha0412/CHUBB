class Game {
    currentPlayer: string = "X"
    constructor(boxColor) {
        for (let index = 1; index < 10; index++) {
            new Box(index, this,boxColor)
        }
    }
}

class Box {
    id: number;
    currentValue: string | undefined;
    boxElement: HTMLElement;
    gameBoard: Game;
    constructor(boxId, board,boxColor) {
        this.id = boxId;
        this.gameBoard = board;
        this.boxElement = document.createElement("div");
        this.boxElement.style.height = "200px";
        this.boxElement.style.width = "200px";
        this.boxElement.style.backgroundColor = boxColor;
        this.boxElement.style.marginTop = "2px";
        // this.boxElement.innerText = this.id.toString();
        this.boxElement.onclick = this.change();
        let game = document.getElementById("game")
        game.appendChild(this.boxElement)
    }

    change(): () => void {
        return () => {
            if (this.currentValue == undefined) {
                this.boxElement.innerText = this.gameBoard.currentPlayer;
                if (this.gameBoard.currentPlayer == "X") {
                    this.gameBoard.currentPlayer = "O"
                } else {
                    this.gameBoard.currentPlayer = "X"
                }
            }
        }
    }
}

new Game("skyblue")
new Game("wheat")