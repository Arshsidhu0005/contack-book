<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <div class="form-field">
      <label for="firstName">First Name:</label>
      <input type="text" v-model="person.firstName" required />
    </div>
    <div class="form-field">
      <label for="lastName">Last Name:</label>
      <input type="text" v-model="person.lastName" required />
    </div>
    <div class="form-field">
      <label for="email">Email:</label>
      <input type="email" v-model="person.email" required />
    </div>
    <div class="form-field">
      <label for="phone">Phone Number:</label>
      <input type="tel" v-model="person.phone" required />
    </div>
    <button type="submit" class="btn-save">Save</button>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const person = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });

    const loadPerson = () => {
      if (route.params.id) {
        const people = JSON.parse(localStorage.getItem('people') || '[]');
        person.value = people.find(p => p.id === route.params.id);
      }
    };

    const handleSubmit = () => {
      let people = JSON.parse(localStorage.getItem('people') || '[]');

      if (person.value.id) {
        const index = people.findIndex(p => p.id === person.value.id);
        people[index] = person.value;
      } else {
        person.value.id = Date.now().toString();
        people.push(person.value);
      }

      localStorage.setItem('people', JSON.stringify(people));
      router.push('/contacts');
    };

    onMounted(loadPerson);

    return { person, handleSubmit };
  }
};
</script>

<style scoped>
.form-container {
  background: #e0f7fa;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #00796b;
}

.form-field input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.btn-save {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  align-self: center;
}

.btn-save:hover {
  background-color: #43a047;
}
</style>
