import React, { Component } from 'reactn';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Myfonts } from '../mycomponent/Myfonts';

class initialPage extends Component {
  static navigationOptions = {
    header: null
  };
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
          alignSelf: 'stretch',
          backgroundColor: 'white'
        }}
      >
        <StatusBar backgroundColor="white" />
        {/** Snapp! food image Section */}
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'white'
          }}
        >
          <Image
            style={{
              width: responsiveWidth(28),
              height: responsiveHeight(8)
            }}
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/01-3.png'
            }}
          />
        </View>

        {/** Image background Section */}
        <View
          style={{
            flex: 5.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <ImageBackground
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/04.gif'
            }}
            style={{
              width: '100%',
              height: responsiveHeight(50)
            }}
          />
        </View>

        {/** button Section */}
        <View
          style={{
            flex: 2.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'white'
          }}
        >
          <TouchableOpacity
            style={{
              width: '80%',
              height: responsiveHeight(5),
              backgroundColor: '#ff1a75',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsiveWidth(4),
              marginBottom: responsiveHeight(2.5)
            }}
            onPress={() => {
              this.props.navigation.navigate('_OrderPage', {
                SendParam: 'تست فرستادن پارامتر'
              });
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: responsiveFontSize(2),
                fontFamily: Myfonts('Bold')
              }}
            >
              سفارش آنلاین
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: responsiveFontSize(2),
              fontFamily: 'Vazir-Medium-FD'
            }}
            onPress={() => {
              this.props.navigation.navigate('ورود با شماره موبایل');
            }}
          >
            ورود / عضویت
          </Text>
        </View>
      </View>
    );
  }
}

export { initialPage };
