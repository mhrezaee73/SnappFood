import React, { Component } from 'reactn';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class OrderPageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(9),
          backgroundColor: '#fa1a75',
          flexDirection: 'row-reverse'
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            this.setGlobal({ ModalVisible: true });
          }}
        >
          <Image
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/01-2.png'
            }}
            style={{
              width: responsiveWidth(4),
              height: responsiveHeight(2.5),
              aspectRatio: 1 / 1,
              tintColor: 'white'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 7,
            justifyContent: 'center',
            alignItems: 'flex-end'
          }}
        >
          <Text
            style={{
              textAlign: 'right',
              textAlignVertical: 'center',
              color: 'black',
              fontSize: responsiveFontSize(1.5),
              fontFamily: 'Vazir-Medium-FD',
              textAlign: 'right'
            }}
          >
            {this.props.navigation.state.routeName == '_OrderPage'
              ? 'صفحه سفارش ها'
              : `${this.props.navigation.state.routeName}`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            this.setGlobal({ dark: !this.global.dark });
          }}
        >
          <Image
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/10.png'
            }}
            style={{
              width: responsiveWidth(3),
              height: responsiveHeight(3.5),
              aspectRatio: 1 / 1,
              tintColor: this.global.dark ? 'black' : 'white'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            this.props.navigation.navigate('_LetterPage');
          }}
        >
          <Image
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/02-1.png'
            }}
            style={{
              width: responsiveWidth(3),
              height: responsiveHeight(3.5),
              aspectRatio: 1 / 1,
              tintColor: 'white'
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export { OrderPageHeader };
