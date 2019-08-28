import React from 'react';
import {
  Text,
  SectionList,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

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
            onPress={() => navigation.navigate('Session', {item})}
            underlayColor="rgba(0, 0, 0, 0.3);">
            <View style={styles.sessionContainer}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <View style={styles.sessionList}>
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
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.sessionTimeBlock}>
            <Text style={styles.sessionTime}>
              {moment(title)
                .format('hh:mm a')
                .toUpperCase()}
            </Text>
          </View>
        )}
        sections={sessions}
      />
    )
  );
};

export default withNavigation(ListSession);
