import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';
import Header from '../Components/Header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//const Tab = createMaterialTopTabNavigator();
export default function Third({navigation}) {
  const [refresh, setRfresh] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#29C17E" />

      <ScrollView
        refreshControl={<RefreshControl refreshing={refresh} />}
        contentContainerStyle={{paddingVertical: 10}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: wp('95%'),
            //height: hp('20%'),
            alignSelf: 'center',
            borderRadius: 5,
            flexDirection: 'row',
            paddingVertical: 10,
            elevation: 1,
          }}>
          <View
            style={{
              //backgroundColor: 'gray',
              width: wp('62%'),
              //height: hp('20%'),
              alignSelf: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: hp('2.1%'),
                fontWeight: 'bold',
                color: Colors.DARK_ORANGE,
                marginLeft: 10,
              }}>
              Priya Singh
            </Text>
            <Text
              style={{
                fontSize: hp('2%'),
                //fontWeight: 'bold',
                color: Colors.BLACK,
                marginLeft: 10,
              }}>
              29 | female
            </Text>

            <Text
              style={{
                fontSize: hp('2%'),
                fontWeight: 'bold',
                color: Colors.DARK_ORANGE,
                marginLeft: 10,
              }}>
              Sunfeast ,Dark fantsy,chooco fills
            </Text>
            <Text
              style={{
                fontSize: hp('2%'),
                //fontWeight: 'bold',
                color: Colors.BLACK,
                marginLeft: 10,
              }}>
              Date & Time: 22/8/22,10:00-11:00 AM
            </Text>
          </View>
          <View
            style={{
              //backgroundColor: 'teal',
              width: wp('32%'),
              //height: hp('20%'),
              alignSelf: 'center',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: hp('2%'),
                //fontWeight: 'bold',
                color: Colors.DARK_GREEN,
                paddingRight: 8,
              }}>
              Active
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={{
                backgroundColor: Colors.DARK_GREEN,
                width: wp('30%'),
                // height: hp('5%'),
                alignSelf: 'center',
                alignItems: 'center',

                borderRadius: 4,
                justifyContent: 'center',
                padding: 6,
                marginVertical: 16,
              }}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  //fontWeight: 'bold',
                  color: Colors.WHITE,
                  alignItems: 'center',
                }}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
