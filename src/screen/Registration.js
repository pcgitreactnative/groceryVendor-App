import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerr from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Dropdown} from 'react-native-element-dropdown';
//import { searchByPin } from 'india-pincode-search'

const {height, width} = Dimensions.get('window');

var query = require('india-pincode-search');

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';

function Registration() {
  //DATE OF BIRTH
  const [date, setDate] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);
  const formattedDate = format(date, 'dd/MM/yyyy');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const handlePress = () => {
    setShowPicker(true);
  };

  const [Firstname, setfirstname] = useState('');
  const [Lastname, setLastname] = useState('');

  const [WorkExp, setWorkExp] = useState('');

  const [emailId, setemailId] = useState('');

  // .................................state...................................

  const statedata = [
    {label: 'Andhra Pradesh', value: '1'},
    {label: 'Arunachal Pradesh', value: '2'},
    {label: 'Assam', value: '3'},
    {label: 'Bihar', value: '4'},
    {label: 'Chhattisgarh', value: '5'},
    {label: 'Goa', value: '6'},
    {label: 'Gujarat', value: '7'},
    {label: 'Haryana', value: '8'},
    {label: 'Himachal Pradesh', value: '9'},
    {label: 'Jharkhand', value: '10'},
    {label: 'Karnataka', value: '11'},
    {label: 'Kerala', value: '12'},
    {label: 'Madhya Pradesh', value: '13'},
    {label: 'Maharashtra', value: '14'},
    {label: 'Manipur', value: '15'},
    {label: 'Meghalaya', value: '16'},
    {label: 'Mizoram', value: '17'},
    {label: 'Nagaland', value: '18'},
    {label: 'Odisha', value: '19'},
    {label: 'Punjab', value: '20'},
    {label: 'Rajasthan', value: '21'},
    {label: 'Sikkim', value: '22'},
    {label: 'Tamil Nadu', value: '23'},
    {label: 'Telangana', value: '24'},
    {label: 'Tripura', value: '25'},
    {label: 'Uttar Pradesh', value: '26'},
    {label: 'Uttarakhand', value: '27'},
    {label: 'West Bengal', value: '28'},
  ];

  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  //11111............................................City ........................................................

  const [cityvalue, setCityValue] = useState('');

  //22222............................................City ........................................................

  const [cityvalue2, setCityValue2] = useState('');

  //....................................Pincode..........................

  const [pincode, setpincode] = useState(null);
  const [pincode2, setpincode2] = useState(null);

  const fetchLocationInfo = () => {
    const CollectData = query.search(`${pincode}`);

    if (CollectData[0] == null) {
      ToastAndroid.show('Please Enter Correct Pincode', ToastAndroid.LONG);
    } else {
      setCityValue(CollectData[0].city);
      console.log('data', CollectData);
    }
  };

  const fetchLocationInfo2 = () => {
    const CollectData = query.search(`${pincode2}`);

    if (CollectData[0] == null) {
      ToastAndroid.show('Please Enter Correct Pincode', ToastAndroid.LONG);
    } else {
      setCityValue2(CollectData[0].city);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.darkpurple} barStyle={Colors.white} />
      <Header
        title="Registration"
        bgColor={Colors.DARK_PURPLE}
        color="white"
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'black', marginTop: 30}}>
            Fill the details to complete your Profile
          </Text>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={Styles.docTitle}>
              <Text
                style={{
                  backgroundColor: 'green',
                  width: 50,
                  textAlign: 'center',
                  borderRadius: 50,
                  height: 50,
                  padding: 12,
                  color: 'white',
                  borderWidth: 1,
                  fontSize: 18,
                }}>
                1
              </Text>
              <Text>Personal Details</Text>
            </View>

            <View style={Styles.docTitle}>
              <Text
                style={{
                  backgroundColor: 'white',
                  width: 50,
                  textAlign: 'center',
                  borderRadius: 50,
                  height: 50,
                  padding: 12,
                  color: 'black',
                  borderWidth: 1,
                  fontSize: 18,
                }}>
                2
              </Text>
              <Text>Upload Documents</Text>
            </View>

            <View style={Styles.docTitle}>
              <Text
                style={{
                  backgroundColor: 'white',
                  width: 50,
                  textAlign: 'center',
                  borderRadius: 50,
                  height: 50,
                  padding: 12,
                  color: 'black',
                  borderWidth: 1,
                  fontSize: 18,
                }}>
                3
              </Text>
              <Text>Bank Details</Text>
            </View>
          </View>
        </View>

        {/* ..................First Name and Last Name.................... */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <Text style={{color: Colors.BLACK, fontWeight: 'bold'}}>
            First Name
          </Text>
          <Text
            style={{
              color: Colors.black,
              right: width / 4.7,
              fontWeight: 'bold',
            }}>
            Last Name
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 5,
          }}>
          <TextInput
            placeholder="First name"
            value={Firstname}
            // isValid={false}
            // errors={false}
            onChangeText={text => {
              setfirstname(text);
            }}
            // onChangeText={text => {
            //   _validateMobileNumber(text);
            // }}
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              borderRadius: 4,
              width: '45%',
              height: '90%',
              color: Colors.BLACK,
            }}
          />
          <TextInput
            placeholder="Last name"
            value={Lastname}
            onChangeText={text => {
              setLastname(text);
            }}
            placeholderTextColor={Colors.DARK_GRAY}
            style={{
              borderWidth: 1,
              borderColor: Colors.LIGHT_Gray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.WHITE,
              width: '45%',
              height: '90%',
              color: Colors.BLACK,
            }}
          />
        </View>

        {/* .....................Date of Birth............................. */}

        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Text style={{color: Colors.BLACK, fontWeight: 'bold'}}>
            Date of Birth
          </Text>
          <View
            style={{
              height: 45,
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              marginTop: 0,
              backgroundColor: Colors.white,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginHorizontal: 15,
                alignItems: 'center',
                top: 8,
              }}>
              <Text style={{color: Colors.black}}>{formattedDate}</Text>
              <TouchableOpacity onPress={handlePress}>
                <FontAwesome5Icon
                  name="calendar-alt"
                  color="#a9a9a9"
                  size={28}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          {showPicker && (
            <DateTimePickerr
              value={date}
              mode="date"
              dateFormat="DD-MM-YYYY"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        {/* .........................Work Experiences................................. */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>
            Work Experience
          </Text>
          <TextInput
            placeholder="Plese enter work experience"
            value={WorkExp}
            onChangeText={text => {
              setWorkExp(text);
            }}
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              marginTop: 7,
              color: Colors.black,
            }}
          />
        </View>

        {/* ...................................Email Id........................... */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>
            E-mail ID
          </Text>
          <TextInput
            placeholder="Plese enter Email Id"
            value={emailId}
            onChangeText={text => {
              setemailId(text);
            }}
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              marginTop: 7,
              color: Colors.black,
            }}
          />
        </View>

        {/* ..........................................Mobile number.......................... */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>
            Mobile Number
          </Text>
          <TextInput
            placeholder="Plese enter mobile number"
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              marginTop: 7,
              color: Colors.black,
            }}
          />
        </View>

        {/* ..........................................Mobile Alternate number.......................... */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>
            Alternate Mobile Number
          </Text>
          <TextInput
            // placeholder="Plese enter mobile number"

            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              marginTop: 7,
              color: Colors.black,
            }}
          />
        </View>

        {/* ..........................................Emergency number.......................... */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>
            Emergency Mobile Number
          </Text>
          <TextInput
            // placeholder="Plese enter mobile number"

            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              marginTop: 7,
              color: Colors.black,
            }}
          />
        </View>

        {/* ..........................................Parmanent Address.......................... */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>
            Permanent Address
          </Text>
          <TextInput
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              marginTop: 7,
              color: Colors.black,
            }}
          />
        </View>

        {/* ..........................................State......................................... */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>State</Text>

          <Dropdown
            style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={Styles.placeholderStyle}
            selectedTextStyle={Styles.selectedTextStyle}
            inputSearchStyle={Styles.inputSearchStyle}
            iconStyle={Styles.iconStyle}
            data={statedata}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={Styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        {/* ..................Permanent address City Name and Pincode.................... */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>City</Text>
          <Text
            style={{
              color: Colors.black,
              right: width / 4.7,
              fontWeight: 'bold',
            }}>
            Pincode
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 5,
          }}>
          <TextInput
            placeholder="City"
            //value={firstname}
            // isValid={false}
            // errors={false}
            onChangeText={text => {
              setCityValue(text);
            }}
            value={cityvalue}
            // onChangeText={text => {
            //   _validateMobileNumber(text);
            // }}
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              borderRadius: 4,
              width: '45%',
              height: '90%',
              color: Colors.black,
            }}
          />

          <TextInput
            placeholder="Pin Code"
            value={pincode}
            onChangeText={text => {
              setpincode(text);
            }}
            maxLength={6}
            onBlur={fetchLocationInfo}
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              width: '45%',
              height: '90%',
              color: Colors.black,
            }}
          />
        </View>

        {/* ..........................................Current Address.......................... */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>
            Current Address
          </Text>
          <TextInput
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              marginTop: 7,
              color: Colors.black,
            }}
          />
        </View>

        {/* ..........................................Current State......................................... */}

        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>State</Text>

          <Dropdown
            style={[Styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={Styles.placeholderStyle}
            selectedTextStyle={Styles.selectedTextStyle}
            inputSearchStyle={Styles.inputSearchStyle}
            iconStyle={Styles.iconStyle}
            data={statedata}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value2}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue2(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={Styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        {/* ..................Current  address City Name and Pincode.................... */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>City</Text>
          <Text
            style={{
              color: Colors.black,
              right: width / 4.7,
              fontWeight: 'bold',
            }}>
            Pincode
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 5,
          }}>
          <TextInput
            placeholder="City"
            //value={firstname}
            // isValid={false}
            // errors={false}
            onChangeText={text => {
              setCityValue2(text);
            }}
            value={cityvalue2}
            // onChangeText={text => {
            //   _validateMobileNumber(text);
            // }}
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              borderRadius: 4,
              width: '45%',
              height: '90%',
              color: Colors.black,
            }}
          />

          <TextInput
            placeholder="Pin Code"
            value={pincode2}
            onChangeText={text => {
              setpincode2(text);
            }}
            maxLength={6}
            onBlur={fetchLocationInfo2}
            placeholderTextColor={Colors.darkGray}
            style={{
              borderWidth: 1,
              borderColor: Colors.lightGray,
              borderRadius: 4,
              paddingHorizontal: 15,
              backgroundColor: Colors.white,
              width: '45%',
              height: '90%',
              color: Colors.black,
            }}
          />
        </View>

        <View style={{alignItems: 'center', marginBottom: 30}}>
          <CustomButton
            title={'Login / Sign Up'}
            bgColor={Colors.lightGreen}
            width={wp('80%')}
            height={hp('7%')}
            color={Colors.white}
            // onPress={handleSubmit}
            //disabled={isSelected ? false : true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  docTitle: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Registration;
