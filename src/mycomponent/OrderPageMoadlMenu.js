import React, { Component } from 'reactn';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Share from 'react-native-share';

class OrderPageMoadlMenu extends Component {
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
          flexDirection: 'column'
        }}
      >
        <ImageBackground
          source={{
            uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/022.png'
          }}
          style={{
            width: '100%',
            height: responsiveHeight(20),
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            opacity: 1,
            tintColor: 'green',
            borderBottomWidth: 5,
            borderColor: 'red'
          }}
        >
          <TouchableOpacity
            style={{
              width: responsiveWidth(5),
              height: responsiveHeight(5),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              position: 'absolute',
              top: responsiveHeight(1),
              right: responsiveWidth(8)
            }}
            onPress={() => {
              this.setGlobal({ ModalVisible: false });
            }}
          >
            <Image
              source={{
                uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/03.png'
              }}
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(5),
                tintColor: 'white',
                aspectRatio: 1 / 1
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flex: 8,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            backgroundColor: 'white',
            flexDirection: 'column',
            borderTopWidth: responsiveFontSize(0.3),
            borderColor: '#ff5575'
          }}
        >
          {/* login and register */}
          <TouchableOpacity
            style={{
              width: '100%',
              height: responsiveHeight(6),
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'row-reverse',
              //     backgroundColor: 'red',
              paddingLeft: responsiveWidth(3),
              marginTop: responsiveHeight(2)
            }}
            onPress={() => {
              this.setGlobal({ ModalVisible: false });
              this.props.navigation.navigate('_initialPage');
            }}
          >
            <Image
              source={{
                uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/04.png'
              }}
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(5),
                //    tintColor: 'white',
                aspectRatio: 1 / 1
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(1.5),
                fontFamily: 'Vazir-Thin-FD',
                marginRight: responsiveWidth(1.5)
              }}
            >
              ورود و عضویت
            </Text>
          </TouchableOpacity>
          {/* letter */}
          <TouchableOpacity
            style={{
              width: '100%',
              height: responsiveHeight(6),
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'row-reverse',
              paddingLeft: responsiveWidth(3)
            }}
            onPress={() => {
              this.setGlobal({ ModalVisible: false });
              this.props.navigation.navigate('_LetterPage');
            }}
          >
            <Image
              source={{
                uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/02-1.png'
              }}
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(5),
                tintColor: 'red',
                aspectRatio: 1 / 1
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(1.5),
                fontFamily: 'Vazir-Thin-FD',
                marginRight: responsiveWidth(1.5)
              }}
            >
              پیام ها
            </Text>
          </TouchableOpacity>
          {/* package */}
          <TouchableOpacity
            style={{
              width: '100%',
              height: responsiveHeight(6),
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'row-reverse',
              paddingLeft: responsiveWidth(3)
            }}
            onPress={() => {
              this.setGlobal({ ModalVisible: false });
              this.props.navigation.navigate('_Package');
            }}
          >
            <Image
              source={{
                uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/05.png'
              }}
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(5),
                //   tintColor: 'red',
                aspectRatio: 1 / 1,
                borderColor: 'red'
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(1.5),
                fontFamily: 'Vazir-Thin-FD',
                marginRight: responsiveWidth(1.5)
              }}
            >
              بسته های خدماتی
            </Text>
          </TouchableOpacity>
          {/* chat with support */}
          <TouchableOpacity
            style={{
              width: '100%',
              height: responsiveHeight(6),
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'row-reverse',
              paddingLeft: responsiveWidth(3)
            }}
            onPress={() => {
              this.setGlobal({ ModalVisible: false });
              this.props.navigation.navigate('_Chat');
            }}
          >
            <Image
              source={{
                uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/06.png'
              }}
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(5),
                // tintColor: 'white',
                aspectRatio: 1 / 1
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(1.5),
                fontFamily: 'Vazir-Thin-FD',
                marginRight: responsiveWidth(1.5)
              }}
            >
              چت با پشتیبانی
            </Text>
          </TouchableOpacity>
          {/*  support whit call */}
          <TouchableOpacity
            style={{
              width: '100%',
              height: responsiveHeight(6),
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'row-reverse',
              paddingLeft: responsiveWidth(3)
            }}
            onPress={() => {
              let phoneNumber = '09356111999';
              Linking.openURL(`tel:${phoneNumber}`);
            }}
          >
            <Image
              source={{
                uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/07.png'
              }}
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(5),
                // tintColor: 'white',
                aspectRatio: 1 / 1
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(1.5),
                fontFamily: 'Vazir-Thin-FD',
                marginRight: responsiveWidth(1.5)
              }}
            >
              پشتیبانی
            </Text>
          </TouchableOpacity>
          {/*  share */}
          <TouchableOpacity
            style={{
              width: '100%',
              height: responsiveHeight(6),
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'row-reverse',
              paddingLeft: responsiveWidth(3)
            }}
            onPress={() => {
              var shareOptions = {
                title: 'Snapp Food',
                message:
                  'برای دانلود نسخه جدید اسنپ فود از لینک زیر استفاده کنید',
                url: 'https://www.google.com/'
              };
              Share.open(shareOptions)
                .then(res => {
                  console.log(res);
                })
                .catch(err => {
                  err && console.log(err);
                });
            }}
          >
            <Image
              source={{
                uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/09.png'
              }}
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(5),
                // tintColor: 'white',
                aspectRatio: 1 / 1
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(1.5),
                fontFamily: 'Vazir-Thin-FD',
                marginRight: responsiveWidth(1.5)
              }}
            >
              معرفی به دوستان
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { OrderPageMoadlMenu };
