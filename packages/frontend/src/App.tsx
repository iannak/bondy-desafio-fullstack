

import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3000/local/desafio' }),
  cache: new InMemoryCache(),
});


function App() {
  const [user, setUser] = useState<any>(null);

  return (
    <ApolloProvider client={client}>
      {user ? (
        <WelcomePage user={user} />
      ) : (
        <LoginPage onSuccess={setUser} />
      )}
    </ApolloProvider>
  );
}

export default App;
