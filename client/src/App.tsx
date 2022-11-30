import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

import AppRoutes from "./app-routes";

function getURI(mode:string) {
  if(mode === "production")
      return import.meta.env.VITE_SERVER_URL;
  return "http://localhost:4000";

}

const apolloClientConfig = new ApolloClient({
  uri: getURI(import.meta.env.MODE),
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
