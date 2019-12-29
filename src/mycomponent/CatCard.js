import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
          onPress={() => {
            this.props.navigation.navigate('_CatPage', {
              data: this.props.data,
              catname: this.props.CatCard
            });
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
