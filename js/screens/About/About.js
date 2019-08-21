import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import styles from './styles';
import SingleConduct from '../../components/SingleConduct';

const About = ({allConducts}) => {
  return (
    <ScrollView>
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
      {allConducts.map(conduct => (
        <SingleConduct key={conduct.id} conduct={conduct} />
      ))}
    </ScrollView>
  );
};

export default About;
