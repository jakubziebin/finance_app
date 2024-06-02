<template>
    <div class="budget-limit">
      <h2>Limit wydatków</h2>
      <div class="input-container">
        <input v-model="limit" type="number" placeholder="Wprowadź limit" />
        <button @click="setLimit">Ustaw limit</button>
      </div>
      <div class="info-container">
        <p v-if="limitExceeded" class="exceeded">Limit wydatków został przekroczony!</p>
        <p v-else-if="limitReached" class="reached">Osiągnięto limit wydatków!</p>
        <h3>Brakuje do limitu:</h3>
        <p>{{ missingToLimit }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        limit: 0
      };
    },
    computed: {
      limitExceeded() {
        return this.totalExpense >= this.limit && this.limit > 0;
      },
      limitReached() {
        return this.totalExpense === this.limit && this.limit > 0;
      },
      totalExpense() {
        return this.$store.state.expenses.reduce((total, expense) => total + (expense?.amount || 0), 0);
      },
      missingToLimit() {
        if (this.limit > 0) {
          let missing = this.limit - this.totalExpense;
          return missing > 0 ? missing : 0;
        } else {
          return 'Brak limitu';
        }
      }
    },
    methods: {
      setLimit() {
        this.$store.commit('setBudgetLimit', this.limit);
      }
    }
  };
  </script>
  
<style scoped>
.budget-limit {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 10px rgba(194, 190, 190, 0.1);
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
}

.input-container input {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.input-container button {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
}

.info-container {
  margin-top: 10px;
}

.exceeded {
  color: red;
  font-weight: bold;
}

.reached {
  color: green;
  font-weight: bold;
}

.info-container h3 {
  margin-bottom: 5px;
}

.info-container p {
  margin: 0;
  font-size: 18px;
}
</style>