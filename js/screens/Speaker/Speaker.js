import React from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation, SafeAreaView} from 'react-navigation';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const Speaker = ({navigation, speaker}) => {
  let IconComponent = Ionicons;
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default withNavigation(Speaker);
