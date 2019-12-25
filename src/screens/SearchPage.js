import React, { Component } from 'reactn';
import { View, Text, TextInput } from 'react-native';
import { FlatlistCardVertical } from '../mycomponent';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    var data = this.props.navigation.getParam('data');
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          flexDirection: 'column',
          backgroundColor: this.global.dark ? '#e6e6e6' : 'black'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            flexDirection: 'column',
            backgroundColor: 'white'
          }}
        >
          <TextInput
            autoFocus={true}
            style={{
              width: responsiveWidth(95),
              height: responsiveHeight(7),
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: responsiveFontSize(1.5),
              justifyContent: 'center',
              alignItems: 'center',
              //  marginBottom: responsiveHeight(2),
              backgroundColor: 'white',
              //  position: 'absolute',
              //  top: responsiveHeight(0.1),
              fontFamily: 'Vazir-Medium-FD',
              color: 'black'
            }}
            placeholder="جستجو در نام فروشگاه ها"
            value={this.state.search}
            onChangeText={search => this.setState({ search })}
          />
        </View>

        <View
          style={{
            flex: 9,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            flexDirection: 'column'
            // backgroundColor: 'red'
          }}
        >
          <FlatlistCardVertical
            dark={this.global.dark}
            TopSpace={responsiveHeight(1)}
            Category={'تمامی فروشگاه ها'}
            data={
              this.state.search
                ? data.filter(x => x.ResName.includes(this.state.search))
                : data
            }
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}

export { SearchPage };
