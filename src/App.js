import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-boost'
import './App.css';
import DataFetch from './components/DataContainer/Data';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${
        process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
      }`
    }
  }
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <DataFetch />
    </ApolloProvider>
  );
}

export default App;
