import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import About from '../views/About.vue';
const routes = [
    { path: '/', name: 'EventListPage', component: EventList },
    { path: '/about', name: 'About', component: About },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map