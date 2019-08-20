import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Faves from './Faves';

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
        <Faves />
      </View>
    );
  }
}

export default FavesContainer;
