import { createRouter, createWebHistory } from 'vue-router'; 
import Dashboard from '../views/DashboardView.vue';
import ReportView from '../views/ReportView.vue'
import BudgetView from '../views/BudgetView.vue'

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
  },
  {
    path: '/budget',
    name: 'budget',
    component: BudgetView,
    props: route => ({ incomes: route.query.incomes ? JSON.parse(route.query.incomes) : [], expenses: route.query.expenses ? JSON.parse(route.query.expenses) : [] })
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;