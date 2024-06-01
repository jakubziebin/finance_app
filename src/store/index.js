import { createStore } from 'vuex';
import axios from 'axios';

const backendURL = 'http://localhost:5000';

export default createStore({
  state: {
    incomes: [],
    expenses: []
  },
  mutations: {
    setIncomes(state, incomes) {
      state.incomes = incomes;
    },
    setExpenses(state, expenses) {
      state.expenses = expenses;
    },
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
        const response = axios.post(`${backendURL}/api/expenses`, { expense });
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
    clearIncomes(state) {
      state.incomes = [];
    },
    clearExpenses(state) {
      state.expenses = [];
    }
  },
  
  modules: {}
});