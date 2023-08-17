import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TheHeader from './components/layouts/TheHeader.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('the-header', TheHeader);
app.mount('#app');
