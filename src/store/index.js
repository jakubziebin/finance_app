import { createStore } from 'vuex';
import axios from 'axios';

const backendURL = 'http://localhost:5000';

export default createStore({
  state: {
    incomes: [],
    expenses: [],
    budgetLimit: 0
  },
  mutations: {
    setIncomes(state, incomes) {
      state.incomes = incomes;
    },

    setExpenses(state, expenses) {
      state.expenses = expenses;
    },

    addIncome(state, income) {
      state.incomes.push(income);
    },

    addExpense(state, expense) {
      state.expenses.push(expense);
    },

    setBudgetLimit(state, limit) {
      state.budgetLimit = limit;
    },

    clearAllData(state) {
      state.incomes = [];
      state.expenses = [];
    }
  },
  actions: {
    async addIncome({ commit }, income) {
      try {
        const response = await axios.post(`${backendURL}/api/incomes`, { income });
        commit('addIncome', response.data);
      } catch (error) {
        console.error('Error during addig income:', error);
      }
    },

    async addExpense({ commit }, expense) {
      try {
        const response = await axios.post(`${backendURL}/api/expenses`, { expense });
        commit('addExpense', response.data);
      } catch (error) {
        console.error('Error during addig expense:', error);
      }
    },

    async loadState({ commit }) {
      try {
        const response = await axios.get(`${backendURL}/api/data`);
        const { incomes, expenses } = response.data;
        commit('setIncomes', incomes);
        commit('setExpenses', expenses);
      } catch (error) {
        console.error('Error during setting data:', error);
      }
    },

    async setBudgetLimit({ commit }, limit) {
      commit('setBudgetLimit', limit);
    },

    async clearAllData({ commit }) {
      try {
        await axios.delete(`${backendURL}/api/clear`);
        commit('clearAllData');
      } catch (error) {
        console.error('Error during clearing data:', error);
      }
    }    
  }
});