import React, { Component } from 'reactn';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      Name: '',
      address: '',
      descriptin: ''
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('Name')
      .then(Name => {
        if (Name) {
          let x = JSON.parse(Name);
          this.setState({
            Name: x,
            isloading: false
          });
        }
      })
      .catch(error => alert(error))
      .finally(() => {
        this.setState({
          isloading: false
        });
      });

    AsyncStorage.getItem('address')
      .then(address => {
        if (address) {
          let x = JSON.parse(address);
          this.setState({
            address: x,
            isloading: false
          });
        }
      })
      .catch(error => alert(error))
      .finally(() => {
        this.setState({
          isloading: false
        });
      });

    AsyncStorage.getItem('descriptin')
      .then(descriptin => {
        if (descriptin) {
          let x = JSON.parse(descriptin);
          this.setState({
            descriptin: x,
            isloading: false
          });
        }
      })
      .catch(error => alert(error))
      .finally(() => {
        this.setState({
          isloading: false
        });
      });
  }

  render() {
    if (this.state.isloading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <StatusBar backgroundColor="#ff1a75" />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'white'
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: responsiveFontSize(2),
                color: 'black',
                fontFamily: 'Vazir-Medium-FD'
              }}
            >
              مشخصات خود را وارد کنید
            </Text>
          </View>
          {/**   name and family and address     */}
          <View
            style={{
              flex: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'column',
              padding: responsiveWidth(5)
            }}
          >
            <Text
              style={{
                width: '100%',
                minHeight: '10%',
                maxHeight: '10%',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: responsiveFontSize(2),
                color: 'black',
                fontFamily: 'Vazir-Medium-FD',
                marginBottom: '2%'
              }}
            >
              سفارش های شما به نشانی زیر ارسال خواهند شد
            </Text>
            <TextInput
              style={{
                width: '100%',
                minHeight: '10%',
                maxHeight: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: responsiveFontSize(1.5),
                color: 'black',
                fontFamily: 'Vazir-Medium-FD',
                borderWidth: responsiveWidth(0.5),
                borderColor: 'black',
                borderRadius: responsiveWidth(3),
                marginBottom: '2%'
              }}
              placeholder="نام و نام خانوادگی"
              value={this.state.Name}
              onChangeText={Name => this.setState({ Name })}
            />
            <TextInput
              style={{
                width: '100%',
                minHeight: '25%',
                maxHeight: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: responsiveFontSize(1.5),
                color: 'black',
                fontFamily: 'Vazir-Medium-FD',
                borderWidth: responsiveWidth(0.5),
                borderColor: 'black',
                borderRadius: responsiveWidth(3),
                marginBottom: '2%'
              }}
              placeholder="نشانی شما  "
              value={this.state.address}
              onChangeText={address => this.setState({ address })}
            />
            <TextInput
              style={{
                width: '100%',
                minHeight: '25%',
                maxHeight: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: responsiveFontSize(1.5),
                color: 'black',
                fontFamily: 'Vazir-Medium-FD',
                borderWidth: responsiveWidth(0.5),
                borderColor: 'black',
                borderRadius: responsiveWidth(3),
                marginBottom: '9%'
              }}
              placeholder="توضیحات  "
              value={this.state.descriptin}
              onChangeText={descriptin => this.setState({ descriptin })}
            />
            <TouchableOpacity
              style={{
                width: '100%',
                height: '15%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: responsiveHeight(2),
                backgroundColor: 'red'
              }}
              onPress={() => {
                AsyncStorage.setItem('Name', JSON.stringify(this.state.Name))
                  .then(() => {})
                  .catch(error => alert(error));
                AsyncStorage.setItem(
                  'address',
                  JSON.stringify(this.state.address)
                )
                  .then(() => {})
                  .catch(error => alert(error));
                AsyncStorage.setItem(
                  'descriptin',
                  JSON.stringify(this.state.descriptin)
                )
                  .then(() => {
                    alert('اطلاعات شما با موفقیت بروزرسانی شد');
                    this.props.navigation.navigate('_OrderPage');
                  })
                  .catch(error => alert(error));
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontSize: responsiveFontSize(2),
                  color: 'black',
                  fontFamily: 'Vazir-Medium-FD'
                }}
              >
                تایید و بروزرسانی
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

export { Profile };
