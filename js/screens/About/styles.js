import {StyleSheet, Platform} from 'react-native';
import {typography} from '../../config/styles';

const styles = StyleSheet.create({
  aboutTitle: {
    fontSize: 27,
    paddingBottom: 20,
    fontWeight: '600',
    fontFamily: typography.fontMain,
    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
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
    ...Platform.select({
      android: {
        color: '#999999',
      },
    }),
  },
  singleConductContainer: {
    paddingBottom: 20,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  aboutFooter: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 40,
    fontFamily: typography.fontMain,
    fontWeight: '100',
  },
});

export default styles;
