import { ApolloProvider } from '@apollo/client'

import Home from "./pages/Home/Home"

import apolloClient from './services/graphql/client'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
    <Home />
    </ApolloProvider>
  )
}

export default App