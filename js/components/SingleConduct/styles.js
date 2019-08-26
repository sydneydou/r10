import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  conductTitle: {
    paddingBottom: 20,
    color: '#9963ea',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.7,
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  titleBlock: {
    flexDirection: 'row',
  },
});

export default styles;
