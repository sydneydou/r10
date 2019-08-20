import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Map from './Map';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <View>
        <Map />
      </View>
    );
  }
}

export default MapContainer;
