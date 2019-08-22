import React from 'react';
import {Text, View, Button} from 'react-native';
import SingleSession from '../../components/SingleSession';

const Session = ({singleSession, addFave, removeFave, getFaved}) => {
  console.log(singleSession);
  return (
    <View>
      <SingleSession
        singleSession={singleSession}
        addFave={addFave}
        removeFave={removeFave}
        getFaved={getFaved}
      />
    </View>
  );
};

export default Session;
