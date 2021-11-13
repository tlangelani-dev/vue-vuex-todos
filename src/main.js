import { createApp } from 'vue'
import App from './App.vue'
import store from './store';

// App.cofing.productionTips = false;

createApp(App).use(store).mount('#app');
