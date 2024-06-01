<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Witaj!</h2>
        <p>Wprowadź swoje imię, aby rozpocząć</p>
        <form @submit.prevent="submit">
          <input v-model="username" type="text" placeholder="Imię" required />
          <button type="submit">Wejdź</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: ''
      };
    },
    methods: {
      submit() {
        localStorage.setItem('username', this.username);
        this.$router.push('/dashboard');
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    width: 300px;
    padding: 20px;
    border-radius: 8px;
    background-color: #f0f0f0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .login-form h2 {
    margin-bottom: 10px;
  }
  
  .login-form p {
    margin-bottom: 20px;
  }
  
  .login-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .login-form button {
    width: 100%;
    padding: 10px;
    background-color: #1E90FF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .login-form button:hover {
    background-color: #007BFF;
  }
  </style>