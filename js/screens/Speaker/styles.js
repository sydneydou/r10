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
    paddingRight: 70,
  },
  aboutSpeaker: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  speakerTop: {
    flexDirection: 'row',
    marginTop: 45,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  speakerName: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: '600',
    paddingBottom: 15,
  },
  speakerBio: {
    fontSize: 17,
    lineHeight: 30,
  },
  aboutSpeakerContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  readMoreButton: {
    backgroundColor: '#9963ea',
    width: 240,
    borderColor: 'white',
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  readMoreText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default styles;
