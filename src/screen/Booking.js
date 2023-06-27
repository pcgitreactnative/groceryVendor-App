import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  LogBox,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../utils/Colors';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstTime from '../Components/FirstTime';
import SecondTime from '../Components/SecondTime';
import Third from '../Components/Third';
import Header from '../Components/Header';

// import {Tab} from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();

const Booking = props => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#013273" />
      <Header
        bgColor={Colors.DARK_PURPLE}
        color={Colors.WHITE}
        title="Booking"
        onPress={() => props.navigation.goBack()}
      />
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: Colors.DARK_PURPLE,
            tabBarScrollEnabled: true,
            inactiveTintColor: Colors.BLACK,
            style: {
              backgroundColor: '#ebebed',
              height: hp('7%'),
              backgroundColor: '#ebebed',
            },

            labelStyle: {
              textAlign: 'center',
            },
            indicatorStyle: {
              borderBottomColor: Colors.DARK_GREEN,
              borderBottomWidth: 1,
            },
          }}>
          <Tab.Screen
            name="FirstTime"
            component={FirstTime}
            options={{
              tabBarLabel: '7:00AM-10:00AM',
              tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: hp('1.6%'),
              },
            }}
          />

          <Tab.Screen
            name="SecondTime"
            component={SecondTime}
            options={{
              tabBarLabel: '12:00 PM-03:00PM',
              tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: hp('1.6%'),
              },
            }}
          />
          <Tab.Screen
            name="Third"
            component={Third}
            options={{
              tabBarLabel: '7:00AM-10:00AM',
              tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: hp('1.6%'),
              },
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#ebebed',
  },
  appContainer: {
    width: wp('28%'),
    height: hp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('1%'),
    backgroundColor: 'white',
    justifyContent: 'space-around',
    marginLeft: hp('2%'),
    marginTop: hp('1%'),
    borderWidth: 1,
    borderColor: Colors.themeColor2,
    borderRadius: hp('1%'),
  },
  itemCountContainer: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 16,
    backgroundColor: 'red',
    left: 15,
    bottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('1%'),
  },
  itemCountContainer2: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 16,
    backgroundColor: 'red',
    left: 7,
    bottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  imgSlider: {
    width: wp('98%'),
    height: wp('19%'),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Booking;
