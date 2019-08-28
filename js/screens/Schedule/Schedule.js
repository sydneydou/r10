import React from 'react';
import {View} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import ListSession from '../../components/ListSession';
import styles from './styles';
import PropTypes from 'prop-types';

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

Schedule.propTypes = {
  allSessions: PropTypes.array.isRequired,
  removeFave: PropTypes.func.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default Schedule;
