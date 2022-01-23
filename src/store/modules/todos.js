import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    getTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(res.data);
        commit('setTodos', res.data);
    },
    async addTodo({ commit }, title) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });
        console.log(res.data);
        commit('newTodo', res.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        console.log(res.data);
        commit('setTodos', res.data);
    },
    async updateTodo({ commit }, updatedTodo) {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
        console.log(res.data);
        commit('updateTodo', res.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, t) => {
        let idx = state.todos.findIndex(todo => todo.id === t.id);
        if (idx !== -1) {
            state.todos.splice(idx, 1, t);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
