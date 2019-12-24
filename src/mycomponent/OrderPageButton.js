import React, { Component } from 'reactn';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class OrderPageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          width: responsiveWidth(96),
          height: responsiveHeight(8),
          marginLeft: responsiveWidth(2),
          marginTop: responsiveWidth(2),
          backgroundColor: this.props.dark ? 'white' : 'black',
          flexDirection: 'row',
          borderRadius: responsiveWidth(1),
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderColor: this.props.dark ? 'black' : 'white',
          borderWidth: responsiveWidth(0.5)
        }}
        onPress={() => {
          this.props.navigation.navigate('_NearRestaurant', {
            data: this.props.data
          });
        }}
      >
        <Image
          style={{
            width: responsiveWidth(5),
            height: responsiveHeight(3),
            aspectRatio: 1 / 1,
            tintColor: this.props.dark ? 'black' : 'white',
            transform: [
              {
                rotateY: '180deg'
              }
            ]
          }}
          source={{
            uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/02.png'
          }}
        />
        <Text
          style={{
            color: this.props.dark ? 'black' : 'white',
            fontSize: responsiveFontSize(2),
            fontFamily: 'Vazir-Medium-FD',
            textAlign: 'right',
            marginLeft: 80
          }}
        >
          همه خوشمزه فروشی های اطراف شما
        </Text>
        <Image
          style={{
            width: responsiveWidth(7),
            height: responsiveHeight(7),
            aspectRatio: 1 / 1,
            alignItems: 'flex-start'
          }}
          source={{
            uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/01.gif'
          }}
        />
      </TouchableOpacity>
    );
  }
}

export { OrderPageButton };
