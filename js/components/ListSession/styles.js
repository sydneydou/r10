import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sessionTime: {
    fontWeight: 'bold',
    backgroundColor: '#e6e6e6',
    paddingLeft: 20,
    height: 25,
    justifyContent: 'center',
  },
  sessionContainer: {
    paddingLeft: 20,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    height: 82,
    justifyContent: 'space-evenly',
  },
  sessionTitle: {
    fontSize: 17,
  },
  sessionLocation: {
    color: '#999999',
    fontSize: 15,
  },
});

export default styles;