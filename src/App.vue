<template>
  <div id="app" class="container d-flex justify-content-center">
    <TodoApp/>
    <CountApp/>
  </div>
</template>

<script>
import CountApp from './components/CountAppComponent'
// import TodoApp from './components/TodoAppComponent'

export default {
  name: 'App',
  components: {
    CountApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
</style>
