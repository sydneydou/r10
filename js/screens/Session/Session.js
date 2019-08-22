import React from 'react';
import {Text, View, Button} from 'react-native';
import SingleSession from '../../components/SingleSession';
import styles from './styles';

const Session = ({singleSession, addFave, removeFave, faveIds}) => {
  return (
    <View style={styles.title}>
      <SingleSession
        singleSession={singleSession}
        addFave={addFave}
        removeFave={removeFave}
        faveIds={faveIds}
      />
    </View>
  );
};

export default Session;
