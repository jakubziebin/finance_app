<template>
    <div>
      <h2>Bilans</h2>
      <p>Wszystkie przychody: {{ totalIncome }}</p>
      <p>Wszystkie wydatki: {{ totalExpense }}</p>
      <p>Bilans: {{ balance }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['incomes', 'expenses'],
    computed: {
      totalIncome() {
        return this.incomes.reduce((sum, income) => sum + income.amount, 0);
      },
      totalExpense() {
        return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
      },
      balance() {
        return this.totalIncome - this.totalExpense;
      }
    }
  };
  </script>  