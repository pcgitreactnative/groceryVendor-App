import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      disabled={props.disabled}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 2,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: hp('2.2%'),
          color: props.color,

          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
