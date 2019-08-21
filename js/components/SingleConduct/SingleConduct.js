import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const SingleConduct = ({conduct}) => {
  return (
    <View>
      <View>
        <Text>{conduct.title}</Text>
        <Text>{conduct.description}</Text>
      </View>
    </View>
  );
};

export default SingleConduct;
