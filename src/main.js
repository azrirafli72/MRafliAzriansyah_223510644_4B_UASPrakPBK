import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import router from './router';

const app = createApp(App);
app.use(Quasar, { config: {} });
app.use(router);
app.mount('#app');
