import React, { Component } from 'reactn';
import { View, Text } from 'react-native';
import { FlatlistCardVertical, Footer } from '../mycomponent';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class FlistCardMore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var ddd = this.props.navigation.getParam('CatName');
    var ccc = this.props.navigation.getParam('data');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.global.dark ? 'white' : 'black',
          flexDirection: 'column'
        }}
      >
        <FlatlistCardVertical
          dark={this.global.dark}
          TopSpace={responsiveHeight(1)}
          Category={ddd}
          data={ccc}
          navigation={this.props.navigation}
        />
        {this.global.Buy.length ? (
          <Footer navigation={this.props.navigation} />
        ) : null}
      </View>
    );
  }
}

export { FlistCardMore };
