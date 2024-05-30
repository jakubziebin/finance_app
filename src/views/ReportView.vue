<template>
  <div class="report-view">
    <h1>Raport Finansowy</h1>
    <div class="report-section">
      <h2>Przychody</h2>
      <ul>
        <li v-for="income in incomes" :key="income.id">{{ income.description }}: {{ income.amount }}</li>
      </ul>
    </div>
    <div class="report-section">
      <h2>Wydatki</h2>
      <ul>
        <li v-for="expense in expenses" :key="expense.id">{{ expense.description }}: {{ expense.amount }}</li>
      </ul>
    </div>
    <button @click="clearData">Wyczyść Wszystko</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ReportView',
  computed: {
    ...mapState(['incomes', 'expenses'])
  },
  methods: {
    ...mapActions(['clearAllData']),
    clearData() {
      if (confirm('Czy na pewno chcesz wyczyścić wszystkie dane?')) {
        this.clearAllData();
      }
    }
  }
};
</script>

<style scoped>
.report-view {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.report-section {
  margin-bottom: 20px;
}
.report-section h2 {
  border-bottom: 2px solid #1E90FF;
  padding-bottom: 10px;
  color: #1E90FF;
}
.report-section ul {
  list-style: none;
  padding: 0;
}
.report-section li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.report-section li:last-child {
  border-bottom: none;
}
button {
  padding: 10px 20px;
  background-color: #ff4c4c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}
button:hover {
  background-color: #ff1c1c;
}
</style>
