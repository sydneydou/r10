import React, {Component} from 'react';
import Session from './Session';
import FavesContext from '../../context/FavesContext';

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const session = navigation.getParam('item', {});

    return (
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
    );
  }
}

export default SessionContainer;
