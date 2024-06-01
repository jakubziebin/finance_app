<template>
  <div class="dashboard-container">
    <h1>Witaj, {{ username }}!</h1>
    <div class="budget">
      <div class="budget-item">
        <h2>Przychody</h2>
        <p>{{ totalIncome }}</p>
      </div>
      <div class="budget-item">
        <h2>Wydatki</h2>
        <p>{{ totalExpense }}</p>
      </div>
      <div class="budget-item">
        <h2>Saldo</h2>
        <p>{{ balance }}</p>
      </div>
    </div>
    <h2>Zarządzaj budżetem</h2>
    <div class="add-money">
      <Income/>
      <BudgetLimit/>
      <Expense/>
    </div>
    <br>
    <router-link to="/report">Zobacz Raport Finansowy</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Income from '../components/IncomeComponent.vue';
import Expense from '../components/ExpenseComponent.vue';
import BudgetLimit from '../components/BudgetLimit.vue';

export default {
  components: {
    Income,
    Expense,
    BudgetLimit
  },
  data() {
    return {
      username: localStorage.getItem('username') || ''
    };
  },
  methods: {
    ...mapActions(["loadState"]),

  },
  computed: {
    ...mapState(['incomes', 'expenses']),
    totalIncome() {
      return this.incomes.reduce((total, income) => total + (income?.amount || 0), 0);
    },
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + (expense?.amount || 0), 0);
    },
    balance() {
      return this.totalIncome - this.totalExpense;
    }
  },
  mounted() {
    this.loadState();
  }
};
</script>

<style scoped>
.dashboard-container {
  text-align: center;
  margin-top: 50px;
}

.budget {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.budget-item {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 10px rgba(194, 190, 190, 0.1);
}

.add-money {
  display: flex;
  justify-content: space-around;
}
</style>
