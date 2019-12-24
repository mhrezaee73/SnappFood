import React, { Component } from 'reactn';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Footer } from '../mycomponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
      selected: false
    };
  }

  render() {
    var ddd = this.props.navigation.getParam('resname');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column'
        }}
      >
        <StatusBar hidden />
        <View
          style={{
            width: '100%',
            height: responsiveHeight(7),
            // flexDirection: 'row-reverse',
            backgroundColor: 'snow',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: responsiveFontSize(2),
              fontFamily: 'Vazir-Medium-FD',
              marginRight: responsiveWidth(2.5),
              color: 'black'
            }}
          >
            {ddd}
          </Text>
        </View>
        <FlatList
          style={{
            flex: 1,
            alignSelf: 'stretch',
            margin: responsiveWidth(0.2),
            marginBottom: this.global.Buy.length ? responsiveHeight(9) : 0
          }}
          data={this.state.data}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: responsiveWidth(96),
                  height: responsiveHeight(15),
                  justifyContent: 'flex-start',
                  borderRadius: responsiveWidth(2),
                  borderWidth: responsiveFontSize(0.2),
                  borderColor: 'black',
                  margin: responsiveWidth(2),
                  flexDirection: 'row-reverse'
                }}
                onPress={() => {
                  item.selected = item.selected + 1;
                  this.setState({ data: this.state.data });
                  this.setGlobal({ footer: true });
                  let newBuy = [...this.global.Buy];
                  newBuy.push(item);
                  this.setGlobal({
                    Buy: newBuy
                  });
                }}
              >
                <View style={{ width: '30%', height: '100%' }}>
                  <Image
                    source={
                      item.ImageAddress || require('../img/flatlistcard/02.jpg')
                    }
                    style={{
                      width: '100%',
                      height: '100%',
                      borderTopRightRadius: responsiveWidth(1.7),
                      borderBottomRightRadius: responsiveWidth(1.8)
                    }}
                  />
                </View>
                <View style={{ width: '70%', flexDirection: 'column' }}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                      marginRight: responsiveWidth(0.75),
                      fontFamily: 'Vazir-Medium-FD',
                      color: 'black'
                    }}
                  >
                    {item.FoodName || 'نام غذا'}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.2),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                      marginRight: responsiveWidth(0.75),
                      marginTop: responsiveHeight(1),
                      fontFamily: 'Vazir-THin-FD',
                      color: 'black'
                    }}
                  >
                    {item.details || 'توضیحات غذا'}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.2),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                      marginRight: responsiveWidth(0.75),
                      marginTop: responsiveHeight(1),
                      fontFamily: 'Vazir-THin-FD',
                      color: 'black'
                    }}
                  >
                    {` قیمت : ${item.Price}` || 'قیمت غذا'}
                  </Text>

                  <TouchableOpacity
                    style={{
                      width: responsiveWidth(6),
                      height: responsiveHeight(3.5),
                      borderRadius: responsiveWidth(5),
                      borderWidth: responsiveWidth(0.2),
                      borderColor: 'black',
                      justifyContent: 'center',
                      // backgroundColor: 'aqua',
                      alignItems: 'center',
                      position: 'absolute',
                      right:
                        item.selected > 0
                          ? responsiveWidth(48)
                          : responsiveWidth(58),
                      bottom: responsiveWidth(0.7)
                    }}
                    onPress={() => {
                      item.selected = item.selected + 1;
                      this.setState({ data: this.state.data });
                      this.setGlobal({ footer: true });
                      let newBuy = [...this.global.Buy];
                      newBuy.push(item);
                      this.setGlobal({
                        Buy: newBuy
                      });
                    }}
                  >
                    <Text style={{ color: 'black' }}>+</Text>
                  </TouchableOpacity>
                  {item.selected > 0 ? (
                    <View
                      style={{
                        width: responsiveWidth(10),
                        height: responsiveHeight(3.5),
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        right: responsiveWidth(55),
                        bottom: responsiveWidth(0.7)
                      }}
                    >
                      <View
                        style={{
                          width: responsiveWidth(4),
                          height: responsiveHeight(2.8),
                          marginLeft: responsiveWidth(1.5),
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          left: responsiveWidth(5.35)
                        }}
                      >
                        <Text
                          style={{
                            color: 'black',
                            textAlign: 'center',
                            fontFamily: 'Vazir-Medium-FD'
                          }}
                        >
                          {item.selected}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          width: responsiveWidth(6),
                          height: responsiveHeight(3.5),
                          borderRadius: responsiveWidth(5),
                          borderWidth: responsiveWidth(0.2),
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          left: responsiveWidth(0.7),
                          borderColor: 'black'
                        }}
                        onPress={() => {
                          let newBuy = [...this.global.Buy];
                          let s = newBuy.findIndex(
                            x => x.FoodName == item.FoodName
                          );
                          newBuy.splice(s, 1);
                          this.setGlobal({
                            Buy: newBuy
                          });
                          item.selected = item.selected - 1;
                          this.setState({ data: this.state.data });

                          // {
                          //   if (this.global.Buy.length == 1) {
                          //     this.setGlobal({ Buy: [] });
                          //   } else {
                          //     let newBuy = [...this.global.Buy];
                          //     newBuy.splice(index, 1);
                          //     this.setGlobal({
                          //       Buy: newBuy
                          //     });
                          //   }
                          //   item.selected = item.selected - 1;
                          //   this.setState({ data: this.state.data });
                          // }
                        }}
                      >
                        <Text
                          style={{
                            color: 'black',
                            fontFamily: 'Vazir-Bold-FD'
                          }}
                        >
                          -
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => String(index)}
        />
        {this.global.Buy.length ? (
          <Footer navigation={this.props.navigation} />
        ) : null}
      </View>
    );
  }
}

export { Menu };
