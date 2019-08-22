import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import ListSession from '../../components/ListSession';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const Schedule = ({allSessions, removeFave, faveIds}) => {
  const filteredSession = formatSessionData(allSessions);
  return (
    <View style={styles.title}>
      <ListSession
        sessions={filteredSession}
        removeFave={removeFave}
        faveIds={faveIds}
      />
    </View>
  );
};

export default Schedule;
