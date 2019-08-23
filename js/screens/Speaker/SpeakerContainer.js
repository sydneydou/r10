import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Speaker from './Speaker';
import FavesContext from '../../context/FavesContext';

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    const speaker = navigation.getParam('speaker', {});
    return (
      <View>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

export default SpeakerContainer;
