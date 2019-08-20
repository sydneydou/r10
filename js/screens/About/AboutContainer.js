import React from 'react';
import {Text} from 'react-native';
import About from './About';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
