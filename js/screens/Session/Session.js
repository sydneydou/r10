import React from 'react';
import {Text, View, Button} from 'react-native';
import SingleSession from '../../components/SingleSession'

const Session = ({singleSession}) => {
  console.log(singleSession);
  return (
    <View>
      
      <SingleSession singleSession={singleSession} />
    </View>
  );
};

export default Session;
