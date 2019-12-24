import React, { Component } from 'reactn';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Spinner } from '../mycomponent';
import Axios from 'axios';

class FlatlistCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: []
    };
  }

  // componentDidMount() {
  //   const datalink = `http://mhoseinr.ir/wp-content/uploads/2019/12/${this.props.value}.txt`;
  //   Axios.get(datalink)
  //     .then(response => {
  //       this.setState({ isloading: false, mydata: response.data });
  //       //alert(this.state.mydata.length);
  //     })
  //     .catch(error => {
  //       this.setState({ isloading: false });
  //       alert(error);
  //     });
  // }

  render() {
    if (this.state.isloading) {
      return <Spinner />;
    } else {
      return (
        <View style={{ flex: 1, marginTop: this.props.TopSpace }}>
          <View
            style={{
              flexDirection: 'row-reverse',
              //backgroundColor: 'red',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                textAlign: 'right',
                textAlignVertical: 'center',
                fontSize: responsiveFontSize(2),
                fontFamily: 'Vazir-Medium-FD',
                marginRight: responsiveWidth(2.5),
                color: this.props.dark ? 'black' : 'white'
              }}
            >
              {this.props.Category}
            </Text>

            <TouchableOpacity
              style={{
                width: responsiveWidth(12),
                height: responsiveHeight(3),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: responsiveWidth(2),
                borderWidth: responsiveFontSize(0.2),
                borderColor: this.props.dark ? 'black' : 'white',
                margin: responsiveWidth(1),
                position: 'absolute',
                right: responsiveWidth(2)
              }}
              onPress={() => {
                this.props.navigation.navigate('_FlistCardMore', {
                  CatName: this.props.Category,
                  data: this.props.data
                });
              }}
            >
              <Text
                style={{
                  textAlign: 'right',
                  textAlignVertical: 'center',
                  fontSize: responsiveFontSize(1.5),
                  fontFamily: 'Vazir-Medium-FD',
                  color: this.props.dark ? 'black' : 'white'
                }}
              >
                {`بیشتر >`}
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{
              flex: 1,
              alignSelf: 'stretch',
              margin: responsiveWidth(0.2)
            }}
            data={this.props.data.slice(0, 3)}
            //  initialNumToRender={1}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(40),
                    height: responsiveHeight(30),
                    //alignItems: 'center',
                    justifyContent: 'flex-start',
                    borderRadius: responsiveWidth(2),
                    borderWidth: responsiveFontSize(0.2),
                    borderColor: this.props.dark ? 'black' : 'white',
                    margin: responsiveWidth(1),
                    flexDirection: 'column',
                    elevation: 3
                  }}
                  activeOpacity={0.5}
                  onPress={() => {
                    this.setGlobal({ imageMenuHeader: item.ImageAddress });
                    this.props.navigation.navigate('_Restaurant', {
                      resname: item.ResName
                    });
                  }}
                >
                  <Image
                    source={
                      item.ImageAddress.length > 0
                        ? { uri: `${item.ImageAddress}` }
                        : {
                            uri:
                              'http://mhoseinr.ir/wp-content/uploads/2019/12/01-3.png'
                          }
                    }
                    style={{
                      width: '100%',
                      height: '60%',
                      borderTopRightRadius: responsiveWidth(1.7),
                      borderTopLeftRadius: responsiveWidth(1.8)
                    }}
                  />
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.5),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                      //   backgroundColor: 'red',
                      marginRight: responsiveWidth(0.5),
                      fontFamily: 'Vazir-Medium-FD',
                      color: this.props.dark ? 'black' : 'white'
                    }}
                  >
                    {item.ResName || 'نام رستوران'}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                      marginRight: responsiveWidth(0.5),
                      marginTop: responsiveHeight(1.5),
                      fontFamily: 'Vazir-THin-FD',
                      color: this.props.dark ? 'black' : 'white'
                    }}
                  >
                    {item.Description || 'توضیحات رستوران'}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      // marginTop: responsiveHeight(0.3)
                      position: 'absolute',
                      right: responsiveWidth(0.5),
                      bottom: responsiveHeight(0.7)
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row-reverse',
                        width: responsiveWidth(5),
                        height: responsiveHeight(2.8),
                        borderRadius: responsiveWidth(5),
                        borderWidth: responsiveWidth(0.1),
                        borderColor: this.props.dark ? 'black' : 'white',
                        marginHorizontal: responsiveWidth(1),
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: responsiveHeight(0.18)
                      }}
                    >
                      <Image
                        source={require('../img/flatlistcard/01.png')}
                        style={{
                          width: responsiveWidth(3),
                          height: responsiveHeight(1.7),
                          tintColor: this.props.dark ? 'black' : 'white'
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1),
                        textAlign: 'right',
                        textAlignVertical: 'center',
                        marginRight: responsiveWidth(0.5),
                        fontFamily: 'Vazir-Thin-FD',
                        color: this.props.dark ? 'black' : 'white'
                      }}
                    >
                      {item.DeliveryPrice || 'قیمت پیک'}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => String(index)}
            horizontal
          />
        </View>
      );
    }
  }
}

export { FlatlistCard };
