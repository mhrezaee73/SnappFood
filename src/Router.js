import React from 'reactn';
import { createStackNavigator, createTabNavigator } from 'react-navigation';
import { View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Header, MenuHeader } from '../src/mycomponent';
import {
  initialPage,
  login,
  MyModal,
  OrderPage,
  Mylocation,
  LetterPage,
  Chat,
  Package,
  FlistCardMore,
  Menu,
  Comments,
  BuyPage,
  NearRestaurant,
  SearchPage,
  Profile,
  CatPage
} from './screens';

const RootStack = createStackNavigator(
  {
    _initialPage: initialPage,
    'ورود با شماره موبایل': login,
    _MyModal: MyModal,
    _OrderPage: OrderPage,
    _FlistCardMore: FlistCardMore,
    _Mylocation: Mylocation,
    _LetterPage: LetterPage,
    _Package: Package,
    _Chat: Chat,
    _Menu: Menu,
    _Comments: Comments,
    _BuyPage: BuyPage,
    _NearRestaurant: NearRestaurant,
    _SearchPage: SearchPage,
    _Profile: Profile,
    _CatPage: CatPage,
    _Restaurant: createTabNavigator(
      {
        نظرات: {
          screen: Comments
        },
        منو: {
          screen: Menu
        }
      },
      {
        tabBarPosition: 'top',
        tabBarOptions: {
          showIcon: false,
          showLabel: true,
          style: {
            backgroundColor: 'white'
          },
          labelStyle: {
            color: 'black',
            fontFamily: 'Vazir-Black-FD'
          },
          indicatorStyle: {
            backgroundColor: 'white',
            height: 0
          }
        },
        initialRouteName: 'منو',
        lazy: false,
        swipeEnabled: true,
        animationEnabled: true
      }
    )
  },
  {
    initialRouteName: '_initialPage',
    navigationOptions: ({ navigation }) => ({
      header: () => {
        if (navigation.state.routeName !== '_Restaurant') {
          return (
            <Header
              navigation={navigation}
              title={
                navigation.state.routeName == '_OrderPage'
                  ? 'heloo'
                  : navigation.state.routeName == '_FlistCardMore'
                  ? 'فروشگاه های این دسته'
                  : navigation.state.routeName == '_LetterPage'
                  ? 'پیام های شما'
                  : navigation.state.routeName == '_NearRestaurant'
                  ? 'فروشگاه های اطراف شما'
                  : navigation.state.routeName == '_Package'
                  ? 'بسته های خدماتی'
                  : navigation.state.routeName == '_SearchPage'
                  ? 'جستجو'
                  : navigation.state.routeName == '_Chat'
                  ? 'چت با پشتیبانی'
                  : navigation.state.routeName == '_Profile'
                  ? 'مشخصات شما'
                  : navigation.state.routeName == '_CatPage'
                  ? 'فروشگاه ها بر اساس دسته بندی'
                  : navigation.state.routeName == '_BuyPage'
                  ? 'سبد خرید'
                  : navigation.state.routeName
              }
            />
          );
        } else {
          return (
            <View
              style={{
                width: '100%',
                height: responsiveHeight(33)
              }}
            >
              <Header
                navigation={navigation}
                title={
                  navigation.state.routeName == '_Restaurant'
                    ? 'چی بخوریم؟!'
                    : navigation.state.routeName
                }
              />
              <MenuHeader />
            </View>
          );
        }
      }
    })
  }
);

export default RootStack;
