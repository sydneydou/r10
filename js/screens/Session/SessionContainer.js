import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Session from './Session';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Session />
      </View>
    );
  }
}

export default SessionContainer;
