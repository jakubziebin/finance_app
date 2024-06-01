<template>
  <div class="dashboard">
    <h1>Witaj, {{ username }}!</h1>
    <h2>Zarządzaj budżetem!</h2>
    <Income/>
    <Expense/>
    <br>
    <router-link to="/report">Zobacz Raport Finansowy</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Income from '../components/IncomeComponent.vue';
import Expense from '../components/ExpenseComponent.vue';

export default {
  components: {
    Income,
    Expense,
  },
  data() {
    return {
      username: localStorage.getItem('username') || ''
  };
  },
  computed: {
    ...mapState(['incomes', 'expenses'])
  },
  methods: {
    ...mapActions(['addIncome', 'addExpense'])
  },
};
</script>  

<style scoped>
.dashboard {
  text-align: center;
  margin-top: 50px;
}
.dashboard a {
  text-decoration: none;
  color: #1E90FF;
  font-weight: bold;
}
</style>
