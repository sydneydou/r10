import {typography} from '../../config/styles';
import {StyleSheet} from 'react-native';
const {fontMain, fontMainLight} = typography;
const styles = StyleSheet.create({
  title: {
    fontFamily: fontMain,
  },
  sessionPage: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 10,
  },
  sessionLocation: {
    color: '#999999',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 10,
  },
  sessionTitle: {
    fontSize: 25,
    fontWeight: '500',
    paddingBottom: 10,
  },
  sessionTime: {
    color: '#cf392a',
    fontWeight: '500',
    paddingBottom: 10,
  },
  sessionDescription: {
    fontSize: 20,
    fontWeight: '400',
    paddingBottom: 20,
  },
  sessionSpeakerName: {
    fontSize: 17,
    fontWeight: '500',
  },
  speakerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    paddingBottom: 25,
  },
  speakerImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
  faveButton: {
    backgroundColor: '#9963ea',
    width: 180,
    borderColor: 'white',
    borderRadius: 25,
    paddingTop: 20,
    textAlign: 'center',
    marginTop: 30,
    marginRight: 60,
    marginLeft: 60,
  },
  faveBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  faveButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default styles;
