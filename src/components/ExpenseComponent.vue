<template>
  <div class="expense-form">
    <h2>Dodaj wydatek</h2>
    <form @submit.prevent="submit">
      <input v-model="amount" type="number" placeholder="Wartość" required />
      <input v-model="description" type="text" placeholder="Opis wydatku" required />
      <button type="submit">Dodaj</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      description: ''
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('addExpense', {
        amount: this.amount,
        description: this.description
      });
      this.amount = 0;
      this.description = '';
    }
  }
};
</script>

<style scoped>
.expense-form {
  background: #ffebee;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}
.expense-form h2 {
  margin-bottom: 20px;
  color: #d32f2f;
}
.expense-form form {
  display: flex;
  flex-direction: column;
}
.expense-form input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.expense-form button {
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
.expense-form button:hover {
  background-color: #e53935;
}
</style>