import React, { Component } from 'reactn';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class FlatlistCardVertical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: this.props.TopSpace,
          marginBottom: this.global.Buy.length ? responsiveHeight(9) : 0
        }}
      >
        <View
          style={{
            flexDirection: 'row-reverse',
            //backgroundColor: 'red',
            justifyContent: 'center',
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
        </View>
        <FlatList
          style={{
            flex: 1,
            alignSelf: 'stretch',
            margin: responsiveWidth(0.2)
          }}
          data={
            this.props.location == true
              ? this.props.data.filter(x => x.location.includes('tehran'))
              : this.props.data
          }
          initialNumToRender={1}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: responsiveWidth(96),
                  height: responsiveHeight(15),
                  //alignItems: 'center',
                  justifyContent: 'flex-start',
                  borderRadius: responsiveWidth(2),
                  borderWidth: responsiveFontSize(0.2),
                  borderColor: this.props.dark ? 'black' : 'white',
                  margin: responsiveWidth(2),
                  flexDirection: 'row-reverse'
                }}
                onPress={() => {
                  this.setGlobal({ imageMenuHeader: item.ImageAddress });
                  this.props.navigation.navigate('_Restaurant', {
                    resname: `${item.ResName}`
                  });
                }}
              >
                <View style={{ width: '30%', height: '100%' }}>
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
                      height: '100%',
                      borderTopRightRadius: responsiveWidth(1.7),
                      borderBottomRightRadius: responsiveWidth(1.8)
                    }}
                  />
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                      //   backgroundColor: 'red',
                      marginRight: responsiveWidth(0.75),
                      fontFamily: 'Vazir-Medium-FD',
                      color: this.props.dark ? 'black' : 'white'
                    }}
                  >
                    {item.ResName || 'نام رستوران'}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.2),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                      marginRight: responsiveWidth(0.75),
                      marginTop: responsiveHeight(1),
                      fontFamily: 'Vazir-THin-FD',
                      color: this.props.dark ? 'black' : 'white'
                    }}
                  >
                    {item.Description || 'توضیحات رستوران'}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.2),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                      marginRight: responsiveWidth(0.75),
                      marginTop: responsiveHeight(1),
                      fontFamily: 'Vazir-THin-FD',
                      color: this.props.dark ? 'black' : 'white'
                    }}
                  >
                    {item.location || 'آدرس رستوران'}
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
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    );
  }
}

export { FlatlistCardVertical };
