import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  sessionPage: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 10,
    fontFamily: typography.fontMain,
  },
  sessionLocation: {
    color: '#999999',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 18,
    fontFamily: typography.fontMain,
  },
  sessionTitle: {
    fontSize: 30,
    fontWeight: '500',
    paddingBottom: 18,
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  sessionTime: {
    color: '#cf392a',
    fontWeight: '500',
    paddingBottom: 18,
  },
  sessionDescription: {
    fontSize: 20,
    fontWeight: '300',
    paddingBottom: 30,
    lineHeight: 30,
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#999999',
      },
    }),
  },
  sessionSpeakerName: {
    fontSize: 17,
    fontFamily: typography.fontMain,
    fontWeight: '500',
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
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
    width: 250,
    borderColor: 'white',
    borderRadius: 25,
    height: 54,
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
    fontFamily: typography.fontMain,
  },
});

export default styles;
