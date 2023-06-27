import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Colors from '../utils/Colors';

import Button1 from '../Components/Button1';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';

// const {height, width} = Dimensions.get('window');

export default function Otp({navigation, route}) {
  const [pin, setPin] = useState('');
  const [counter, setCounter] = React.useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.DARK_GREEN} barStyle={Colors.WHITE} />

      <View
        style={{
          marginVertical: '20%',
          marginHorizontal: '6%',
        }}>
        <Text style={{fontSize: 30, fontWeight: '500', color: Colors.BLACK}}>
          Enter verification code
        </Text>
        <Text style={{top: 10, color: Colors.BLACK}}>
          We have sent you a 6-digit verifications code on +91
          {/* {fNumber}**** */}
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: '-15%',
          //backgroundColor: 'pink',
          width: wp('100%'),
        }}>
        <OTPInputView
          style={{width: '85%', height: 80}}
          pinCount={6}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            setPin(code);
          }}
          // handleChange={code => setPin(code)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '7%',
          marginTop: 10,
        }}>
        {!isButtonDisabled && (
          <Text
            style={{
              color: Colors.BLACK,
              fontSize: hp('2.3%'),
              fontWeight: '500',
            }}>
            Didn't recieved OTP?
          </Text>
        )}
        {counter !== 0 ? (
          <Text style={{color: Colors.BLACK}}>
            Try again in <Text style={{color: '#000'}}> {counter} sec</Text>
          </Text>
        ) : (
          !isButtonDisabled && (
            <TouchableOpacity onPress={handleResend}>
              <Text style={{color: Colors.BLACK}}>Resend Code</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <View style={{alignItems: 'center'}}>
        {isLoading ? (
          <ActivityIndicator
            color="#FFA034"
            size="large"
            style={{alignSelf: 'center', top: 20}}
          />
        ) : (
          <Button1
            title={'Verify Code'}
            bgColor={Colors.DARK_GREEN}
            width={wp('60%')}
            height={hp('7%')}
            color={Colors.WHITE}
            onPress={() => navigation.navigate('Registration')}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  borderStyleHighLighted: {
    borderColor: Colors.DARK_ORANGE,
  },

  underlineStyleBase: {
    height: 50,
    borderWidth: 1.5,
    width: 45,
    borderRadius: 4,
    color: Colors.BLACK,
    fontSize: 17,
    borderColor: Colors.BLACK,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.lightOrange,
  },
  img: {
    height: hp('30%'),
    width: wp('100%'),
    // top: hp('24%'),
  },
});
