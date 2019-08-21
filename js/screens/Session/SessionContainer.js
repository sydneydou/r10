import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Session from './Session';

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
    const session = navigation.getParam('session', {});
    console.log(session);
    return (
      <View>
        <Session singleSession={session} />
      </View>
    );
  }
}

export default SessionContainer;
