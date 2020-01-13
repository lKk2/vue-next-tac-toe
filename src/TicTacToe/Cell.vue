<template>
  <button @click="setCell()">
    {{ label }}
  </button>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    placement: Array,
    label: String
  },
  setup(props, { emit }) {
    const place = ref(props.placement)
    const label = ref(props.label)
    watch(() => {
      label.value = props.label
    })
    const setCell = () => {
      emit('place', place.value)
    }
   
    return {
      place,
      label,
      setCell
    }
  }
}
</script>

<style scoped>
button {
  width: 45px;
  height: 45px;
  font-size: 2em;
  font-weight: bold;
  border: 1px solid #3C4042;
  background: #606368;
}
button:focus {
  outline: none;
}
</style>