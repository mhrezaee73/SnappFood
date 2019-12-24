import React, { Component } from 'reactn';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Keyboard,
  AsyncStorage
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modalbox';
import { Toast } from '../mycomponent';

class login extends Component {
  check(input, type: 'phone') {
    let iranianPhone_re = /^09[0-9]{9}$/; //regex101.com
    switch (type) {
      case 'phone':
        return input == '' ? undefined : iranianPhone_re.test(input);
      default:
        return undefined;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      MobileNumber: '',
      isModalVisible: false,
      ValidCode: '',
      timer: 60,
      x: Math.floor(Math.random() * 10) + 1,
      y: Math.floor(Math.random() * 10) + 1
    };
  }

  timer() {
    setInterval(() => {
      this.setState(oldState => ({ timer: oldState.timer - 1 }));
      if (this.state.timer == 0) {
        this.setState({ timer: 60 });
      }
    }, 1000);
  }

  render() {
    return (
      <View
        // animation="lightSpeedIn"
        //  duration={1000}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: '#ebebe0'
        }}
      >
        {/** Confirm MobileNumber code in Modal */}

        <Modal
          style={{
            width: '70%',
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: responsiveHeight(2)
            // marginVertical: responsiveHeight(23),
            //   marginHorizontal: '15%',
            // borderRadius: 30
          }}
          animationDuration={700}
          position={'center'}
          isOpen={this.state.isModalVisible}
          // onClosed={() => {
          //   this.setGlobal({ isModalVisible: false });
          // }}
          coverScreen={false}
          backdropPressToClose={false}
          backButtonClose={false}
          swipeToClose={false}
          backdropColor="#222222"
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderTopLeftRadius: responsiveHeight(2),
              borderTopRightRadius: responsiveHeight(2)
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row-reverse',
                alignSelf: 'stretch',
                borderTopLeftRadius: responsiveHeight(2),
                borderTopRightRadius: responsiveHeight(2)
              }}
            >
              <Image
                source={{
                  uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/01-4.png'
                }}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveHeight(3),
                  tintColor: 'white',
                  margin: responsiveWidth(2)
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: responsiveFontSize(2),
                  color: 'white',
                  fontFamily: 'Vazir-Medium-FD'
                }}
              >
                تایید شماره موبایل
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch'
              }}
            >
              <View
                style={{
                  flex: 0.9,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch'
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: responsiveFontSize(1.7),
                    color: 'black',
                    fontFamily: 'Vazir-Medium-FD'
                  }}
                >
                  {`کد ارسالی به شماره موبایل تان را وارد کنید ${this.state.MobileNumber} `}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.9,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  marginBottom: responsiveHeight(2)
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: responsiveFontSize(1.7),
                    color: 'black',
                    fontFamily: 'Vazir-Medium-FD'
                  }}
                >
                  {`${this.state.x} × ${this.state.y} =`}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexDirection: 'row-reverse',
                  borderTopWidth: 1,
                  borderBottomWidth: 1
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: responsiveWidth(2)
                  }}
                >
                  <Image
                    style={{
                      width: responsiveWidth(7),
                      height: responsiveHeight(4),
                      tintColor: 'gray'
                    }}
                    source={{
                      uri:
                        'http://mhoseinr.ir/wp-content/uploads/2019/12/02-2.png'
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 9,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch'
                  }}
                >
                  <TextInput
                    keyboardType="decimal-pad"
                    style={{
                      flex: 1,
                      alignSelf: 'stretch',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      fontSize: responsiveFontSize(2),
                      color: 'black',
                      fontFamily: 'Vazir-Medium-FD'
                      //marginBottom: responsiveHeight(2)
                      //backgroundColor: 'red'
                    }}
                    placeholder="کد"
                    value={this.state.ValidCode}
                    onChangeText={ValidCode => this.setState({ ValidCode })}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexDirection: 'row-reverse'
                }}
              ></View>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                borderBottomLeftRadius: responsiveHeight(2),
                borderBottomRightRadius: responsiveHeight(2),
                flexDirection: 'row-reverse',
                borderWidth: 1,
                borderColor: 'red'
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  borderBottomRightRadius: responsiveHeight(2)
                }}
                onPress={() => {
                  if (this.state.ValidCode == this.state.x * this.state.y) {
                    this.setState({ isModalVisible: false }, () => {
                      AsyncStorage.setItem(
                        'MobileNumber',
                        JSON.stringify(this.state.MobileNumber)
                      )
                        .then(() => {
                          let x = this.state.MobileNumber;
                          this.setGlobal({
                            isMobile: x
                          });
                        })
                        .catch(error => alert(error));

                      Toast('کد وارد شده صحیح است', false);
                      Keyboard.dismiss();
                      setTimeout(() => {
                        this.props.navigation.navigate('_OrderPage');
                      }, 1000);
                    });
                  } else {
                    this.setState({ isModalVisible: false }, () => {
                      Toast('کد وارد شده نادرست است', false);
                      Keyboard.dismiss();
                      clearInterval(this.timer);
                    });
                  }
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: responsiveFontSize(2),
                    color: 'black',
                    fontFamily: 'Vazir-Medium-FD'
                  }}
                >
                  تایید
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  borderBottomLeftRadius: responsiveHeight(2),
                  borderRightWidth: 1,
                  borderColor: 'red'
                }}
                onPress={() => {
                  this.setState({
                    timer: 60,
                    x: Math.floor(Math.random() * 10) + 1,
                    y: Math.floor(Math.random() * 10) + 1
                  });
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: responsiveFontSize(2),
                    color: 'black',
                    fontFamily: 'Vazir-Medium-FD'
                  }}
                >
                  {`ارسال مجدد ( ${this.state.timer} )`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <StatusBar backgroundColor="#ff1a75" />
        {/** End Modal and StatusBar */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          {/** Top section (login text) */}
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: responsiveFontSize(2),
              fontFamily: 'Vazir-Medium-FD',
              color: 'gray'
            }}
          >
            ورود یا ثبت نام
          </Text>
        </View>
        {/** Second section (TextInput && Image) */}
        <View
          style={{
            flex: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            flexDirection: 'row-reverse',
            backgroundColor: 'white'
          }}
        >
          <View
            style={{
              width: responsiveWidth(5),
              height: responsiveHeight(7),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              marginRight: responsiveWidth(2)
            }}
          >
            <Image
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(4),
                tintColor: 'gray'
              }}
              source={{
                uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/01-4.png'
              }}
            />
          </View>
          <View
            style={{
              width: responsiveWidth(95),
              height: responsiveHeight(7),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <TextInput
              ref={mymessage => {
                this.mymessage = mymessage;
              }}
              keyboardType="decimal-pad"
              autoFocus={true}
              style={{
                width: responsiveWidth(95),
                height: responsiveHeight(7),
                textAlign: 'center',
                fontSize: responsiveFontSize(2),
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: responsiveHeight(2),
                backgroundColor: 'white',
                position: 'absolute',
                top: responsiveHeight(0.1),
                fontFamily: 'Vazir-Medium-FD',
                color: 'gray'
              }}
              placeholder=" شماره موبایل"
              value={this.state.MobileNumber}
              onChangeText={MobileNumber => this.setState({ MobileNumber })}
            />
          </View>
        </View>
        {/** Empty section (Between TextInput && TouchableOpacity ) */}
        <View
          style={{
            flex: 6,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        />
        {/** Send Button section */}
        <TouchableOpacity
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(9),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ff1a75',
            position: 'absolute',
            bottom: responsiveHeight(0.1),
            flexDirection: 'row-reverse'
          }}
          onPress={() => {
            if (this.check(this.state.MobileNumber, 'phone') == true) {
              this.setState({ isModalVisible: true });
              this.setState({ timer: 60 }, () => {
                this.timer();
              });
            } else {
              Toast('فرمت شماره وارد شده نادرست است', false);
            }
          }}
        >
          <Image
            style={{
              width: responsiveWidth(6),
              height: responsiveHeight(4),
              tintColor: 'black',
              marginLeft: responsiveWidth(2),
              marginTop: responsiveHeight(2)
            }}
            source={{
              uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/02-2.png'
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: responsiveFontSize(3),
              fontFamily: 'Vazir-Medium-FD',
              color: 'black',
              marginBottom: responsiveHeight(1)
            }}
          >
            ورود
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { login };
