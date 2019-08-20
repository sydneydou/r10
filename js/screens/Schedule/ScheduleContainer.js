import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Schedule from './Schedule';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <View>
        <Schedule />
      </View>
    );
  }
}

export default ScheduleContainer;
