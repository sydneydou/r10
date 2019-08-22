import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import ListSession from '../../components/ListSession';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const Schedule = ({allSessions, navigation, addFave, removeFave}) => {
  const filteredSession = formatSessionData(allSessions);
  return (
    <View style={styles.title}>
      <ListSession
        sessions={filteredSession}
        removeFave={removeFave}
        addFave={addFave}
      />
    </View>
  );
};

export default Schedule;
