import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              location
              startTime
              title
              speaker {
                id
                bio
                image
                name
                url
              }
            }
          }
        `}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          if (data) return <Schedule allSessions={data.allSessions} />;
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
