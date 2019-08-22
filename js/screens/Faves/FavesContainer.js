import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Faves from './Faves';
import FavesContext from '../../context/FavesContext';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';

class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Faves',
  };

  render() {
    return (
      <View>
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
                console.log(
                  data.allSessions.filter(session =>
                    faveIds.includes(session.id),
                  ),
                );

                if (loading) return <Text>Loading...</Text>;
                if (error) return <Text>Error :(</Text>;

                if (data)
                  return (
                    <Faves
                      removeFave={removeFaveSession}
                      faveIds={faveIds}
                      allSessions={data.allSessions.filter(session =>
                        faveIds.includes(session.id),
                      )}
                    />
                  );
              }}
            </Query>
          )}
        </FavesContext.Consumer>
      </View>
    );
  }
}

export default FavesContainer;
