import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HelloWorld.vue';
import AboutUs from './components/AboutUs.vue';
import ContactUs from './components/ContactUs.vue';
import ContactList from './components/ContactList.vue';
import ContactDetails from './components/ContactDetails.vue';
import ContactForm from './components/ContactForm.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: ContactUs },
  { path: '/contacts', component: ContactList },
  { path: '/contact/:id', component: ContactDetails, name: 'PersonDetails' },
  { path: '/add-person', component: ContactForm, name: 'AddPerson' },
  { path: '/edit-person/:id', component: ContactForm, name: 'EditPerson' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
