import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import About from './About';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import styles from '../../components/ListSession/styles';

class AboutContainer extends React.Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              description
              title
            }
          }
        `}>
        {({loading, error, data}) => {
          if (loading)
            return <ActivityIndicator size="large" style={styles.loader} />;
          if (error) return <Text>Error :(</Text>;

          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
