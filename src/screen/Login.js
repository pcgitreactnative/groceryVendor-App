import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../Components/CustomButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../utils/Colors';
export default function Login({navigation}) {
  const [MobileNumber, setMobileNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView style={{height: '100%'}}>
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <View style={{height: 100, width: '100%'}}>
          <View style={styles.InputBox}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
              +91
            </Text>
            <View
              style={{
                height: '100%',
                borderRightWidth: 1,
                left: '10%',
                borderRightColor: Colors.LIGHT_Gray,
              }}></View>

            <TextInput
              placeholder="Mobile Number"
              keyboardType="number-pad"
              maxLength={10}
              placeholderTextColor={Colors.LIGHT_Gray}
              left={10}
              value={MobileNumber}
              onChangeText={text => {
                setMobileNumber(text);
              }}
            />
          </View>
        </View>

        <CustomButton
          title={'Login / Sign Up'}
          bgColor={Colors.DARK_GREEN}
          width={wp('80%')}
          height={hp('7%')}
          color={Colors.WHITE}
          onPress={() => navigation.navigate('Otp')}
          //disabled={isSelected ? false : true}
        />
      </View>

      <View style={{alignItems: 'center', margin: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>By Proceeding you agree to </Text>
          <Text style={{color: 'blue'}}>Term & Conditions</Text>
        </View>

        <Text style={{color: 'blue'}}>Privacy Policy </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  InputBox: {
    borderWidth: 1,
    borderColor: Colors.LIGHT_Gray,
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    margin: 19,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: hp('4%'),
  },
});
