import React from 'react';
import {
  Text,
  ScrollView,
  SectionList,
  View,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const ListSession = ({sessions, navigation, addFave, removeFave}) => {
  console.log(sessions);
  return (
    sessions && (
      <SectionList
        renderItem={({item}) => (
          <TouchableHighlight
            onPress={() => navigation.navigate('Session', {item})}>
            <View style={styles.sessionContainer}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionLocation}>{item.location}</Text>
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
        // keyExtractor={(item, index) => item + index}
      />
    )
  );
};

export default withNavigation(ListSession);
