<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FilterTodo />
      <Todos/>

    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from "@/components/AddTodo";
import FilterTodo from "@/components/FilterTodo";


export default {
  name: 'App',
  components: {
    FilterTodo,
    AddTodo,
    Todos
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/


body {
  font-family: "FrankLin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
