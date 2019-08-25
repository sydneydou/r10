import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  conductTitle: {
    paddingBottom: 20,
    color: '#9963ea',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.7,
    fontFamily: typography.fontMain,
  },
  titleBlock: {
    flexDirection: 'row',
  },
});

export default styles;
