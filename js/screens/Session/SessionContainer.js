import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Session from './Session';
import FavesContext from '../../context/FavesContext';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const session = navigation.getParam('item', {});
    return (
      <View>
        <FavesContext.Consumer>
          {({faveIds, addFaveSession, removeFaveSession}) => (
            <Session
              singleSession={session}
              removeFave={removeFaveSession}
              addFave={addFaveSession}
              faveIds={faveIds}
              isFaved={faveIds.includes(session.id)}
            />
          )}
        </FavesContext.Consumer>
      </View>
    );
  }
}

export default SessionContainer;
