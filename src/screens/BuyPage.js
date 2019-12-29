import React, { Component } from 'reactn';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Myfonts } from '../mycomponent/Myfonts';

class BuyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: []
    };
  }

  componentDidMount() {
    function compare(a, b) {
      if (a.FoodName < b.FoodName) {
        return -1;
      }
      if (a.FoodName > b.FoodName) {
        return 1;
      }
      return 0;
    }
    let newBuy = [...this.global.Buy];
    newBuy.sort(compare);
    this.setGlobal({
      Buy: newBuy
    });
  }

  render() {
    getSum = (a, b) => {
      return a + b;
    };
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: 'snow'
        }}
      >
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <View
            style={{
              width: '100%',
              height: responsiveHeight(4),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              flexDirection: 'row-reverse'
            }}
          >
            <Text
              style={{
                width: '20%',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: Myfonts('Medium'),
                fontSize: responsiveFontSize(1.5),
                color: 'black'
              }}
            >
              حذف
            </Text>
            <Text
              style={{
                width: '20%',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: Myfonts('Medium'),
                fontSize: responsiveFontSize(1.5),
                color: 'black'
              }}
            >
              ردیف
            </Text>
            <Text
              style={{
                width: '20%',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: Myfonts('Medium'),
                fontSize: responsiveFontSize(1.5),
                color: 'black'
              }}
            >
              عکس
            </Text>
            <Text
              style={{
                width: '20%',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: Myfonts('Medium'),
                fontSize: responsiveFontSize(1.5),
                color: 'black'
              }}
            >
              نام غذا
            </Text>
            <Text
              style={{
                width: '20%',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: Myfonts('Medium'),
                fontSize: responsiveFontSize(1.5),
                color: 'black'
              }}
            >
              قیمت
            </Text>
          </View>
          <FlatList
            style={{
              flex: 1,
              alignSelf: 'stretch',
              margin: responsiveWidth(0.2)
            }}
            data={this.global.Buy}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              {
                this.state.prices.push(Number(item.Price));
              }
              return (
                <View
                  style={{
                    flex: 1,
                    height: responsiveHeight(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    backgroundColor: index % 2 ? 'white' : '#e0e0d1',
                    flexDirection: 'row',
                    marginBottom: responsiveHeight(1)
                  }}
                >
                  <Text
                    style={{
                      width: '20%',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontFamily: Myfonts('Medium'),
                      fontSize: responsiveFontSize(1.5),
                      color: 'black'
                    }}
                  >
                    {item.Price}
                  </Text>
                  <Text
                    style={{
                      width: '20%',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontFamily: Myfonts('Medium'),
                      fontSize: responsiveFontSize(1.5),
                      color: 'black'
                    }}
                  >
                    {item.FoodName}
                  </Text>
                  <Image
                    source={
                      item.ImageAddress || require('../img/flatlistcard/02.jpg')
                    }
                    style={{
                      width: '20%',
                      height: '100%',
                      borderRadius: responsiveHeight(0.2)
                    }}
                  />
                  <Text
                    style={{
                      width: '20%',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontFamily: Myfonts('Medium'),
                      fontSize: responsiveFontSize(1.5),
                      color: 'black'
                    }}
                  >
                    {index + 1}
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: responsiveWidth(8),
                      height: responsiveWidth(8),
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      Alert.alert(
                        'حذف',
                        'آیا از حذف این آیتم اطمینان دارید؟',
                        [
                          {
                            text: 'بله ، منصرف شدم',
                            onPress: () => {
                              let newBuy = [...this.global.Buy];
                              let s = newBuy.findIndex(
                                x => x.FoodName == item.FoodName
                              );
                              newBuy.splice(s, 1);
                              this.setGlobal({
                                Buy: newBuy
                              });
                              item.selected = item.selected - 1;
                              this.setGlobal({ data: this.global.data });
                            }
                          },
                          {
                            text: 'نه ، میخرمش',
                            onPress: () => {}
                          }
                        ],
                        {
                          cancelable: true
                        }
                      );
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontFamily: Myfonts('Medium'),
                        fontSize: responsiveFontSize(3),
                        color: 'red'
                      }}
                    >
                      {'×'}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, index) => String(index)}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            flexDirection: 'column',
            borderTopWidth: responsiveWidth(1),
            borderTopColor: 'white'
          }}
        >
          <View
            style={{
              flex: 1.5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'column',
              backgroundColor: 'pink'
            }}
          >
            <Text
              style={{
                fontFamily: Myfonts('Medium'),
                fontSize: responsiveFontSize(1.5),
                color: 'black'
              }}
            >
              {`مجموع غذاهای خریداری شده برابر است با :`}
            </Text>
            <Text
              style={{
                fontFamily: Myfonts('Medium'),
                fontSize: responsiveFontSize(1.5),
                color: 'black'
              }}
            >
              {`${this.state.prices.reduce(getSum, 0)}`}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: '#ff1a75'
            }}
            onPress={() => alert('navigate to bank web page \n with linking')}
          >
            <Text
              style={{
                fontFamily: Myfonts('Bold'),
                fontSize: responsiveFontSize(2.2),
                color: 'black'
              }}
            >
              تکمیل خرید
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { BuyPage };
