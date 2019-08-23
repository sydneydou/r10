import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Platform,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

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
      <View style={styles.faveButtonBlock}>
        <TouchableOpacity
          onPress={() => {
            !isFaved
              ? addNewFave(singleSession.id)
              : removeNewFave(singleSession.id);
          }}
          style={styles.faveButton}>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={styles.faveButton}>
            {!isFaved ? (
              <Text style={styles.faveButtonText}>Add to Faves</Text>
            ) : (
              <Text style={styles.faveButtonText}>Remove from Faves</Text>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(Session);
