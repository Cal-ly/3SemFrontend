<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header text-white bg-primary">
          <h3>Velkommen til Vue.js med Bootstrap</h3>
        </div>
        <div class="card-body">
          <p class="card-text">
            Dette er en simpel Vue-komponent, der bruger Bootstrap til styling.
          </p>
          <button class="btn btn-success" @click="showAlert">Klik mig</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HelloWorld2",
    methods: {
      showAlert() {
        alert("Bootstrap er korrekt hentet!");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Eventuelt ekstra styling her */
  </style>
  