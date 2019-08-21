import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import ListSession from '../../components/ListSession';
import {withNavigation} from 'react-navigation';

const Schedule = ({allSessions, navigation}) => {
  const filteredSession = formatSessionData(allSessions);
  return <ListSession sessions={filteredSession} />;
};

export default Schedule;
