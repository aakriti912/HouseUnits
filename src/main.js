import { createApp, provide, h } from 'vue';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const client = new ApolloClient({
  uri: 'https://api-ap-south-1.graphcms.com/v2/cl122wpkg5t2u01za1rq7050d/master',
  cache: new InMemoryCache(),
});

createApp({
  setup() {
    provide(DefaultApolloClient, client);
  },
  render: () => h(App),
}).use(router).mount('#app');
