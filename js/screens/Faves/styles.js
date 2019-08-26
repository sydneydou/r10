import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  noFaveText: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  noFaveTextContainer: {
    marginTop: 180,
    alignItems: 'center',
  },
});

export default styles;
