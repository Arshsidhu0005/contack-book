<template>
  <div class="todo-list">
    <h1>{{ title }}</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'HelloWorld'
    }
  },
  data() {
    return {
      newTodo: '',
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push(this.newTodo.trim());
        this.newTodo = '';
        this.saveTodos();
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodos();
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
};
</script>

<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}
button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
