import {typography} from '../../config/styles';
import {StyleSheet, Platform} from 'react-native';

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
    fontFamily: typography.fontMain,
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
    fontFamily: typography.fontMain,
    paddingBottom: 15,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  speakerBio: {
    fontSize: 17,
    fontFamily: typography.fontMain,
    lineHeight: 30,
    ...Platform.select({
      android: {
        color: '#999999',
      },
    }),
  },
  aboutSpeakerContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  readMoreButton: {
    backgroundColor: '#9963ea',
    width: 260,
    borderColor: 'white',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  readMoreText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: typography.fontMain,
    fontWeight: '500',
  },
});

export default styles;
