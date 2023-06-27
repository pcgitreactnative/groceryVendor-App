import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../utils/Colors';
import ImagePicker from 'react-native-image-crop-picker';

export default function Profile() {
  const [imageUrlPath, setImageUrlPath] = useState(null);

  async function VerifySelfi() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log('Image Data......', image);
        setImageUrlPath(image.path);
        setcolorChng2(true);
      })
      .catch(err => {
        console.log('Camera error--->', err);
      });
  }

  async function SelFiapp() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log('Image Data......', image);
        setImageUrlPath(image.path);
      })
      .catch(err => {
        console.log('Camera error--->', err);
      });
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.PROIFLE_BGCOLOR}}>
      <StatusBar backgroundColor="#67039B" />
      <ImageBackground
        source={require('../assets/Image/Background.png')}
        style={{width: wp('100%'), height: hp('30%')}}>
        <View
          style={{
            width: wp('100%'),
            height: hp('22%'),
            //backgroundColor: 'pink',
            marginTop: hp('5%'),
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: wp('15%'),
              height: hp('22%'),
              //backgroundColor: 'teal',
            }}></View>
          <View
            style={{
              width: wp('70%'),
              height: hp('22%'),
              //backgroundColor: 'green',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: wp('30%'),
                height: wp('30'),
                borderRadius: wp('30%'),
                backgroundColor: Colors.DARK_GREEN,
                alignSelf: 'center',
                marginTop: hp('3.5%'),
              }}></TouchableOpacity>
            <TouchableOpacity
              onPress={() => onSelectImage()}
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                //backgroundColor: 'purple',
                alignSelf: 'center',
                paddingHorizontal: wp('10%'),
              }}>
              <AntDesign color={'#fff'} name="edit" size={25} />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: hp('2.5%'),
                  fontWeight: 'bold',
                  color: Colors.WHITE,
                }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: wp('15%'),
              height: hp('22%'),
              //backgroundColor: 'teal',
              alignItems: 'center',
              paddingTop: hp('1%'),
            }}>
            <Ionicons color={'#fff'} name="settings-sharp" size={25} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View
        style={{
          width: wp('90%'),
          height: hp('45%'),
          //backgroundColor: Colors.WHITE,
          // elevation: 1,
          alignSelf: 'center',
          marginTop: hp('2%'),
          paddingVertical: hp('2.5%'),
          borderRadius: 5,
        }}>
        <View
          style={{
            width: wp('90%'),
            height: hp('8%'),
            //backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.PROFILE_TEXT,
            }}>
            Name
          </Text>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.BLACK,
            }}>
            Rishabh
          </Text>
        </View>
        <View
          style={{
            width: wp('90%'),
            height: hp('8%'),
            //backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.PROFILE_TEXT,
            }}>
            Date Of Birth
          </Text>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.BLACK,
            }}>
            11/02/1998
          </Text>
        </View>
        <View
          style={{
            width: wp('90%'),
            height: hp('8%'),
            //backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.PROFILE_TEXT,
            }}>
            Email-ID
          </Text>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.BLACK,
            }}>
            anup123@gmailcom
          </Text>
        </View>
        <View
          style={{
            width: wp('90%'),
            height: hp('8%'),
            //backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.PROFILE_TEXT,
            }}>
            Mobile Number
          </Text>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.BLACK,
            }}>
            9087654321
          </Text>
        </View>
        <View
          style={{
            width: wp('90%'),
            height: hp('8%'),
            //backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.PROFILE_TEXT,
            }}>
            City
          </Text>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '400',
              fontSize: hp('2.5%'),
              color: Colors.BLACK,
            }}>
            Noida
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
