import React from 'react';
import {Text, View,Button,Image,TouchableHighlight} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const SingleSession = ({singleSession,navigation}) => {
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
          <TouchableHighlight
            onPress={() => navigation.push('Speaker', singleSession.speaker)}>
          <View> 
          <Image
          style={{width: 50, height: 50}}
          source={{uri: {imageurl}}}
        />
          <Text style={styles.sessionSpeakerName} >{singleSession.speaker.name}</Text>
      </View>
      </TouchableHighlight>


        {/* <Button title="Add to Faves" onPress={}/> */}
    </View>
  );
};

export default withNavigation(SingleSession);
