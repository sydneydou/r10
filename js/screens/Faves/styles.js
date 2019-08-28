import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  noFaveText: {
    fontSize: 22,
    fontWeight: '500',
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
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
