import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  loadingText: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  loadingTextContainer: {
    marginTop: 180,
    alignItems: 'center',
  },
});
export default styles;
