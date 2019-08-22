import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import ListSession from '../../components/ListSession';
import {withNavigation} from 'react-navigation';

const Schedule = ({allSessions, navigation, addFave, removeFave}) => {
  const filteredSession = formatSessionData(allSessions);
  return (
    <ListSession
      sessions={filteredSession}
      removeFave={removeFave}
      addFave={addFave}
    />
  );
};

export default Schedule;
