import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
  Platform,
} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Session = ({singleSession, addFave, removeFave, faveIds, isFaved}) => {
  addNewFave = sessionId => {
    addFave(sessionId);
    console.log(isFaved);
    //need prop to change to rerender
  };
  removeNewFave = sessionId => {
    removeFave(sessionId);
    console.log(isFaved);
    //need prop to change to rerender
  };

  const time = new Date(singleSession.startTime).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const currentSpeaker = singleSession.speaker;
  const imageurl = singleSession.speaker.url;
  let IconComponent = Ionicons;

  return (
    <View style={styles.sessionPage}>
      <Text style={styles.sessionLocation}>{singleSession.location}</Text>
      {isFaved ? (
        <IconComponent
          size={25}
          color={'red'}
          name={Platform.Os === 'ios' ? 'ios-heart' : 'md-heart'}
        />
      ) : null}
      <Text style={styles.sessionTitle}>{singleSession.title}</Text>
      <Text style={styles.sessionTime}>{time}</Text>
      <Text style={styles.sessionDescription}>{singleSession.description}</Text>
      <Text style={styles.sessionLocation}>Presented By:</Text>
      <TouchableHighlight
        onPress={() =>
          navigation.push('Speaker', {
            name: singleSession.name,
            bio: singleSession.bio,
          })
        }>
        <View>
          <Image style={{width: 50, height: 50}} source={{uri: {imageurl}}} />
          <Text style={styles.sessionSpeakerName}>
            {singleSession.speaker.name}
          </Text>
        </View>
      </TouchableHighlight>
      {!isFaved ? (
        <Button
          title="Add to Faves"
          onPress={() => addNewFave(singleSession.id)}
        />
      ) : (
        <Button
          title="Remove to Faves"
          onPress={() => removeNewFave(singleSession.id)}
        />
      )}
    </View>
  );
};

export default withNavigation(Session);
