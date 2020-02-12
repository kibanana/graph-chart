import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import './App.css';
import { Education } from './Education';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ApolloHooksProvider client={apolloClient}>
        <Router>
          <React.Fragment>
            <Route exact={true} path={'/'} component={Education} />
          </React.Fragment>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
