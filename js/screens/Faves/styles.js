import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  noFaveText: {
    fontSize: 22,
    fontWeight: '500',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  noFaveTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
  },
});

export default styles;
