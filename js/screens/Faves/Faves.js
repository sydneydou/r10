import React from 'react';
import {Text, View} from 'react-native';
import ListSession from '../../components/ListSession';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';
import PropTypes from 'prop-types';

const Faves = ({allSessions, removeFave, faveIds}) => {
  const filteredSession = formatSessionData(allSessions);

  return filteredSession.length > 0 ? (
    <ListSession
      sessions={filteredSession}
      removeFave={removeFave}
      faveIds={faveIds}
    />
  ) : (
    <View style={styles.noFaveTextContainer}>
      <Text style={styles.noFaveText}>You have no faves yet!</Text>
    </View>
  );
};

Faves.propTypes = {
  allSessions: PropTypes.array.isRequired,
  removeFave: PropTypes.func.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default Faves;
