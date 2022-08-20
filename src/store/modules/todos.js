import axios from "axios";

const state = {
    todos: []
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos(state) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        state.commit('setTodos', response.data);
    },
    async addTodo(state, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        state.commit('newTodo', response.data);
    },
    async deleteTodo(state, id) {
        await axios.delete('https://jsonplaceholder.typicode.com/todos/${id');

        state.commit('removeTodo', id);
    },

    async filterTodo(state, filter) {
        let limit = filter.numberOfItems;
        let status = filter.itemStatus;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        let todoList = [];
        if(status != -1)
        {
            for(let i=0;i<response.data.length;i++)
            {
                if(response.data[i].completed == status) todoList.push(response.data[i]);
            }
        }else
            todoList = response.data;
        state.commit('setTodos', todoList);

    },
    async updateTodo(state, updTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
        console.log(response.data);
        state.commit('updateTodo', response.data);
    }

};
const mutations = {
    setTodos(state, todos) {
        state.todos = todos;
    },
    newTodo(state, todo) {
        state.todos.unshift(todo);
    },
    removeTodo(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id);
    },
    updateTodo(state, updTodo) {
        const index = state.todos.findIndex(todo => todo.id == updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
