import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'Title 1'
        },
        {
            id: 2,
            title: 'Title 2'
        },
        {
            id: 3,
            title: 'Title 3'
        }
    ]
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
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
};
