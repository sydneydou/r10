import {typography} from '../../config/styles';
import {StyleSheet} from 'react-native';
const {fontMain, fontMainLight} = typography;
const styles = StyleSheet.create({
  speakerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  speakerBackground: {
    backgroundColor: 'black',
    height: '100%',
  },
  speakerBox: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    zIndex: 10,
    borderRadius: 20,
    alignItems: 'center',

    padding: 20,
  },
  goBack: {
    color: 'white',
  },
  aboutSpeaker: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  speakerTop: {
    flexDirection: 'row',
  },
  speakerName: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: '600',
    paddingBottom: 15,
  },
  speakerBio: {
    fontSize: 17,
    lineHeight: 30,
  },
});

export default styles;
