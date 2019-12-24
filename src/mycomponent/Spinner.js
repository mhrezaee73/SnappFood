import React, { Component } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
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
            //  backgroundColor: 'lime'
          }}
          source={
            this.props.source || {
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/08.gif'
            }
          }
          //   resizeMode="center"
        />
        {/* <ActivityIndicator size="large" color="green" /> */}
      </View>
    );
  }
}

export { Spinner };
