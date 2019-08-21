import React from 'react';
import {ScrollView, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import SingleConduct from '../../components/SingleConduct';

const About = ({allConducts}) => {
  return (
    <ScrollView>
      {allConducts.map(conduct => (
        <SingleConduct key={conduct.id} conduct={conduct} />
      ))}
    </ScrollView>
  );
};

export default About;
