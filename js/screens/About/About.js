import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import styles from './styles';
import SingleConduct from '../../components/SingleConduct';
import PropTypes from 'prop-types';

const About = ({allConducts}) => {
  return (
    <ScrollView style={styles.aboutPage}>
      <View style={styles.aboutImageContainer}>
        <Image
          style={styles.aboutImage}
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>

      <View>
        <Text style={styles.aboutTitle}>Date & Venue</Text>
        <Text style={styles.text}>
          The R10 Conference will take place on Tuesday, June 27, 2020 in
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

About.propTypes = {
  allConducts: PropTypes.object.isRequired,
};

export default About;
