import React from 'react';
import {Text, View,Button} from 'react-native';
import styles from './styles';

const SingleSession = ({singleSession}) => {
    const time = new Date(singleSession.startTime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
  return (
    <View>
      
      <Text>{singleSession.location}</Text>
      <Text>{singleSession.title}</Text>
      <Text>{time}</Text>
      <Text>{singleSession.description}</Text>
      <View>
          <Text>Presented By:</Text>
          {/* image here */}
          <Text>{singleSession.speaker.name}</Text>
      </View>


        {/* <Button title="Add to Faves" onPress={}/> */}
    </View>
  );
};

export default SingleSession;
