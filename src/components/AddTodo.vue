<template>
  <div><h3>Add todo</h3></div>

  <div class="add">
    <form @submit="submit">
      <input type="text" v-model="title" placeholder="Add todo...">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  name: "addTodo",
  data(){
    return{
      title:""
    }
  },
  methods:{
    ...vuex.mapActions(['addTodo']),
    submit(event){
      event.preventDefault();
      this.addTodo(this.title);
    }
  }
}
</script>

<style scoped>
   form{
     display: flex;
   }

   input[type='text']{
     flex:10;
     padding: 10px;
     border: 1px solid #40b883;
   }

   input[type='submit'] {
     flex: 2;
     background: #41b883;
     color:white;
     border: 1px solid #41b883;
     cursor: pointer;
   }
</style>
