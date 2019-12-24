import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      chats: []
    };

    this.initiate();
  }

  initiate() {
    this.ws = new WebSocket('ws://demos.kaazing.com/echo');

    this.ws.onopen = () => {
      console.warn('opened!');
    };

    this.ws.onmessage = e => {
      let newChats = [...this.state.chats];
      newChats.push({
        message: `Support:\n${e.data}`,
        isServer: true
      });
      this.setState({ chats: newChats });
    };

    this.ws.onerror = e => {
      // an error occurred
      console.warn(e.message);
    };

    this.ws.onclose = e => {
      // connection closed
      console.warn(e.code, e.reason);
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F8F8FF'
        }}
      >
        <FlatList
          ref={chatList => {
            this.chatList = chatList;
          }}
          style={{
            flex: 1,
            alignSelf: 'stretch',
            borderWidth: 1,
            margin: 10,
            borderRadius: 10
          }}
          data={this.state.chats}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: 80,
                width: 250,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: item.isServer ? 'flex-end' : 'flex-start',
                marginBottom: 10,
                marginTop: index === 0 ? 10 : 0,
                marginHorizontal: 10,
                backgroundColor: item.isServer ? '#810' : '#489',
                borderRadius: 10,
                elevation: 2
              }}
            >
              <Text
                style={{
                  color: item.isServer ? 'white' : 'black',
                  fontSize: 26
                }}
              >
                {item.message}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => item + index}
          onContentSizeChange={() => this.chatList.scrollToEnd()}
        />

        <TextInput
          style={{
            height: 80,
            alignSelf: 'stretch',
            marginBottom: 50,
            marginHorizontal: 10,
            borderWidth: 1,
            borderRadius: 10,
            fontSize: 26,
            color: 'black'
          }}
          value={this.state.message}
          onChangeText={message => this.setState({ message })}
        />

        <TouchableOpacity
          style={{
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            marginBottom: 10,
            marginHorizontal: 10,
            backgroundColor: '#5ae',
            borderRadius: 10,
            opacity: this.state.message == '' ? 0.5 : 1
          }}
          disabled={this.state.message == ''}
          onPress={() => {
            let newChats = [...this.state.chats];
            newChats.push({
              message: `User:\n${this.state.message}`,
              isServer: false
            });

            this.setState({ chats: newChats, message: '' }, () =>
              setTimeout(
                () => this.ws.send(this.state.message),
                Math.random() * 1000
              )
            );
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: 'white'
            }}
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { Chat };
