import {typography} from '../../config/styles';
import {StyleSheet} from 'react-native';
const {fontMain, fontMainLight} = typography;
const styles = StyleSheet.create({
  speakerImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
  speakerBackground: {
    backgroundColor: 'black',
  },
  speakerBox: {
    marginLeft: 15,
    marginRight: 15,
  },
  goBack: {
    color: 'white',
  },
});

export default styles;
