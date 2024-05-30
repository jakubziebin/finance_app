<template>
    <div class="budget-view">
      <h2>Bilans</h2>
      <p class="total-income">Wszystkie przychody: {{ totalIncome }} zł</p>
      <p class="total-expense">Wszystkie wydatki: {{ totalExpense }} zł</p>
      <p class="balance">Bilans: {{ balance }} zł</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BudgetView',
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
  
  <style scoped>
  .budget-view {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
  }
  .budget-view h2 {
    margin-bottom: 20px;
    color: #333;
  }
  .budget-view p {
    font-size: 18px;
    margin: 10px 0;
  }
  .total-income {
    color: #4caf50;
  }
  .total-expense {
    color: #f44336;
  }
  .balance {
    font-weight: bold;
    color: #000;
  }
  </style>