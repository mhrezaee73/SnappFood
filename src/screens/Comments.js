import React, { Component } from 'reactn';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Footer } from '../mycomponent';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [
        {
          text: ' سلام خیلی خوب بود'
        },
        {
          text: ' نظر لطف شماست'
        },
        {
          text: ' این چه وضعشه'
        },
        {
          text: 'همینی که هست'
        }
      ],
      message: '',
      user: true,
      isloading: true
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          alignSelf: 'stretch',
          padding: 10,
          backgroundColor: this.global.dark ? 'white' : 'black'
        }}
      >
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            alignSelf: 'stretch',
            marginBottom: this.global.Buy.length ? responsiveHeight(9) : 0
          }}
        >
          <FlatList
            ref={flatlist => {
              this.flatlist = flatlist;
            }}
            style={{
              flex: 1,
              alignSelf: 'stretch',
              margin: 10,
              padding: 2
            }}
            data={this.state.chat}
            numColumns={1}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    minWidth: 120,
                    //width: 50 + item.text.length * 10,
                    //  height: 58,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: index % 2 == 0 ? 'flex-end' : 'flex-start',
                    margin: 5,
                    backgroundColor: index % 2 == 0 ? '#bbbbaa' : '#a1a1a1',
                    borderTopLeftRadius: index % 2 == 0 ? 25 : 0,
                    borderTopRightRadius: index % 2 == 0 ? 0 : 25,
                    borderBottomRightRadius: index % 2 == 0 ? 25 : 0,
                    borderBottomLeftRadius: index % 2 == 0 ? 0 : 25,
                    borderWidth: 2,
                    padding: responsiveWidth(2),
                    borderColor: this.global.dark ? 'black' : 'white'
                  }}
                >
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.3),
                      fontFamily: 'Vazir-Medium-FD',
                      color: this.global.dark ? 'black' : 'white'
                    }}
                  >
                    {item.text}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => String(index)}
          />
        </View>
        {this.global.Buy.length ? (
          <Footer navigation={this.props.navigation} />
        ) : null}
      </View>
    );
  }
}

export { Comments };
