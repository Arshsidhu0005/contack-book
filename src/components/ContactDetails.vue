<template>
  <div v-if="person" class="details-card">
    <router-link to="/contacts" class="btn-back">Back</router-link>
    <h2>{{ person.firstName }} {{ person.lastName }}</h2>
    <p>Email: {{ person.email }}</p>
    <p>Phone: {{ person.phone }}</p>
    <div class="actions">
      <router-link :to="{ name: 'EditPerson', params: { id: person.id } }">
        <button class="btn-edit">Edit</button>
      </router-link>
      <button @click="deletePerson" class="btn-delete">Delete</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const person = ref(null);

    const loadPerson = () => {
      const people = JSON.parse(localStorage.getItem('people') || '[]');
      person.value = people.find(p => p.id === route.params.id);
    };

    const deletePerson = () => {
      let people = JSON.parse(localStorage.getItem('people') || '[]');
      people = people.filter(p => p.id !== person.value.id);
      localStorage.setItem('people', JSON.stringify(people));
      router.push('/contacts');
    };

    onMounted(loadPerson);

    return { person, deletePerson };
  }
};
</script>

<style scoped>
.details-card {
  background: #fff3e0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.details-card h2 {
  margin-bottom: 10px;
  color: #ff9800;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-back {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  margin-bottom: 20px;
}

.btn-back:hover {
  background-color: #fb8c00;
}

.btn-edit {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #43a047;
}

.btn-delete {
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-delete:hover {
  background-color: #e53935;
}
</style>
