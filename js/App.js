import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import client from './config/api';
import About from './screens/About';

import {ApolloProvider} from '@apollo/react-hooks';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <About />
        </SafeAreaView>
      </Fragment>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
