import React from 'react';
import {Text, ScrollView, SectionList, Fragment} from 'react-native';
import styles from './styles';

getTime = item => {
  const time = new Date(item.title);
  return time.toLocaleTimeString('en-US');
};

const SingleSession = ({sessions}) => {
  console.log(sessions);
  return (
    sessions && (
      <SectionList
        renderItem={({item}) => <Text>{item.title}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>
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

export default SingleSession;
