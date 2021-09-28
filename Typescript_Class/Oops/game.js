var Game = /** @class */ (function () {
    function Game(boxColor) {
        this.currentPlayer = "X";
        for (var index = 1; index < 10; index++) {
            new Box(index, this, boxColor);
        }
    }
    return Game;
}());
var Box = /** @class */ (function () {
    function Box(boxId, board, boxColor) {
        this.id = boxId;
        this.gameBoard = board;
        this.boxElement = document.createElement("div");
        this.boxElement.style.height = "200px";
        this.boxElement.style.width = "200px";
        this.boxElement.style.backgroundColor = boxColor;
        this.boxElement.style.marginTop = "2px";
        // this.boxElement.innerText = this.id.toString();
        this.boxElement.onclick = this.change();
        var game = document.getElementById("game");
        game.appendChild(this.boxElement);
    }
    Box.prototype.change = function () {
        var _this = this;
        return function () {
            if (_this.currentValue == undefined) {
                _this.boxElement.innerText = _this.gameBoard.currentPlayer;
                if (_this.gameBoard.currentPlayer == "X") {
                    _this.gameBoard.currentPlayer = "O";
                }
                else {
                    _this.gameBoard.currentPlayer = "X";
                }
            }
        };
    };
    return Box;
}());
new Game("skyblue");
new Game("wheat");
