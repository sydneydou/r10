import React from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class SingleSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleFave: false,
    };
  }

  addNewFave = () => {
    this.setState({toggleFave: true});
    this.props.addFave(this.props.singleSession.id);
    console.log(this.props.getFaved);
  };

  removeNewFave = () => {
    this.setState({toggleFave: false});
    this.props.removeFave(this.props.singleSession.id);
    console.log(this.props.getFaved);
  };

  render() {
    const {singleSession, navigation, addFave, removeFave} = this.props;
    const time = new Date(singleSession.startTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const currentSpeaker = singleSession.speaker;
    const imageurl = singleSession.speaker.url;
    const toggleFave = this.state.toggleFave;
    return (
      <View style={styles.sessionPage}>
        <Text style={styles.sessionLocation}>{singleSession.location}</Text>
        <Text style={styles.sessionTitle}>{singleSession.title}</Text>
        <Text style={styles.sessionTime}>{time}</Text>
        <Text style={styles.sessionDescription}>
          {singleSession.description}
        </Text>
        <Text style={styles.sessionLocation}>Presented By:</Text>
        <TouchableHighlight
          onPress={() =>
            navigation.push('Speaker', {
              name: singleSession.name,
              bio: singleSession.bio,
            })
          }>
          <View>
            <Image style={{width: 50, height: 50}} source={{uri: {imageurl}}} />
            <Text style={styles.sessionSpeakerName}>
              {singleSession.speaker.name}
            </Text>
          </View>
        </TouchableHighlight>
        {toggleFave === false ? (
          <Button title="Add to Faves" onPress={this.addNewFave} />
        ) : (
          <Button title="Remove to Faves" onPress={this.removeNewFave} />
        )}
      </View>
    );
  }
}

export default withNavigation(SingleSession);
