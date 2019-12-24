import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';

class MyModal extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <Animatable.View
        style={{ flex: 1 }}
        animation="zoomInDown"
        duration={500}
      >
        <Button
          title="Show modal"
          onPress={() => {
            this.setState({ isModalVisible: true });
          }}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          swipeDirection={'up'}
          animationIn="zoomInDown"
          animationOut="zoomOutDown"
          animationInTiming={1500}
          animationOutTiming={1500}
          coverScreen={true}
          backgroundColor="red"
          onBackButtonPress={() => {
            this.setState({ isModalVisible: false });
          }}
          onSwipeComplete={() => {
            this.setState({ isModalVisible: false });
          }}
        >
          <View style={{ width: 250, height: 300, backgroundColor: 'pink' }}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </Animatable.View>
    );
  }
}

export { MyModal };
