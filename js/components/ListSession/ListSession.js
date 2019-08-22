import React from 'react';
import {
  Text,
  ScrollView,
  SectionList,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ListSession = ({sessions, navigation, removeFave, isFaved, faveIds}) => {
  let IconComponent = Ionicons;

  removeNewFave = sessionId => {
    removeFave(sessionId);
  };
  return (
    sessions && (
      <SectionList
        renderItem={({item}) => (
          <TouchableHighlight
            onPress={() => navigation.navigate('Session', {item})}>
            <View style={styles.sessionContainer}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionLocation}>{item.location}</Text>
              {faveIds.includes(item.id) ? (
                <IconComponent
                  size={25}
                  color={'red'}
                  name={Platform.Os === 'ios' ? 'ios-heart' : 'md-heart'}
                  onPress={() => removeNewFave(item.id)}
                />
              ) : null}
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sessionTime}>
            {new Date(title).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        )}
        sections={sessions}
      />
    )
  );
};

export default withNavigation(ListSession);
