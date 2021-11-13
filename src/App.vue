<template>
    <div id="app">
        <div class="container">
            <Todos />
        </div>
    </div>
</template>

<script>
import Todos from './components/Todos.vue';

export default {
    name: 'App',
    components: {
        Todos
    }
}
</script>

<style>
body {
    line-height: 1.6;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.container {
    max-width: 1280px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
}
</style>
