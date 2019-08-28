import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import FavesContext from '../../context/FavesContext';
import styles from './styles';

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds, removeFaveSession}) => (
          <Query
            query={gql`
              {
                allSessions {
                  id
                  location
                  startTime
                  title
                  description
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
              if (loading)
                return <ActivityIndicator size="large" style={styles.loader} />;
              if (error) return <Text>Error :(</Text>;

              if (data)
                return (
                  <Schedule
                    removeFave={removeFaveSession}
                    faveIds={faveIds}
                    allSessions={data.allSessions}
                  />
                );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default ScheduleContainer;
