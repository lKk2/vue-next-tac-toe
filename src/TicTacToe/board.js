/**
 * board.js
 * helper class to control the board
 */

// Game Grid [3x3]
export default class Board {
    constructor(cells) {
      this.cells = cells
    }

    has3InARow(player) {
      for (let i=0; i < 3; i++) {
        // Horizontal
        if (this.cells[0][i] === player && this.cells[1][i] === player && this.cells[2][i] === player) {
          return true
        }
        // Vertical
        if (this.cells[i][0] === player && this.cells[i][1] === player && this.cells[i][2] === player) {
          return true
        }
      }
      // Diagonals
      if (this.cells[0][0] === player && this.cells[1][1] === player && this.cells[2][2] === player) {
        return true
      }
      if (this.cells[2][0] === player && this.cells[1][1] === player && this.cells[0][2] === player) {
        return true
      }
      return false
    }

    isGameOver() {
      return this.getPossibleMoves().length === 0 || this.has3InARow('X') || this.has3InARow('O')
    }

    getPossibleMoves() {
      let moves = []
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.cells[i][j] === '') {
            moves.push({x: i, y: j})
          }
        }
      }
      return moves
    }
}