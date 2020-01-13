<template>
<div>
  <h1>Tic Tac Toe</h1>
  <div v-if="winner">
    <h2 v-if="winner !== 'Draw'">{{ winner }} wins!</h2>
    <h2 v-else>DRAW :O!</h2>
  </div>
  <div v-else>
    <h2>Turn: {{ turn }}</h2>
  </div>
  <div class="flex" v-for="(n, i) in 3" :key="i">
    <div v-for="(n, j) in 3" :key="j">
      <cell :placement="[i, j]" :label="gameGrid[i][j]" @place="setPlace" />
    </div>
  </div>
  <div class="flex again" v-if="winner">
    <button @click="reset()">Play again?</button>
  </div>
</div>
</template>

<script>
import Board from './board'
import Cell from './Cell.vue'
import { onMounted, reactive, watch, ref, computed } from 'vue'
export default {
  components: {
    Cell
  },
  setup() {
    const gameGrid = reactive([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ])
    const board = reactive(new Board(gameGrid))
    const lastWasX = ref(false)
    const setPlace = (e) => {
      if (!board.isGameOver() && gameGrid[e[0]][e[1]] === '') {
        lastWasX.value ? gameGrid[e[0]][e[1]] = 'O' : gameGrid[e[0]][e[1]] = 'X'
        lastWasX.value = !lastWasX.value
      }
    }
    const reset = () => {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          gameGrid[i][j] = ""
        }
      }
    }
    const winner = computed(() => {
      if (board.isGameOver()) {
        if (board.has3InARow('X')) { return 'X' }
        if (board.has3InARow('O')) { return 'O' }
        else { return 'Draw' }
      } else {
        return false
      }
    })
    const turn = computed(() => {
      return lastWasX.value ? 'O' : 'X'
    })
    return {
      gameGrid,
      winner,
      setPlace,
      turn,
      reset
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.flex>button {
  width: 250px;
  height: 25px;
  color: darkgray;
  border: 2px solid transparent;
  border-radius: 25px;
  background-color: black;
}
.again {
  margin-top: 15px;
}
h1 {
  color: #DDDDDD;
  margin-top: -50px;
  text-align: center;
}
h2 {
  color: #DDDDDD;
  text-align: center;
}
</style>