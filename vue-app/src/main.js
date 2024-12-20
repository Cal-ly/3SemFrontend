import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);

// Define the baseURL as a global property
app.config.globalProperties.$baseURL = 'https://3semapi-dadpgma4d7bqaecc.westeurope-01.azurewebsites.net/';

app.mount('#app');
