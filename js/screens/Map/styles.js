import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  noMapText: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  noMapTextContainer: {
    marginTop: 180,
    alignItems: 'center',
  },
});

export default styles;
