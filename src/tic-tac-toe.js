class TicTacToe {
    constructor() {

    }

    currentPlayer = 'x';
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.getFieldValue(rowIndex, columnIndex)) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer == 'x' ? 'o': 'x';
        }
     }

    isFinished() {
        return !!this.getWinner() || this.isDraw();
    }

    getWinner() {
        return this.getRowWinner(0) 
            || this.getRowWinner(1) 
            || this.getRowWinner(2) 
            || this.getColWinner(0)
            || this.getColWinner(1)
            || this.getColWinner(2)
            || this.getMainDiagonalWinner()
            || this.getExtraDiagonalWinner()
            || null;
    }

    noMoreTurns() {
        return !this.gameField.some(gameRow => gameRow.some(item => !item));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        if(!this.checkFieldValueSize(rowIndex) || !this.checkFieldValueSize(colIndex)) {
            return null;
        }
        return this.gameField[rowIndex][colIndex];
    }

    checkFieldValueSize(index) {
        return index >= 0 && index <= 2;
    }

    getRowWinner(rowNumber) {
        let rowValues = [this.getFieldValue(rowNumber, 0), this.getFieldValue(rowNumber, 1), this.getFieldValue(rowNumber, 2)];
        return (rowValues.every(item => item === 'x') && 'x') || rowValues.every(item => item === 'o') && 'o'   
    }

    getColWinner(colNumber) {
        let colValues = [this.getFieldValue(0, colNumber), this.getFieldValue(1, colNumber), this.getFieldValue(2, colNumber)];
        return (colValues.every(item => item === 'x') && 'x') || colValues.every(item => item === 'o') && 'o'   
    }

    getMainDiagonalWinner() {
        let diagonalValues = [this.getFieldValue(0, 0), this.getFieldValue(1, 1), this.getFieldValue(2, 2)];
        return (diagonalValues.every(item => item === 'x') && 'x') || diagonalValues.every(item => item === 'o') && 'o' 
    }
    
    getExtraDiagonalWinner() {
        let diagonalValues = [this.getFieldValue(2, 0), this.getFieldValue(1, 1), this.getFieldValue(0, 2)];
        return (diagonalValues.every(item => item === 'x') && 'x') || diagonalValues.every(item => item === 'o') && 'o' 
    }
}

module.exports = TicTacToe;
