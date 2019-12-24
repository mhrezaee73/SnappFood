import React, { Component } from 'reactn';
import {
  View,
  AsyncStorage,
  Text,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Modal from 'react-native-modal';
import AndroidOpenSettings from 'react-native-android-open-settings';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class Boot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: undefined
    };
    this.setGlobal({
      footer: 0,
      isModalVisible: undefined,
      isConnected: undefined,
      location: false
    });
    this.setGlobal({
      Buy: []
    });
  }

  componentDidMount() {
    // Fetch network status
    NetInfo.isConnected
      .fetch()
      .done(isConnected => this.setState({ isConnected }));

    this.netInfoListener = NetInfo.isConnected.addEventListener(
      'connectionChange',
      isConnected => this.setState({ isConnected })
    );

    // get AsyncStorage items
    AsyncStorage.getItem('MobileNumber')
      .then(MobileNumber => {
        if (MobileNumber) {
          let x = JSON.parse(MobileNumber);
          this.setGlobal({
            isMobile: x
          });
        }
      })
      .catch(error => alert(error));
  }

  componentWillUnmount() {
    this.netInfoListener();
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Modal
          isVisible={this.state.isConnected == false}
          style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: responsiveHeight(40),
            marginHorizontal: '15%',
            borderRadius: 30
          }}
          swipeDirection={'up'}
          animationIn="zoomInDown"
          animationOut="zoomOutDown"
          animationInTiming={1000}
          animationOutTiming={1000}
          coverScreen={true}
          backdropOpacity={0.4}
          onBackdropPress={() => {}}
          onBackButtonPress={() => {}}
          onSwipeComplete={() => {}}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'column',
              borderRadius: 10
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                backgroundColor: 'white',
                borderTopLeftRadius: responsiveWidth(2),
                borderTopRightRadius: responsiveWidth(2)
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: responsiveFontSize(1.8),
                  color: 'black',
                  fontFamily: 'Vazir-Medium-FD'
                }}
              >
                لطفا اتصال خود به اینترنت را بررسی کنید
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                backgroundColor: 'black',
                flexDirection: 'row-reverse',
                borderBottomLeftRadius: responsiveWidth(2),
                borderBottomRightRadius: responsiveWidth(2)
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexDirection: 'row-reverse',
                  borderBottomRightRadius: responsiveWidth(2)
                }}
                onPress={() => {
                  BackHandler.exitApp();
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: responsiveFontSize(1.8),
                    color: 'white',
                    fontFamily: 'Vazir-Medium-FD'
                  }}
                >
                  خروج
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexDirection: 'row-reverse',
                  borderBottomLeftRadius: responsiveWidth(2),
                  borderRightWidth: 2,
                  borderColor: 'white'
                }}
                onPress={() => {
                  AndroidOpenSettings.wirelessSettings();
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: responsiveFontSize(1.8),
                    color: 'white',
                    fontFamily: 'Vazir-Medium-FD'
                  }}
                >
                  تلاش مجدد
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {this.props.children}
      </View>
    );
  }
}

export { Boot };
