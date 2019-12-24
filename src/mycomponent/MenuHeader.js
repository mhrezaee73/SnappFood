import React, { Component } from 'reactn';
import { View, Text, Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class MenuHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: '100%', height: responsiveHeight(25) }}>
        <Image
          style={{ width: '100%', height: responsiveHeight(25) }}
          source={
            this.global.imageMenuHeader.length > 0
              ? { uri: `${this.global.imageMenuHeader}` }
              : {
                  uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/02-1.jpg'
                }
          }
        />
      </View>
    );
  }
}

export { MenuHeader };
