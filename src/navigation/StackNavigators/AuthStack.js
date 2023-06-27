import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Otp from '../../screen/Otp';
import Registration from '../../screen/Registration';
import Apply from '../../screen/Apply';
import Login from '../../screen/Login';
import Booking from '../../screen/Booking';
import About from '../../screen/About';
import Privacy from '../../screen/Privacy';
import TermsConditions from '../../screen/TermsConditions';
import Profile from '../../screen/Profile';
import Details from '../../screen/Details';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Apply"
        component={Apply}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsConditions"
        component={TermsConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
