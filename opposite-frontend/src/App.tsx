import * as React from 'react';
import { BrowserRouter, Switch, HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';
import './App.css';
import { Education } from './Education';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Education}/>
              <Route path = "/:year" component = {Education} />
            </Switch>
          </BrowserRouter>
        </ApolloHooksProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
