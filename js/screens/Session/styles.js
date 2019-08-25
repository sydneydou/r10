import {typography} from '../../config/styles';
import {StyleSheet} from 'react-native';
const {fontMain, fontMainLight} = typography;
const styles = StyleSheet.create({
  sessionPage: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 10,
    fontFamily: fontMain,
  },
  sessionLocation: {
    color: '#999999',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 13,
  },
  sessionTitle: {
    fontSize: 30,
    fontWeight: '500',
    paddingBottom: 13,
  },
  sessionTime: {
    color: '#cf392a',
    fontWeight: '500',
    paddingBottom: 12,
  },
  sessionDescription: {
    fontSize: 20,
    fontWeight: '400',
    paddingBottom: 20,
    lineHeight: 30,
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
    width: 210,
    borderColor: 'white',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
  },
  faveButtonBlock: {
    textAlign: 'center',
    marginTop: 30,
    marginRight: 60,
    marginLeft: 60,
    alignItems: 'center',
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
    fontWeight: '500',
  },
});

export default styles;
