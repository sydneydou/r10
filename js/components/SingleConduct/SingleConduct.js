import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const SingleConduct = ({conduct}) => {
  return (
    <View>
      <View>
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>

      <View>
        <Text style={styles.aboutTitle}>Date & Venue</Text>
        <Text>
          The R10 Conferencewill take place on Tuesday, June 27, 2020 in
          Vancouver,BC.
        </Text>
      </View>

      <View>
        <Text style={styles.aboutTitle}>Code of Conduct</Text>
      </View>
      <View>
        <Text>{conduct.title}</Text>
        <Text>{conduct.description}</Text>
      </View>
    </View>
  );
};

export default SingleConduct;
