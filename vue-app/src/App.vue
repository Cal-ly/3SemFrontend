<template>
  <div id="app">
    <HelloWorld2 />
    <AxiosExample />
  </div>
</template>

<script>
import HelloWorld2 from "./components/HelloWorld2.vue";
import AxiosExample from "./components/AxiosExample.vue";

export default {
  name: "App",
  components: {
    HelloWorld2,
    AxiosExample,
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
