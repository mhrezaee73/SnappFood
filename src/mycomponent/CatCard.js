import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class CatCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <Image
          style={{
            width: responsiveWidth(21.5),
            height: responsiveHeight(20),
            marginRight: responsiveWidth(1),
            marginLeft: responsiveWidth(1.5),
            marginTop: responsiveHeight(1),
            borderRadius: responsiveWidth(1)
          }}
          source={this.props.PicAddress}
        />
        <Text
          style={{
            position: 'absolute',
            bottom: responsiveHeight(1),
            right: responsiveWidth(7),
            color: 'red',
            fontSize: responsiveFontSize(1.5),
            fontFamily: 'Vazir-Thin-FD'
          }}
        >
          CatCard
        </Text>
      </View>
    );
  }
}

export { CatCard };
