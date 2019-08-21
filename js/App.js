import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import client from './config/api';
import RootStackNavigator from './navigation/RootStackNavigator';
import {FavesProvider} from './context/FavesContext';
import {ApolloProvider} from '@apollo/react-hooks';

const App = () => {
  return (
    <FavesProvider>
      <ApolloProvider client={client}>
        <Fragment>
          <StatusBar barStyle="dark-content" />

          <RootStackNavigator />
        </Fragment>
      </ApolloProvider>
    </FavesProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
