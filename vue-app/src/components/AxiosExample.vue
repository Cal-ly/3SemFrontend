<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header text-white bg-info">
          <h3>Kontroller Axios med din API</h3>
        </div>
        <div class="card-body">
          <button class="btn btn-primary mb-3" @click="fetchWeather">Hent Vejrudsigter</button>
          <table v-if="weatherData.length" class="table table-striped">
            <thead>
              <tr>
                <th>Dato</th>
                <th>Temperatur (°C)</th>
                <th>Temperatur (°F)</th>
                <th>Opsummering</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in weatherData" :key="index">
                <td>{{ item.date }}</td>
                <td>{{ item.temperatureC }}</td>
                <td>{{ item.temperatureF }}</td>
                <td>{{ item.summary }}</td>
              </tr>
            </tbody>
          </table>
          <p v-else>Ingen data hentet endnu.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "AxiosExample",
    data() {
      return {
        weatherData: [], // Her gemmes vejrdataen
      };
    },
    methods: {
      async fetchWeather() {
        try {
          const response = await axios.get(
            "https://3semapi-dadpgma4d7bqaecc.westeurope-01.azurewebsites.net/weatherforecast"
          );
          this.weatherData = response.data; // Gem vejrdata i weatherData-arrayet
        } catch (error) {
          console.error("Fejl ved hentning af vejrdata:", error);
          alert("Kunne ikke hente vejrdata. Tjek din internetforbindelse eller API'en.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Eventuelt ekstra styling her */
  </style>
  