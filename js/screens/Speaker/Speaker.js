import React from 'react';
import {Text, View, Modal, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation, SafeAreaView} from 'react-navigation';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
const Speaker = ({navigation, speaker}) => {
  let IconComponent = Ionicons;
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Button title='exit' onPress={}/> */}
          <View style={styles.speakerBackground}>
            <TouchableOpacity>
              <IconComponent
                name="ios-close"
                size={50}
                style={styles.goBack}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            <Text style={styles.aboutSpeaker}>About the Speaker</Text>

            <View style={styles.speakerBox}>
              <Image
                style={styles.speakerImage}
                source={{uri: speaker.image}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withNavigation(Speaker);
