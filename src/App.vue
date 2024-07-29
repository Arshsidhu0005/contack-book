<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/contact">Contact Us</router-link>
    <router-link to="/contacts">People List</router-link>
  </nav>
  <router-view class="main-content"></router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  padding: 15px;
  background-color: #2c3e50; /* Darker blue-gray */
  text-align: center;
  border-bottom: 4px solid #1a242f; /* Darker border */
}

nav a {
  margin: 0 20px;
  color: #ecf0f1; /* Light text color */
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
  color: #bdc3c7; /* Softer hover color */
}

.main-content {
  padding: 20px;
}
</style>
