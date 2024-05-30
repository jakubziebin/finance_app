import { createStore } from 'vuex';

export default createStore({
  state: {
    incomes: [],
    expenses: []
  },
  mutations: {
    addIncome(state, income) {
      state.incomes.push(income);
      localStorage.setItem('incomes', JSON.stringify(state.incomes));
    },
    addExpense(state, expense) {
      state.expenses.push(expense);
      localStorage.setItem('expenses', JSON.stringify(state.expenses));
    },
    loadState(state) {
      const incomes = localStorage.getItem('incomes');
      const expenses = localStorage.getItem('expenses');
      if (incomes) {
        state.incomes = JSON.parse(incomes);
      }
      if (expenses) {
        state.expenses = JSON.parse(expenses);
      }
    },
    clearIncomes(state) {
      state.incomes = [];
    },
    clearExpenses(state) {
      state.expenses = [];
    }
  },
  actions: {
    addIncome({ commit }, income) {
      commit('addIncome', income);
    },
    addExpense({ commit }, expense) {
      commit('addExpense', expense);
    },
    loadState({ commit }) {
      commit('loadState');
    },
    clearAllData({ commit }) {
      commit('clearIncomes');
      commit('clearExpenses');
      localStorage.removeItem('incomes');
      localStorage.removeItem('expenses');
    }
  },
  modules: {}
});