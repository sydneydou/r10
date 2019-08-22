import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Platform,
} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Session = ({
  singleSession,
  addFave,
  removeFave,
  faveIds,
  isFaved,
  navigation,
}) => {
  addNewFave = sessionId => {
    addFave(sessionId);
  };
  removeNewFave = sessionId => {
    removeFave(sessionId);
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
      <View style={styles.faveBlock}>
        <Text style={styles.sessionLocation}>{singleSession.location}</Text>
        {isFaved ? (
          <IconComponent
            size={25}
            color={'red'}
            name={Platform.Os === 'ios' ? 'ios-heart' : 'md-heart'}
          />
        ) : null}
      </View>
      <Text style={styles.sessionTitle}>{singleSession.title}</Text>
      <Text style={styles.sessionTime}>{time}</Text>
      <Text style={styles.sessionDescription}>{singleSession.description}</Text>
      <Text style={styles.sessionLocation}>Presented By:</Text>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate('Speaker', {speaker: singleSession.speaker})
        }>
        <View style={styles.speakerBlock}>
          <Image
            style={styles.speakerImage}
            source={{uri: singleSession.speaker.image}}
          />
          <Text style={styles.sessionSpeakerName}>
            {singleSession.speaker.name}
          </Text>
        </View>
      </TouchableHighlight>
      {!isFaved ? (
        <TouchableOpacity
          onPress={() => addNewFave(singleSession.id)}
          style={styles.faveButton}>
          <Text style={styles.faveButtonText}>Add to Faves</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => removeNewFave(singleSession.id)}
          style={styles.faveButton}>
          <Text style={styles.faveButtonText}>Remove to Faves</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default withNavigation(Session);
