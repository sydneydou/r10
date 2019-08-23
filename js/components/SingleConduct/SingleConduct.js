import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const SingleConduct = ({conduct}) => {
  return (
    <View>
      <View>
        <Text style={styles.conductTitle}>{conduct.title}</Text>
        <Text style={styles.conductDescription}>{conduct.description}</Text>
      </View>
    </View>
  );
};

export default SingleConduct;
