import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  aboutTitle: {
    fontSize: 27,
    paddingBottom: 20,
    fontWeight: '600',
    fontFamily: typography.fontMain,
  },
  aboutPage: {
    padding: 20,
  },
  aboutImage: {
    width: 230,
    height: 55,
  },
  aboutImageContainer: {
    alignItems: 'center',
    paddingBottom: 25,
    marginBottom: 25,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 17,
    lineHeight: 25,
    paddingBottom: 20,
    fontFamily: typography.fontMain,
  },
});

export default styles;
