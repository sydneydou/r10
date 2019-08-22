import React from 'react';
import {Text, View,Button,Image} from 'react-native';
import styles from './styles';

const SingleSession = ({singleSession}) => {
    const time = new Date(singleSession.startTime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })

      const imageurl = singleSession.speaker.url
  return (
    <View style={styles.sessionPage}>
      
      <Text style={styles.sessionLocation}>{singleSession.location}</Text>
      <Text style={styles.sessionTitle}>{singleSession.title}</Text>
      <Text style={styles.sessionTime}>{time}</Text>
      <Text style={styles.sessionDescription}>{singleSession.description}</Text>
      
          <Text style={styles.sessionLocation}>Presented By:</Text>
          <View> 
          <Image
          style={{width: 50, height: 50}}
          source={{uri: {imageurl}}}
        />
          <Text style={styles.sessionSpeakerName} >{singleSession.speaker.name}</Text>
      </View>


        {/* <Button title="Add to Faves" onPress={}/> */}
    </View>
  );
};

export default SingleSession;
