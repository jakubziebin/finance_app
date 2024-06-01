<template>
  <div class="income-form">
    <h2>Dodaj przychód</h2>
    <form @submit.prevent="submit">
      <input v-model="amount" type="number" placeholder="Wartość" required />
      <input v-model="description" type="text" placeholder="Opis przychodu" required />
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
      this.$store.dispatch('addIncome', {
        amount: this.amount,
        description: this.description
      });
      this.amount = 0;
      this.description = '';
      this.$store.dispatch('loadState');
    }
  }
};
</script>

<style scoped>
.income-form {
  background: #e8f5e9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}
.income-form h2 {
  margin-bottom: 20px;
  color: #388e3c;
}
.income-form form {
  display: flex;
  flex-direction: column;
}
.income-form input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.income-form button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
.income-form button:hover {
  background-color: #45a049;
}
</style>