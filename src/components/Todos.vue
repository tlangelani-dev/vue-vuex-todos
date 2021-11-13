<template>
    <div id="todos">
        <h3>Todos</h3>
        <div class="legend">
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
            </span>
            <span>
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div class="wrapper">
            <div @dblclick="onDblClick(todo)" v-for='todo in getTodos' :key='todo.id' class="todo" :class="{'is-complete':todo.completed}">
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
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
        onDblClick(todo) {
            const updatedTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            };
            this.updateTodo(updatedTodo);
        }
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
    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #34495e;
    }
    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #65c6bb;
    }
    .is-complete {
        background: #34495e;
        color: white;
    }
</style>
