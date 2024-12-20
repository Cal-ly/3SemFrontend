<template>
  <div id="app">
    <ParticipantMaster />
  </div>
</template>

<script>
import ParticipantMaster from "./components/ParticipantMaster.vue";

export default {
  name: "App",
  components: {
    ParticipantMaster,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
