import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-ap-south-1.graphcms.com/v2/cl122wpkg5t2u01za1rq7050d/master',
  cache: new InMemoryCache(),
});

export default client;
