import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  loadingText: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: typography.fontMain,
  },
  loadingTextContainer: {
    marginTop: 180,
    alignItems: 'center',
  },
});
export default styles;
