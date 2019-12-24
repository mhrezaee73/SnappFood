import React, { Component } from 'reactn';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
  BackHandler,
  Linking
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';
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

    // return (
    //   <View
    //     style={{
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       alignSelf: 'stretch',
    //       backgroundColor: 'white'
    //     }}
    //   >
    //     <Modal
    //       isVisible={this.global.isModalVisible}
    //       style={{
    //         width: '70%',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         marginVertical: responsiveHeight(40),
    //         marginHorizontal: '15%',
    //         borderRadius: 30
    //       }}
    //       swipeDirection={'up'}
    //       animationIn="zoomInDown"
    //       animationOut="zoomOutDown"
    //       animationInTiming={1000}
    //       animationOutTiming={1000}
    //       coverScreen={true}
    //       backdropOpacity={0.4}
    //       onBackdropPress={() => {
    //         this.setGlobal({ isModalVisible: false });
    //       }}
    //       onBackButtonPress={() => {
    //         this.setGlobal({ isModalVisible: false });
    //       }}
    //       onSwipeComplete={() => {
    //         this.setGlobal({ isModalVisible: false });
    //       }}
    //     >
    //       <View
    //         style={{
    //           flex: 1,
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           alignSelf: 'stretch',
    //           flexDirection: 'column',
    //           borderRadius: 10
    //         }}
    //       >
    //         <View
    //           style={{
    //             flex: 1,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             alignSelf: 'stretch',
    //             backgroundColor: 'white',
    //             borderTopLeftRadius: responsiveWidth(2),
    //             borderTopRightRadius: responsiveWidth(2)
    //           }}
    //         >
    //           <Text
    //             style={{
    //               textAlign: 'center',
    //               fontSize: responsiveFontSize(1.8),
    //               color: 'black',
    //               fontFamily: 'Vazir-Medium-FD'
    //             }}
    //           >
    //             لطفا اتصال خود به اینترنت را بررسی کنید
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             flex: 1,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             alignSelf: 'stretch',
    //             backgroundColor: 'black',
    //             flexDirection: 'row-reverse',
    //             borderBottomLeftRadius: responsiveWidth(2),
    //             borderBottomRightRadius: responsiveWidth(2)
    //           }}
    //         >
    //           <TouchableOpacity
    //             style={{
    //               flex: 1,
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //               alignSelf: 'stretch',
    //               flexDirection: 'row-reverse',
    //               borderBottomRightRadius: responsiveWidth(2)
    //             }}
    //             onPress={() => {
    //               BackHandler.exitApp();
    //             }}
    //           >
    //             <Text
    //               style={{
    //                 textAlign: 'center',
    //                 fontSize: responsiveFontSize(1.8),
    //                 color: 'white',
    //                 fontFamily: 'Vazir-Medium-FD'
    //               }}
    //             >
    //               خروج
    //             </Text>
    //           </TouchableOpacity>
    //           <TouchableOpacity
    //             style={{
    //               flex: 1,
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //               alignSelf: 'stretch',
    //               flexDirection: 'row-reverse',
    //               borderBottomLeftRadius: responsiveWidth(2),
    //               borderRightWidth: 2,
    //               borderColor: 'white'
    //             }}
    //             onPress={() => {
    //               if (this.global.isConnected) {
    //                 this.setGlobal({ isModalVisible: false });
    //               }
    //             }}
    //           >
    //             <Text
    //               style={{
    //                 textAlign: 'center',
    //                 fontSize: responsiveFontSize(1.8),
    //                 color: 'white',
    //                 fontFamily: 'Vazir-Medium-FD'
    //               }}
    //             >
    //               تلاش مجدد
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     </Modal>
    //   </View>
    // );
  }
}

export { initialPage };
