<template>
  <div class="dashboard">
    <h1>Zarządzaj budżetem!</h1>
    <Income @add-income="addIncome" />
    <Expense @add-expense="addExpense" />
    <Budget :incomes="incomes" :expenses="expenses" />
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
