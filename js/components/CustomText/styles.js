import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  customText: {
    fontFamily: typography.fontMain,
    ...Platform.select({
      ios: {
        color: 'black',
      },
      android: {
        color: '#999999',
      },
    }),
  },
});

export default styles;
