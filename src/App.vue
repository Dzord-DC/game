<template>
  <div id="app">
    <playing-field />
  </div>
</template>

<script>
import PlayingField from './components/PlayingField.vue'

export default {
  name: 'App',
  components: {
    PlayingField
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
