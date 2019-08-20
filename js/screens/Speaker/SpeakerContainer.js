import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Speaker from './Speaker';

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Speaker />
      </View>
    );
  }
}

export default SpeakerContainer;
