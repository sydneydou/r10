import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  sessionTime: {
    fontWeight: 'bold',
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  sessionTimeBlock: {
    backgroundColor: '#e6e6e6',
    paddingLeft: 20,
    height: 25,
    justifyContent: 'center',
  },
  sessionContainer: {
    paddingLeft: 20,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    height: 82,
    justifyContent: 'space-evenly',
  },
  sessionTitle: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  sessionLocation: {
    color: '#999999',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: typography.fontMain,
  },
  sessionList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 15,
  },
});

export default styles;
