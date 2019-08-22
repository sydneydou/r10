import React from 'react';
import {Text, View} from 'react-native';
import ListSession from '../../components/ListSession';
import {formatSessionData} from '../../lib/helper';

const Faves = ({allSessions, removeFave, faveIds}) => {
  const filteredSession = formatSessionData(allSessions);

  return (
    <View>
      <ListSession
        sessions={filteredSession}
        removeFave={removeFave}
        faveIds={faveIds}
      />
    </View>
  );
};

export default Faves;
