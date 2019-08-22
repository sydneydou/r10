import React from 'react';
import {Text, View, Modal, Button} from 'react-native';
import SpeakerComponent from '.././../components/SpeakerComponent';

const Speaker = ({addFave, removeFave}) => (
  <View>
    {/* <Button title='exit' onPress={}/> */}
    <SpeakerComponent addFave={addFave} removeFave={removeFave} />
  </View>
);

export default Speaker;
