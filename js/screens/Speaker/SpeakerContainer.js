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

    const speaker = navigation.getParam({'name ': '', bio: ''});
    console.log(speaker);
    return (
      <FavesContext.Consumer>
        {context => (
          <View>
            <Speaker
              removeFave={context.removeFaveSession}
              addFave={context.addFaveSession}
            />
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SpeakerContainer;
