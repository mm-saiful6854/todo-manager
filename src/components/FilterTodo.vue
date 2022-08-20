<template>
  <div style="display: flex;">

    <div style="margin-top:20px;">Filter Todos:</div>
    <div style="flex:6; padding-left: 10px;">
      <span>Number of Todo</span>
      <select style="width: 200px; margin-left: 5px;" name="" id="" v-model="filter.numberOfItems" @change="filterTodo(filter)">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="40">40</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>


    <div>
      <span>Status</span>
      <select  v-model="filter.itemStatus" @change="filterTodo(filter)" style="margin-left: 5px; width: 200px;">
        <option value="-1">All</option>
        <option value="0">In-Completed</option>
        <option value="1">Completed</option>
      </select>
    </div>

  </div>
</template>

<script>
import vuex from "vuex";
import filter from '../models/Filter';

export default {
  name: "FilterTodo",
  computed: {
    ...vuex.mapGetters(['allTodos'])
  },
  data() {
    return {
      filter: new filter(200, -1)
    }
  },
  methods: {
    ...vuex.mapActions(['filterTodo']),
  }
}
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
