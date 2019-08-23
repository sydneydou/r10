import React from 'react';
import {Text, View, TouchableOpacity, Animated, Easing} from 'react-native';
import styles from './styles';

class SingleConduct extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.state = {
      collapse: true,
    };
    this.icons = {
      collapse: '+',
      show: '-',
    };
  }

  animate = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();
    if (!this.state.collapse) {
      this.setState({
        collapse: true,
      });
    } else {
      this.setState({
        collapse: false,
      });
    }
  };

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    let icon = this.icons['show'];

    if (this.state.collapse) {
      icon = this.icons['collapse'];
    }
    const showDescription = {
      display: 'flex',
      fontSize: 17,
      lineHeight: 25,
      paddingBottom: 20,
    };
    const hideDescription = {
      display: 'none',
      fontSize: 17,
      lineHeight: 25,
      paddingBottom: 20,
    };
    const {conduct} = this.props;
    return (
      <View>
        <View>
          <TouchableOpacity onPress={this.animate} style={styles.titleBlock}>
            <Animated.Text
              style={{
                color: '#9963ea',
                fontSize: 20,
                fontWeight: '500',
                transform: [{rotate: spin}],
              }}>
              {' '}
              {icon}{' '}
            </Animated.Text>
            <Text style={styles.conductTitle}>{conduct.title}</Text>
          </TouchableOpacity>
          <Text style={this.state.collapse ? hideDescription : showDescription}>
            {conduct.description}
          </Text>
        </View>
      </View>
    );
  }
}

export default SingleConduct;
