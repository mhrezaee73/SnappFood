import React, { Component } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class Mylocation extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, location: {} };
  }

  componentDidMount() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
      .then(() => {})
      .catch(error => console.warn(error));
  }

  render() {
    let hasLocation = Object.keys(this.state.location).length != 0;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: 'pink'
        }}
      >
        <TouchableOpacity
          style={{
            width: 250,
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fa1515',
            borderRadius: 15,
            margin: 15
          }}
          onPress={() => {
            Geolocation.getCurrentPosition(
              response => {
                this.setState({ location: response, isLoading: false });
              },
              error => {
                console.warn(JSON.stringify(error, null, 2));
              },
              {
                enableHighAccuracy: true,
                forceRequestLocation: true,
                timeout: 1000,
                maximumAge: 1000
              }
            );
          }}
        >
          <Text> get location </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 250,
            height: 350,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 20,
            borderRadius: 10,
            paddingHorizontal: 5,
            flexDirection: 'column'
          }}
        >
          <Text style={{ fontSize: 17, color: 'white' }}>
            {JSON.stringify(this.state.location, null, 2)}
          </Text>
          <Text style={{ fontSize: 17, color: 'white' }}>
            {Object.keys(this.state.location).length != 0
              ? `speed : ${this.state.location.coords.speed}`
              : 'rrr'}
          </Text>
        </View>
      </View>
    );
  }
}

export { Mylocation };
