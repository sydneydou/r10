import React from 'react';
import {Text, View, TouchableOpacity, Image, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const Speaker = ({navigation, speaker}) => {
  let IconComponent = Ionicons;
  return (
    <View style={styles.speakerBackground}>
      <View style={styles.speakerTop}>
        <TouchableOpacity>
          <IconComponent
            name="ios-close"
            size={50}
            style={styles.goBack}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View style={styles.aboutSpeakerContainer}>
          <Text style={styles.aboutSpeaker}>About the Speaker</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.speakerBox}>
          <Image style={styles.speakerImage} source={{uri: speaker.image}} />
          <Text style={styles.speakerName}>{speaker.name}</Text>
          <Text style={styles.speakerBio}>{speaker.bio}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(speaker.url)}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={styles.readMoreButton}>
              <Text style={styles.readMoreText}>Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
};

export default withNavigation(Speaker);
