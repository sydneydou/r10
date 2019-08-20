import React from 'react';
import {ScrollView, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import SingleConduct from '../../components/SingleConduct';

const About = ({allConducts}) => {
  console.log(allConducts);
  //const conduct = allConducts.map(conduct => conduct);
  return (
    <ScrollView>
      {/* //dont use flatlist
    //map over allConducts and pass into component that displays them on screen
    // <FlatList */}
      {/* //   data={allConducts}
    //   keyExtractor={item => item.id + ''}
    //   renderItem={({item}) => (
    //     <Text>
    //       {item.title}
    //       {item.description}
    //     </Text>
    //   )}
    // /> */}
      {allConducts.map(conduct => (
        <SingleConduct key={conduct.id} conduct={conduct} />
      ))}
    </ScrollView>
  );
};

export default About;
