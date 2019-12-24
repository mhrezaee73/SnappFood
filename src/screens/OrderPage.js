import React, { Component } from 'reactn';
import { View, ScrollView, Linking, StatusBar, FlatList } from 'react-native';
import {
  CatCard,
  FlatlistCard,
  OrderPageHeader,
  OrderPageButton,
  OrderPageMoadlMenu,
  Footer,
  Spinner
} from '../mycomponent';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';
import Axios from 'axios';

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      data8: [],
      alldata: []
    };
    this.setGlobal({ ModalVisible: false });
    let zaman = new Date();
    let hour = zaman.getHours();
    let min = zaman.getMinutes();
    let sec = zaman.getSeconds();
    this.setGlobal({ dark: [min % 2] == 0 ? true : false });
  }

  static navigationOptions = ({ navigation }) => ({
    header: () => <OrderPageHeader navigation={navigation} />
  });

  componentDidMount() {
    const datalink =
      'http://mhoseinr.ir/wp-content/uploads/2019/12/orderPage.json_.txt';
    Axios.get(datalink)
      .then(response => {
        this.setState({ data8: response.data });
        // alert(this.state.data8.length);
        setTimeout(() => {
          this.setState({ isloading: false });
        }, 5000);
      })
      .catch(error => {
        this.setState({ isloading: false });
        alert(error);
      });
    ///////////////
    Axios.get('http://mhoseinr.ir/wp-content/uploads/2019/12/alldata.txt')
      .then(response => {
        this.setState({ alldata: response.data });
        this.setState({ isloading: false });
      })
      .catch(error => {
        this.setState({ isloading: false });
        alert(error);
      });
  }

  render() {
    var ddd = this.props.navigation.getParam('SendParam');
    if (this.state.isloading) {
      return <Spinner />;
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            flexDirection: 'column'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              marginBottom: this.global.Buy.length ? responsiveHeight(9) : 0
            }}
          >
            <ScrollView
              style={{ backgroundColor: this.global.dark ? 'white' : 'black' }}
            >
              {/*statusbar */}
              <StatusBar
                backgroundColor="#ff1a75"
                animated
                barStyle={this.global.dark ? 'light-content' : 'dark-content'}
                StatusBarAnimation={'slide'}
              />
              <Modal
                isVisible={this.global.ModalVisible}
                navigation={this.props.navigation}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: responsiveHeight(-0.1),
                  marginHorizontal: responsiveWidth(-0.1),
                  //  backgroundColor: 'red',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0
                }}
                swipeDirection={'up'}
                animationIn="fadeInUp"
                animationOut="fadeOutDown"
                animationInTiming={550}
                animationOutTiming={1000}
                coverScreen={true}
                backdropOpacity={0.4}
                onBackButtonPress={() => {
                  this.setGlobal({ ModalVisible: false });
                }}
              >
                <OrderPageMoadlMenu navigation={this.props.navigation} />
              </Modal>
              {/* button for your location.....*/}
              <OrderPageButton
                dark={this.global.dark}
                navigation={this.props.navigation}
                data={this.state.alldata.filter(x =>
                  x.location.includes('tehran')
                )}
              />
              {/* Category Card View.....*/}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <CatCard
                  PicAddress={{
                    uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/01.jpg'
                  }}
                />
                <CatCard
                  PicAddress={{
                    uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/02.jpg'
                  }}
                />
                <CatCard
                  PicAddress={{
                    uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/03.jpg'
                  }}
                />
                <CatCard
                  PicAddress={{
                    uri: 'http://mhoseinr.ir/wp-content/uploads/2019/12/04.jpg'
                  }}
                />
              </View>
              {/* Flatlist card.....*/}

              <FlatList
                style={{
                  flex: 1,
                  alignSelf: 'stretch'
                  // margin: responsiveWidth(0.2)
                }}
                data={this.state.data8}
                initialNumToRender={1}
                numColumns={1}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <FlatlistCard
                    dark={this.global.dark}
                    TopSpace={responsiveHeight(1)}
                    Category={item.label}
                    value={item.value}
                    navigation={this.props.navigation}
                    data={
                      item.value == 'kopon'
                        ? this.state.alldata.filter(x => x.kopon == 'true')
                        : this.state.alldata.filter(
                            x => x.category == item.value
                          )
                    }
                  />
                )}
                keyExtractor={(item, index) => String(index)}
              />
            </ScrollView>
          </View>

          {this.global.Buy.length ? (
            <Footer navigation={this.props.navigation} />
          ) : null}
        </View>
      );
    }
  }
}

export { OrderPage };
