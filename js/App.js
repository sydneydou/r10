import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';

import {ApolloProvider} from '@apollo/react-hooks';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <StatusBar barStyle="dark-content" />

        <RootStackNavigator />
      </Fragment>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
