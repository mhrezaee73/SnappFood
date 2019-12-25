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
import { Toast } from '../mycomponent';

class Footer extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(9),
          backgroundColor: '#fa1a75',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          position: 'absolute',
          bottom: 0
          //  marginTop: responsiveHeight(15)
        }}
        onPress={() => {
          this.global.isMobile
            ? this.props.navigation.navigate('_BuyPage')
            : this.props.navigation.navigate('ورود با شماره موبایل');
          //  alert(JSON.stringify(this.global.Buy, null, 2));
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            textAlign: 'center',
            textAlignVertical: 'center',
            fontFamily: 'Vazir-Bold-FD',
            color: 'black'
          }}
        >
          سبد خرید
        </Text>
        <TouchableOpacity
          style={{
            width: responsiveWidth(17),
            height: responsiveHeight(7),
            //  backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            position: 'absolute',
            // bottom: 5,
            left: 5
            //  marginTop: responsiveHeight(15)
          }}
          onPress={() => {
            this.setGlobal({
              Buy: [],
              data: [
                {
                  FoodName: 'غذای 1',
                  details: 'تهیه شده از گوشت ها گرون و ارزون',
                  Price: 3500,
                  selected: 0,
                  ImageAddress: require('../img/flatlistcard/06.jpg')
                },
                {
                  FoodName: 'غذای 2',
                  details: 'تهیه شده از گوشت ها گرون و ارزون',
                  Price: 2000,
                  selected: 0
                },
                {
                  FoodName: 'غذای 3',
                  details: 'تهیه شده از گوشت ها گرون و ارزون',
                  Price: '3500',
                  selected: 0
                },
                {
                  FoodName: 'غذای 4',
                  details: 'تهیه شده از گوشت ها گرون و ارزون',
                  Price: '3500',
                  selected: 0
                },
                {
                  FoodName: 'غذای 5',
                  details: 'تهیه شده از گوشت ها گرون و ارزون',
                  Price: '3500',
                  selected: 0
                },
                {
                  FoodName: 'غذای 6',
                  details: 'تهیه شده از گوشت ها گرون و ارزون',
                  Price: '3500',
                  selected: 0
                }
              ]
            });
            Toast('سفارش های شما حذف گردید', false);
          }}
        >
          <Image
            style={{
              width: '55%',
              height: '80%'
            }}
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/trash.png'
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

export { Footer };
