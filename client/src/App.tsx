import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

import AppRoutes from "./app-routes";

const apolloClientConfig = new ApolloClient({
  uri:"http://localhost:4000",
  cache: new InMemoryCache()
})

function App() {

  return (
    <ApolloProvider client={apolloClientConfig}>
      <AppRoutes />
    </ApolloProvider>

  )
}

export default App
