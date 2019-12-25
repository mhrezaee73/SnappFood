import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';

class Spinner extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.props.bacColor | 'red'
        }}
      >
        <Image
          style={{
            width: responsiveWidth(30),
            height: responsiveHeight(30),
            justifyContent: 'center',
            alignItems: 'center',
            aspectRatio: 1 / 1
          }}
          source={
            this.props.source || {
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/08.gif'
            }
          }
        />
      </View>
    );
  }
}

export { Spinner };
