import React from 'react';
import {Text, View} from 'react-native';
import ListSession from '../../components/ListSession';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';
import CustomText from '../../components/CustomText';

const Faves = ({allSessions, removeFave, faveIds}) => {
  const filteredSession = formatSessionData(allSessions);

  return (
    <View>
      {filteredSession.length > 0 ? (
        <ListSession
          sessions={filteredSession}
          removeFave={removeFave}
          faveIds={faveIds}
        />
      ) : (
        <View style={styles.noFaveTextContainer}>
          <CustomText style={styles.noFaveText}>
            You have no faves yet!
          </CustomText>
        </View>
      )}
    </View>
  );
};

export default Faves;
