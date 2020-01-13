<template>
  <grid />
</template>

<script>
import Grid from './TicTacToe/Grid.vue'

export default {
  components: {
    Grid
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #202124;
}
</style>
