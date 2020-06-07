import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  PermissionsAndroid,
} from 'react-native';

import FetchLocation from './src/components/FetchLocation';
import Geolocation from '@react-native-community/geolocation';
export default class App extends Component {
  state = {
    latiude: '',
    longitude: '',
    location: '',
  };
  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        this.setState({location});
      },
      (err) => Alert.alert(err.message),
    );
  };

  DeletLocation = () => {
    this.setState({location: ''});
  };

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <Button title="Delete location" onPress={this.DeletLocation} />
        <Text style={styles.instructions}>Postion: {this.state.location}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
