<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>
        Double click to mark as complete
      </span>

      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>

      <span>
        <span class="complete-box"></span> = Complete
      </span>

    </div>
    <div class="todos">
      <div @dblclick="doubleClick(todo)" v-for="todo in allTodos"
           :key="todo.id"
           class="todo"
      v-bind:class="{'is-complete': todo.completed}">
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import vuex from 'vuex'

export default {
  name: "TodosComponent",
  computed: {
    ...vuex.mapGetters(['allTodos']),
  },
  created() {
    this.fetchTodos();
  },
  mounted() {
    console.log(this.allTodos.length);
  },
  methods: {
    ...vuex.mapActions(['fetchTodos', "deleteTodo", "updateTodo"]),

    doubleClick(todo)
    {
      const updTodo ={
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend{
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box{
  display: inline-block;
  width: 10px;
  height:10px;
  background-color: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height:10px;
  background-color: #41b883;
}

.is-complete{
  background-color: #35495e;
  color:#fff;
}


@media(max-width:500px) {
  .todos{
    grid-template-columns: 1fr;
  }
}

</style>
