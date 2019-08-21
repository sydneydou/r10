import React from 'react';
import {Text, View} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import SingleSession from '../../components/SingleSession';

const Schedule = ({allSessions}) => {
  const filteredSession = formatSessionData(allSessions);
  return <SingleSession sessions={filteredSession} />;
};

export default Schedule;
