import React, { Component } from 'reactn';
import { View, Text } from 'react-native';
import { FlatlistCardVertical, Footer } from '../mycomponent';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Axios from 'axios';

class NearRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: []
    };
  }

  render() {
    var data = this.props.navigation.getParam('data');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.global.dark ? 'white' : 'black',
          flexDirection: 'column'
        }}
      >
        <FlatlistCardVertical
          location={true}
          dark={this.global.dark}
          TopSpace={responsiveHeight(1)}
          Category={'اطراف شما'}
          data={data}
          navigation={this.props.navigation}
        />
        {this.global.Buy.length ? (
          <Footer navigation={this.props.navigation} />
        ) : null}
      </View>
    );
  }
}

export { NearRestaurant };
