<template>
    <div id="todos">
        <h3>Todos</h3>
        <div class="wrapper">
            <div v-for='todo in getTodos' :key='todo.id' class="todo">
                {{ todo.title }}
                <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Todos',
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo'])
    },
    computed: mapGetters(['getTodos']),
    created() {
        this.fetchTodos();
    }
}
</script>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .todo {
        border: none;
        padding: 1rem;
        background: #65c6bb;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    i {
        position: absolute;
        top: 10px;
        right: 10px;
        color: white;
        cursor: pointer;
    }
</style>
