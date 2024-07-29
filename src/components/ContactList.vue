<template>
  <div class="list-container">
    <h1>People List</h1>
    <div class="search-bar">
      <input v-model="searchTerm" placeholder="Search people" />
      <router-link to="/add-person" class="btn-add">Add Person</router-link>
    </div>
    <ol class="people-list">
      <li class="person-card" v-for="person in filteredPeople" :key="person.id">
        <router-link :to="{ name: 'PersonDetails', params: { id: person.id } }">
          <h2>{{ person.firstName }} {{ person.lastName }}</h2>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [],
      searchTerm: ''
    };
  },
  computed: {
    filteredPeople() {
      return this.people
        .filter(person =>
          `${person.firstName} ${person.lastName}`
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    }
  },
  created() {
    const storedPeople = JSON.parse(localStorage.getItem('people') || '[]');
    this.people = storedPeople;
  }
};
</script>

<style scoped>
.list-container {
  padding: 20px;
  text-align: center;
  background: #fff3e0;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-bar input {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.btn-add {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  text-decoration: none;
}

.btn-add:hover {
  background-color: #0056b3;
}

.people-list {
  list-style-type: decimal;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.person-card {
  background: #e1bee7;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
}

.person-card:hover {
  background-color: #d1c4e9;
  transform: scale(1.02);
}

.person-card h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #6a1b9a;
}
</style>
