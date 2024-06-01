import { createRouter, createWebHistory } from 'vue-router'; 
import Dashboard from '../views/DashboardView.vue';
import ReportView from '../views/ReportView.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/report',
    name: 'Report',
    component: ReportView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;