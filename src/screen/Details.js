import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import Colors from '../utils/Colors';

import ImagePicker from 'react-native-image-crop-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
//import CustomButton from '../components/CustomButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const {height, width} = Dimensions.get('window');

function Details(props) {
  const data = [
    {
      productname: 'Bread',
      NoOfitem: '2',
      ProductImage: 'Image',
      ProductId: '1234455',
      Price: '34',
    },
    {
      productname: 'Buttor',
      NoOfitem: '3',
      ProductImage: 'Image',
      ProductId: '1234455',
      Price: '34',
    },
    {
      productname: 'Jam',
      NoOfitem: '1',
      ProductImage: 'Image',
      ProductId: '1234455',
      Price: '34',
    },
    {
      productname: 'Milk',
      NoOfitem: '5',
      ProductImage: 'Image',
      ProductId: '1234455',
      Price: '34',
    },
  ];

  // let splitNumberToArray = preData?.phone?.split("", 2);

  let header1 = 'Enter OTP';
  // let f_number = parseFloat(splitNumberToArray?.toString().replace(/,/g, ""));
  // let header2 = `We've sent a 6-digit verification code to your \nmobile number +91 ${f_number}********`;
  const [state, setState] = useState({
    otp: '',
    isLoading: false,
  });

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [colorChng, setcolorChng] = useState(false);
  const [colorChng2, setcolorChng2] = useState(false);

  const [imageUrlPath, setImageUrlPath] = useState(null);

  async function SendOtpVerify() {
    console.log('Press');
    //
    setModalVisible2(true);
  }

  async function VerificationOtp() {
    if (state.otp == null) {
      console.log('otp null');
    } else {
      console.log('OTP iisss', state.otp);
      setModalVisible2(!modalVisible2);
      setcolorChng(true);
    }
  }

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

  async function SubmitSelf() {
    if (imageUrlPath == null) {
      console.log('path is nulll');
    } else {
      setModalVisible(!modalVisible);
      setcolorChng2(true);
    }
  }
  return (
    <SafeAreaView
      style={{backgroundColor: Colors.LIGHT_Gray, height: hp('100%')}}>
      <Header
        title="View Details "
        bgColor={Colors.DARK_PURPLE}
        color="white"
        onPress={() => props.navigation.goBack()}
      />
      <StatusBar backgroundColor={Colors.DARK_PURPLE} barStyle={Colors.WHITE} />

      {/* ...........................Time Of Order............................... */}

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            margin: 15,
            borderRadius: 10,
            height: 30,
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Text>12:00 PM - 03:00 PM</Text>
          <Text> 03 May 23</Text>
        </View>

        <View
          style={{
            height: hp('18%'),
            backgroundColor: 'white',
            marginHorizontal: 15,
            borderRadius: 10,
            padding: 15,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.LIGHT_GREEN,
            }}>
            PRIYA SINGH
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={{marginTop: 10}}>
              <Text>334-C, Pralrati Apartments,</Text>
              <Text>Sector-43, Noida-201307</Text>

              <Text>1234567890</Text>
            </View>

            <Image
              source={require('../assets/Image/girl.png')}
              style={{height: 70, width: 70, borderRadius: 13}}
            />
          </View>
        </View>

        <View
          style={{
            height: hp('42%'),
            backgroundColor: 'white',
            marginTop: 15,
            marginHorizontal: 15,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: '10%',
              // padding: 12,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.8,
              marginHorizontal: 15,
            }}>
            <Text style={styles.TextDetails}>Product Name</Text>
            <Text style={styles.TextDetails}>No. of Item</Text>
            <Text style={styles.TextDetails}>Product Image</Text>
            <Text style={styles.TextDetails}>Product ID </Text>
            <Text style={styles.TextDetails}>Price</Text>
          </View>

          {data.map(item => (
            <View
              style={{
                height: 50,
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={styles.ItemText}>{item.productname}</Text>
              <Text style={styles.ItemText}>{item.NoOfitem}</Text>
              <Image
                source={require('../assets/Image/girl.png')}
                style={{height: 30, width: 30, alignSelf: 'center'}}
              />
              <Text style={styles.ItemText}>{item.ProductId}</Text>
              <Text style={styles.ItemText}>{item.Price}</Text>
            </View>
          ))}

          <View style={{borderBottomWidth: 1}} />

          <View style={{margin: 10, borderBottomWidth: 1}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'black', fontSize: 15}}>Item Total</Text>
              <Text>Rs162</Text>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 10}}> Handling Charges</Text>
                <Text style={{fontSize: 10, color: Colors.LIGHT_GREEN}}>
                  (Rs10 Saved)
                </Text>
              </View>

              <Text style={{fontSize: 10, color: Colors.LIGHT_GREEN}}>
                RS 5{' '}
              </Text>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 10}}>Delivery Fee</Text>
                <Text style={{fontSize: 10, color: Colors.LIGHT_GREEN}}>
                  (Rs 35 Saved)
                </Text>
              </View>

              <Text style={{fontSize: 10, color: Colors.LIGHT_GREEN}}>
                Rs 0
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 12, color: 'black'}}>
              Total Amount Payable
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>Rs. 162</Text>
          </View>
        </View>

        <View
          style={{
            height: hp('10%'),
            marginHorizontal: 15,
            borderRadius: 10,
            padding: 15,
            backgroundColor: 'white',
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
              Amount Paid By
            </Text>
            <Text style={{color: 'black'}}>UPI</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Status</Text>
            <Text style={{color: Colors.LIGHT_GREEN, fontWeight: 'bold'}}>
              Active
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 15,
            marginTop: 15,
          }}>
          {colorChng == false ? (
            <TouchableOpacity
              onPress={SendOtpVerify}
              style={{
                height: hp('6%'),
                width: wp('40%'),
                backgroundColor: colorChng
                  ? Colors.LIGHT_ORANGE
                  : Colors.LIGHT_GREEN,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginRight: 20,
              }}>
              <Text style={{color: 'white'}}>Send OTP</Text>
            </TouchableOpacity>
          ) : null}

          {colorChng2 == false ? (
            <TouchableOpacity
              onPress={VerifySelfi}
              style={{
                height: hp('6%'),
                width: wp('40%'),
                backgroundColor: colorChng2
                  ? Colors.LIGHT_ORANGE
                  : Colors.LIGHT_GREEN,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', textAlign: 'center', padding: 2}}>
                Verify YourSelf Through Selfie
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible2(!modalVisible2);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <View style={styles.modalView}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Enter Verification Code
              </Text>
              <Text style={{fontSize: 11, marginBottom: 20}}>
                We have you a 6-digit verification code on +918*********
              </Text>
              <OTPInputView
                style={{width: '100%', height: hp('12%')}}
                pinCount={6}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                onCodeFilled={code => {
                  setState({
                    ...state,
                    otp: code,
                  });
                }}
              />
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => VerificationOtp()}>
                  <Text style={styles.textStyle}>Verify OTP</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible2(!modalVisible2)}>
                  <Text style={styles.textStyle}>Denied</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible2(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  height: '10%',
                  width: '20%',
                  alignSelf: 'flex-end',
                  //alignItems:'flex-end'
                  marginBottom: 20,
                }}>
                <Text>X</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  color: 'black',
                }}>
                Click On Selfie Verification
              </Text>

              {imageUrlPath == null ? null : (
                <Image
                  source={{uri: imageUrlPath}}
                  style={{height: 150, width: 150}}
                />
              )}

              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => SubmitSelf()}>
                  <Text style={styles.textStyle}>Submit</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={SelFiapp}>
                  <Text style={styles.textStyle}>Camera</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        {/* {colorChng && colorChng2 && (
            <View style={{alignItems: 'center', marginBottom: 30}}>
              <CustomButton
                title={'Submit'}
                bgColor={Colors.lightGreen}
                width={wp('80%')}
                height={hp('7%')}
                color={Colors.white}
                // onPress={handleSubmit}
                //disabled={isSelected ? false : true}
              />
            </View>
          )} */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  TextDetails: {
    fontSize: 7,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.DARK_PURPLE,
    width: 40,
  },
  ItemText: {
    fontSize: 10,
    alignSelf: 'center',
    //   textAlignVertical:'center',
    //  backgroundColor:'green',
    textAlign: 'center',
    width: 50,
    color: 'black',
  },

  underlineStyleBase: {
    width: width / 9,
    height: 60,
    backgroundColor: Colors.WHITE,
    color: Colors.BLACK,
    fontSize: width / 20,
    fontWeight: '600',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: Colors.LIGHT_YELLOW,
    padding: 35,
    alignItems: 'center',
    borderWidth: 1,

    // shadowColor: COLORS.YELLOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 35,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
});

export default Details;
