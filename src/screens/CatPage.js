import React, { Component } from 'reactn';
import { View, Text, TextInput } from 'react-native';
import { FlatlistCardVertical } from '../mycomponent';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class CatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    var data = this.props.navigation.getParam('data');
    var catname = this.props.navigation.getParam('catname');

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
            flexDirection: 'column'
            // backgroundColor: 'red'
          }}
        >
          <FlatlistCardVertical
            dark={this.global.dark}
            TopSpace={responsiveHeight(1)}
            Category={` فروشگاه های دسته ${catname}`}
            data={data}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}

export { CatPage };
