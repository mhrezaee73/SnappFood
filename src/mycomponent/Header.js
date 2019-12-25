import React, { Component } from 'reactn';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

import { Footer } from '../mycomponent';

class Header extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          width: '100%',
          height: responsiveHeight(8),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ebebe0',
          flexDirection: 'row'
        }}
      >
        {/* Search butoon */}
        <TouchableOpacity
          style={{
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
          onPress={() => {
            this.props.navigation.replace(
              `${this.props.navigation.state.routeName}`
            );
          }}
        >
          <Image
            style={{
              width: responsiveWidth(9),
              height: responsiveHeight(5)
            }}
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/01-1.png'
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 8.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontFamily: 'Vazir-Medium-FD',
              textAlign: 'center',
              color: 'black'
            }}
          >
            {this.props.title}
          </Text>
        </View>
        {/* Add section */}
        <TouchableOpacity
          style={{
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Image
            style={{
              width: responsiveWidth(9),
              height: responsiveHeight(4)
              //  tintColor: Colors(this.global.local).last,
            }}
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/02.png'
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export { Header };
