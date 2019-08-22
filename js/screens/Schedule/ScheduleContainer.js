import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import FavesContext from '../../context/FavesContext';

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
      <FavesContext.Consumer>
        {context => (
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
              if (loading) return <Text>Loading...</Text>;
              if (error) return <Text>Error :(</Text>;

              if (data)
                return (
                  <Schedule
                    removeFave={context.removeFaveSession}
                    addFave={context.addFaveSession}
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
