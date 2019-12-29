import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, Image, TouchableOpacity } from 'react-native';
=======
import { View, Text, Image } from 'react-native';
>>>>>>> ac1a6d674c6296092a8be60b8d2e38cd539204bb
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
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
            //   flexDirection: 'row'
          }}
<<<<<<< HEAD
          onPress={() => {
            this.props.navigation.navigate('_CatPage', {
              data: this.props.data,
              catname: this.props.CatCard
            });
=======
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
>>>>>>> ac1a6d674c6296092a8be60b8d2e38cd539204bb
          }}
        >
          <Image
            style={{
              width: responsiveWidth(21.5),
              height: responsiveHeight(20),
              marginRight: this.props.marginRight,
              marginLeft: this.props.marginLeft,
              //   marginTop: responsiveHeight(1),
              borderRadius: responsiveWidth(1)
            }}
            source={this.props.PicAddress}
          />
          <Text
            style={{
              position: 'absolute',
              bottom: responsiveHeight(1),
              //  right: responsiveWidth(7),
              color: 'white',
              fontSize: responsiveFontSize(1),
              fontFamily: 'Vazir-Medium-FD'
            }}
          >
            {this.props.CatCard}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { CatCard };
