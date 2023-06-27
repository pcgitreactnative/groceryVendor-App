import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  Dimensions,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import React, {useRef} from 'react';
// import Header from '../Components/Header';

import {useState, useEffect} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import Colors from '../utils/Colors';
import St_line from '../Components/St_Line';
import CustomBtn from '../Components/CustomBtn';

import Modal from 'react-native-modal';

import ScrollPicker from '../Components/ScrollPicker';
import DatePickerScroll from '../Components/DatePicker';

import ImagePicker from 'react-native-image-crop-picker';
import CoustomBtn4 from '../Components/CustomBtn4';

import FormPopUp from '../Components/FormPopUp';

import {Alert} from 'react-native';

import {
  _validatePAN,
  _validatePhone,
  _validateAadhar,
} from '../utils/Validation';

import {useIsFocused} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const OCCUPATION = ['Salaried', 'Self-employed', 'Student', 'Business'];

export default function Apply({navigation, route}) {
  const preData = route.params;
  // console.log('preData--->>', preData);
  //console.log('hurrrrr', preData);

  const [page, setPage] = useState(0);
  const [stepNumber, setStepNumber] = useState(1);
  const [loanDetails, setLoanDetails] = useState(null);
  // const [verifyDetails, setVerifyDetails] = useState([]);
  const [progressItems, setProgressItems] = useState([1, 2, 3, 4]);
  const [salary, setSalary] = React.useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [isModalVisible4, setModalVisible4] = useState(false);
  const [isModalVisible5, setModalVisible5] = useState(false);
  const [isModalVisible6, setModalVisible6] = useState(false);
  const [bankName, onBankName] = useState('');
  const [ifscCode, onIfscCode] = useState('');
  const [accountHolder, onAccountHolder] = useState('');
  const [bankAccount, onBankAccount] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNumber, onContactNumber] = useState('');
  const [emergency, setEmergency] = useState('');
  const [contactNoTwo, onContactNoTwo] = useState('');
  const [pickerIndex, setPickerIndex] = useState(0);
  const [fullName, setFullName] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [aadharCard, setadharCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [itemPressed, setItemPressed] = useState(null);
  const [responseId, setResponseId] = useState('');
  const [loading, setLoading] = useState(true);
  const [isVerifyModal, setIsVerifyModal] = useState(false);
  const [pagesCompleted, setPagesCompleted] = useState([0]);
  const [formData, setFormData] = useState({
    occupation: '',
    education: '',
    //salary: '',
    loanTenure: '',
    residence: '',
    relationship: '',
    emergencyrealtion: '',
    dateofbirth: '',
    gender: '',
  });
  const [userData, setUserData] = React.useState(null);
  const isFocused = useIsFocused();

  const verifyDetails1 = [
    {
      title: 'Occupation',
      value: formData.occupation,
    },
    {
      title: 'Education',
      value: formData.education,
    },
    {
      title: 'Salary',
      value: salary,
    },
    {
      title: 'LoanTenure',
      value: formData.loanTenure,
    },
    {
      title: 'Type Of Residence',
      value: formData.residence,
    },
  ];

  const verifyDetails2 = [
    {
      title: 'Emergency Contact Name',
      value: contactName,
    },
    {
      title: 'Emergency Contact Number',
      value: contactNumber,
    },
    {
      title: 'Emergency Contact RelationShip',
      value: formData.relationship,
    },
    {
      title: 'Emergency Contact Name',
      value: emergency,
    },
    {
      title: 'Emergency Contact Number',
      value: contactNoTwo,
    },
    {
      title: 'Emergency Contact RelationShip',
      value: formData.emergencyrealtion,
    },
  ];

  const verifyDetails4 = [
    {
      title: 'Bank Account Number',
      value: bankAccount,
    },
    {
      title: 'Account Holder Name',
      value: accountHolder,
    },
    {
      title: 'IFSC Code',
      value: ifscCode,
    },
    {
      title: 'Bank Name',
      value: bankName,
    },
  ];

  const verifyDetails3 = [
    {
      title: 'Upload Pan Card',
      value: '',
      path: panCard?.path,
    },
    {
      title: 'Upload Front Image Of Aadhar Card',
      value: '',
      path: image?.path,
    },
    {
      title: 'Upload back Image Of Aadhar Card',
      value: '',
      path: backImage?.path,
    },
    {
      title: 'Full Name',
      value: fullName,
      // path: ''
    },
    {
      title: 'Pan Number',
      value: panNumber,
    },
    {
      title: 'Aadhar Number',
      value: aadharNumber,
    },
    {
      title: 'Date Of Birth',
      value: formData.dateofbirth,
    },
    {
      title: 'Gender',
      value: formData.gender,
    },
  ];

  //   useEffect(() => {
  //     if (isFocused) {
  //       _getUserDetails();
  //     }
  //   }, [isFocused]);

  const toggleModal = index => {
    setModalVisible(!isModalVisible);
    if (index === 0) {
      setPickerIndex(0);
    } else if (index === 1) {
      setPickerIndex(1);
    } else if (index === 2) {
      setPickerIndex(2);
    } else if (index === 3) {
      setPickerIndex(3);
    } else if (index === 4) {
      setPickerIndex(4);
    } else if (index === 5) {
      setPickerIndex(5);
    } else if (index === 6) {
      setPickerIndex(6);
    } else if (index === 7) {
      setPickerIndex(7);
    }
  };
  // console.log(pickerIndex);

  const toggleModals = () => {
    setModalVisible1(!isModalVisible1);
  };

  const toggleModal2 = () => {
    setModalVisible1(false);
    setModalVisible6(false);
    setModalVisible2(!isModalVisible2);
  };

  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };

  const toggleModal4 = () => {
    setModalVisible4(!isModalVisible4);
    setModalVisible3(false);
  };
  // const toggleModal2 = () => {
  //   setModalVisible1(false);
  //   setModalVisible2(!isModalVisible2);
  // };

  const toggleModal5 = () => {
    setModalVisible5(!isModalVisible5);
    console.log(isModalVisible5);
  };
  const toggleModals6 = () => {
    setModalVisible6(!isModalVisible6);
  };
  // console.log(itemPressed);
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log('IMAGE DATA--->>>', image);
        //const imgData = resp.assets[];   bcz reponse undefined  anywhere
        // console.log(imgData);
        if (itemPressed === 1) {
          setPanCard(image);
        } else if (itemPressed === 2) {
          setImage(image);
        } else if (itemPressed === 3) {
          setBackImage(image);
        }
        setModalVisible2(false);
        setModalVisible4(false);
        setModalVisible6(false);
      })
      .catch(err => {
        setModalVisible2(false);
        setModalVisible4(false);
        setModalVisible6(false);
        setIsVisible(false);
      });
  };

  const openLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log('IMAGE DATA--->>>', image);
        if (itemPressed === 1) {
          setPanCard(image);
        } else if (itemPressed === 2) {
          setImage(image);
        } else if (itemPressed === 3) {
          setBackImage(image);
        }
        setModalVisible2(false);
        setModalVisible4(false);
        setModalVisible6(false);
      })
      .catch(err => {
        setModalVisible2(false);
        setModalVisible6(false);
        //setModalVisible4(false);
        setIsVisible(false);
      });
  };

  const toggleVerifyModal = () => {
    setIsVerifyModal(!isVerifyModal);
  };

  // console.log(pagesCompleted);

  const paymentModal = () => {
    // open modal
    //  if confirm -->>>
    payment();
    // else
    // {log() | toast}
  };

  const _nextPage = index => {
    // setPage(index);
    setStepNumber(index + 1);
  };

  const _steps = async index => {
    switch (index) {
      case 0:
        {
          _nextPage(index);
        }
        break;
      case 1:
        {
          if (!formData.occupation) {
            alert('Enter Your  Occupation');
          } else if (!formData.education) {
            alert('Enter Your Education');
          } else if (!salary) {
            alert('Enter salary');
          } else if (!formData.loanTenure) {
            alert('Enter Your loanTenure');
          } else if (!formData.residence) {
            alert('Enter Your residence');
          } else toggleVerifyModal();
        }
        break;
      case 2:
        {
          if (!contactName) {
            alert('Enter your Emergency contact Name');
            return;
          }
          if (!contactNumber) {
            alert('Enter your Emergency contact Number');
            return;
          }
          if (!formData.relationship) {
            alert('Enter your Emergency Relationship');
            return;
          }
          if (!emergency) {
            alert('Enter your Emergency Contact Name 2');
            return;
          }
          if (!contactNoTwo) {
            alert('Enter your Emergency Contact Number 2');
            return;
          }
          if (!formData.emergencyrealtion) {
            alert('Enter your Emergency  RelationShip');
            return;
          }
          const isPhoneValid1 = await _validatePhone(contactNumber);
          const isPhoneValid2 = await _validatePhone(contactNoTwo);
          if (!isPhoneValid1 || contactNumber.length !== 10) {
            Alert.alert('Enter Valid Emergency Contact Number');
            return;
          }
          if (!isPhoneValid2 || contactNoTwo.length !== 10) {
            Alert.alert('Enter Valid Second Emergency Contact Number');
            return;
          }
          toggleVerifyModal();
        }
        break;
      case 3:
        {
          if (!panCard) {
            alert('Upload your Pan card Image');
            return;
          }
          if (!image) {
            alert('Upload your Aadhar card Image');
            return;
          }
          if (!backImage) {
            alert('Upload your Aadhar card back Image');
            return;
          }
          if (!fullName) {
            alert('Enter your Full Name');
            return;
          }
          if (!panNumber) {
            alert('Enter your Pan number');
            return;
          }
          if (!aadharNumber) {
            alert('Enter your Aadhar number');
            return;
          }
          if (!formData.dateofbirth) {
            alert('Choose your Date Of Birth');
            return;
          }
          if (!formData.gender) {
            alert('Choose your Gender');
            return;
          }
          const isPANvalid = await _validatePAN(panNumber);
          if (!isPANvalid || panNumber.length !== 10) {
            Alert.alert('Enter Valid PAN Number');
            return;
          }

          const isaadharValid = await _validateAadhar(aadharNumber);
          if (!isaadharValid) {
            Alert.alert('Enter Valid Aadhar Number');
            return;
          }
          toggleVerifyModal();
        }
        break;
      default:
        break;
    }
  };

  const opacities = {
    0: 1,
    1: 1,
    2: 0.6,
    3: 0.3,
    4: 0.1,
  };
  const sizeText = {
    0: 20,
    1: 15,
    2: 10,
  };

  const postPersonalDteails = () => {
    console.log('hiiiii');
    //setResponseId(resp.data?._id);
    toggleVerifyModal();
    setPage(1);
    _nextPage(0);
    setPagesCompleted([...pagesCompleted, 1]);
  };

  const Item = React.memo(({opacity, selected, vertical, fontSize, name}) => {
    return (
      <View
        style={[
          Styles.OptionWrapper,
          {
            opacity,
            borderColor: selected ? '#ABC9AF' : 'transparent',
            // width: vertical ? 190 : 'auto',
          },
        ]}>
        <Text style={{fontSize}}>{name}</Text>
      </View>
    );
  });

  const ItemToRender = ({item, index}, indexSelected, vertical) => {
    const selected = index === indexSelected;
    const gap = Math.abs(index - indexSelected);

    let opacity = opacities[gap];
    if (gap > 3) {
      opacity = opacities[4];
    }
    let fontSize = sizeText[gap];
    if (gap > 1) {
      fontSize = sizeText[2];
    }

    return (
      // <View style={{marginTop: 80}}>
      <Item
        opacity={opacity}
        selected={selected}
        vertical={vertical}
        fontSize={fontSize}
        name={item}
      />
      // </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Header navigateTo={() => navigation.goBack()} /> */}
      <FormPopUp
        isModalVisible={isVerifyModal}
        verifyDetails={
          page == 0
            ? verifyDetails1
            : page == 1
            ? verifyDetails2
            : page == 2
            ? verifyDetails3
            : verifyDetails4
        }
        goBack={toggleVerifyModal}
        nextStep={
          page == 0
            ? postPersonalDteails
            : page == 1
            ? postEmergencyDteails
            : page == 2
            ? postUploadDocument
            : postBankDetail
        }

        // isImage={page == 2 ? true : false}
      />
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          // backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {progressItems.map((item, index) => {
          let complete = index + 1;
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {stepNumber > complete ? (
                <Pressable
                  onPress={() => {
                    _steps(index);
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: Colors.LIGHT_BLUE,
                    borderRadius: 40 / 2,
                    borderColor: Colors.LIGHT_BLUE,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: page === index ? Colors.WHITE : Colors.BLACK,
                      fontWeight: '600',
                      fontSize: 16,
                    }}>
                    {item}
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    _steps(index);
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: pagesCompleted.includes(index)
                      ? Colors.LIGHT_BLUE
                      : '#ddd',
                    borderRadius: 40 / 2,
                    borderColor: page === index ? Colors.LIGHT_BLUE : '#ddd',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {stepNumber > complete ? (
                    <Text
                      style={{
                        color: Colors.WHITE,
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      {item}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: page === index ? Colors.WHITE : Colors.BLACK,
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      {item}
                    </Text>
                  )}
                </Pressable>
              )}
              {index === 3 ? null : stepNumber > complete ? (
                <St_line
                  BACK_COLOR={COLORS.LIGHT_BLUE}
                  BORDER_COLOR={COLORS.LIGHT_BLUE}
                  BORDER_WIDTH={1}
                  MARGIN_H={5}
                  WIDTH={50}
                />
              ) : (
                <St_line
                  BACK_COLOR={
                    pagesCompleted.includes(index)
                      ? Colors.LIGHT_BLUE
                      : Colors.GRAY
                  }
                  BORDER_COLOR={
                    pagesCompleted.includes(index)
                      ? Colors.LIGHT_BLUE
                      : Colors.GRAY
                  }
                  BORDER_WIDTH={1}
                  MARGIN_H={5}
                  WIDTH={50}
                />
              )}
            </View>
          );
        })}
      </View>
      {page === 0 ? (
        <ScrollView
          contentContainerStyle={{
            // flex: 1,
            marginHorizontal: width / 13,
            backgroundColor: Colors.GRAY,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: Colors.BLACK,
              fontWeight: '500',
              fontSize: 14,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            Occupation
          </Text>

          <Pressable
            onPress={() => toggleModal(0)}
            style={{
              backgroundColor: Colors.WHITE,
              marginHorizontal: 10,
              height: 50,
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 5,
            }}>
            <View style={{position: 'absolute', left: 10}}>
              <Text style={{color: Colors.BLACK}}>{formData.occupation}</Text>
            </View>
            <FontAwesome name="chevron-down" size={20} color="#000" />
          </Pressable>

          <Text
            style={{
              color: Colors.BLACK,
              fontWeight: '500',
              fontSize: 14,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            Education
          </Text>
          <Pressable
            onPress={() => toggleModal(1)}
            style={{
              backgroundColor: Colors.WHITE,
              marginHorizontal: 10,
              height: 50,
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 5,
            }}>
            <View style={{position: 'absolute', left: 10}}>
              <Text style={{color: Colors.BLACK}}>{formData.education}</Text>
            </View>
            <FontAwesome name="chevron-down" size={20} color="#000" />
          </Pressable>
          <Text
            style={{
              color: Colors.BLACK,
              fontWeight: '500',
              fontSize: 14,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            Salary
          </Text>
          <TextInput
            keyboardType="numeric"
            maxLength={6}
            style={{
              backgroundColor: Colors.WHITE,
              marginHorizontal: 10,
              height: 50,
              borderRadius: 10,
              color: '#000',
            }}
            //onChangeText={setSalary}
            onChangeText={newText => setSalary(newText)}
            value={salary}
          />
          <Text
            style={{
              color: Colors.BLACK,
              fontWeight: '500',
              fontSize: 14,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            Loan Tenure
          </Text>
          <Pressable
            onPress={() => toggleModal(2)}
            style={{
              backgroundColor: Colors.WHITE,
              marginHorizontal: 10,
              height: 50,
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 5,
            }}>
            <View style={{position: 'absolute', left: 10}}>
              <Text style={{color: Colors.BLACK}}>{formData.loanTenure}</Text>
            </View>
            <FontAwesome name="chevron-down" size={20} color="#000" />
          </Pressable>
          <Text
            style={{
              color: Colors.BLACK,
              fontWeight: '500',
              fontSize: 14,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            Type of Residence
          </Text>
          <Pressable
            onPress={() => toggleModal(3)}
            style={{
              backgroundColor: Colors.WHITE,
              marginHorizontal: 10,
              height: 50,
              borderRadius: 10,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 5,
            }}>
            <View style={{position: 'absolute', left: 10}}>
              <Text style={{color: Colors.BLACK}}>{formData.residence}</Text>
            </View>
            <FontAwesome name="chevron-down" size={20} color="#000" />
          </Pressable>
          <View style={{marginVertical: 7}}>
            <CustomBtn
              Title={'Next Step'}
              ONCLICK={() => {
                if (!formData.occupation) {
                  alert('Enter Your  Occupation');
                } else if (!formData.education) {
                  alert('Enter Your Education');
                } else if (!salary) {
                  alert('Enter salary');
                } else if (!formData.loanTenure) {
                  alert('Enter Your loanTenure');
                } else if (!formData.residence) {
                  alert('Enter Your residence');
                } else toggleVerifyModal();
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              //backgroundColor: 'gray',
              //marginHorizontal: 5,
              //paddingHorizontal: 20,
              width: width,
              marginVertical: 15,
            }}>
            <View
              style={{
                height: 25,
                width: 20,
                //backgroundColor: 'skyblue',
                marginLeft: 4,
              }}>
              {/* <Image
                source={require('../assets/Images/shield.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  // resizeMode: 'contain',
                }}
              /> */}
            </View>
            <View style={{width: '91%'}}>
              <Text style={{fontSize: 13}}>
                The platform is committed to protecting the {'\n'} security of
                the applicant's data
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : page === 1 ? (
        <>
          <ScrollView
            contentContainerStyle={{
              // flex: 1,
              marginHorizontal: width / 13,
              backgroundColor: Colors.GRAY,
              borderRadius: 4,
            }}>
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Emergency Contact Name
            </Text>
            <TextInput
              keyboardType="default"
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                paddingLeft: 8,
                color: '#000',
              }}
              onChangeText={val =>
                setContactName(val.replace(/[^a-zA-Z]+/g, ''))
              }
              value={contactName}
            />

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Emergency Contact Number
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                paddingLeft: 8,
                color: '#000',
              }}
              maxLength={10}
              keyboardType="numeric"
              onChangeText={val =>
                onContactNumber(
                  val.replace(/[- ()+=#*;,.<>\{\}\[\]\\\/]/gi, ''),
                )
              }
              value={contactNumber}
            />
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Emergency Contact Relationship
            </Text>
            <Pressable
              onPress={() => toggleModal(4)}
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: 5,
              }}>
              <View style={{position: 'absolute', left: 10}}>
                <Text style={{color: Colors.BLACK}}>
                  {formData.relationship}
                </Text>
              </View>
              <FontAwesome name="chevron-down" size={20} color="#000" />
            </Pressable>

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Emergency Contact Name
            </Text>
            <TextInput
              keyboardType="default"
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                paddingLeft: 8,
                color: '#000',
              }}
              onChangeText={val => setEmergency(val.replace(/[^a-zA-Z]+/g, ''))}
              value={emergency}
            />

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Emergency Contact Number
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                paddingLeft: 8,
                color: '#000',
              }}
              maxLength={10}
              keyboardType="numeric"
              onChangeText={val =>
                onContactNoTwo(val.replace(/[- ()+=#*;,.<>\{\}\[\]\\\/]/gi, ''))
              }
              value={contactNoTwo}
            />
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Emergency Contact Relationship
            </Text>
            <Pressable
              onPress={() => toggleModal(5)}
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: 5,
              }}>
              <View style={{position: 'absolute', left: 10}}>
                <Text style={{color: Colors.BLACK}}>
                  {formData.emergencyrealtion}
                </Text>
              </View>
              <FontAwesome name="chevron-down" size={20} color="#000" />
            </Pressable>

            <View style={{marginVertical: 7}}>
              <CustomBtn
                Title={'Next Step'}
                ONCLICK={async () => {
                  if (!contactName) {
                    alert('Enter your Emergency contact Name');
                    return;
                  }
                  if (!contactNumber) {
                    alert('Enter your Emergency contact Number');
                    return;
                  }
                  if (!formData.relationship) {
                    alert('Enter your Emergency Relationship');
                    return;
                  }
                  if (!emergency) {
                    alert('Enter your Emergency Contact Name 2');
                    return;
                  }
                  if (!contactNoTwo) {
                    alert('Enter your Emergency Contact Number 2');
                    return;
                  }
                  if (!formData.emergencyrealtion) {
                    alert('Enter your Emergency  RelationShip');
                    return;
                  }
                  const isPhoneValid1 = await _validatePhone(contactNumber);
                  const isPhoneValid2 = await _validatePhone(contactNoTwo);
                  if (!isPhoneValid1 || contactNumber.length !== 10) {
                    Alert.alert('Enter Valid Emergency Contact Number');
                    return;
                  }
                  if (!isPhoneValid2 || contactNoTwo.length !== 10) {
                    Alert.alert('Enter Valid Second Emergency Contact Number');
                    return;
                  }
                  toggleVerifyModal();
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                //backgroundColor: 'gray',
                //marginHorizontal: 5,
                //paddingHorizontal: 20,
                width: width,
                marginVertical: 15,
              }}>
              <View
                style={{
                  height: 25,
                  width: 20,
                  //backgroundColor: 'skyblue',
                  marginLeft: 4,
                }}>
                {/* <Image
                  source={require('../assets/Images/shield.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    // resizeMode: 'contain',
                  }}
                /> */}
              </View>
              <View style={{width: '91%'}}>
                <Text style={{fontSize: 13}}>
                  The platform is committed to protecting the {'\n'} security of
                  the applicant's data
                </Text>
              </View>
            </View>
          </ScrollView>
        </>
      ) : page === 2 ? (
        <>
          <ScrollView
            contentContainerStyle={{
              // flex: 1,
              marginHorizontal: width / 12,
              backgroundColor: Colors.GRAY,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
                //backgroundColor: 'green',
              }}>
              Upload Pan Card
            </Text>
            {!panCard ? (
              <TouchableOpacity
                onPress={() => {
                  setItemPressed(1);
                  toggleModal3();
                }}
                style={{
                  backgroundColor: '#fff',
                  height: 180,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setItemPressed(1);
                    toggleModal3();
                  }}
                  style={{
                    backgroundColor: '#000',
                    height: 60,
                    width: 60,

                    borderRadius: 60 / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome name="camera" size={30} color="#fff" />
                </TouchableOpacity>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setItemPressed(1);
                  toggleModal3();
                }}
                style={{
                  backgroundColor: '#fff',
                  height: 180,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: panCard?.path}}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
              </TouchableOpacity>
            )}

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
                //backgroundColor: 'green',
              }}>
              Upload Front Image Of Aadhar Card
            </Text>
            {!image ? (
              <TouchableOpacity
                onPress={() => {
                  setItemPressed(2);
                  toggleModals();
                }}
                style={{
                  backgroundColor: '#fff',
                  height: 180,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setItemPressed(2);
                    toggleModals();
                  }}
                  style={{
                    backgroundColor: '#000',
                    height: 60,
                    width: 60,

                    borderRadius: 60 / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome name="camera" size={30} color="#fff" />
                </TouchableOpacity>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setItemPressed(2);
                  toggleModals();
                }}
                style={{
                  backgroundColor: '#fff',
                  height: 180,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: image?.path}}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
              </TouchableOpacity>
            )}

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
                //backgroundColor: 'green',
              }}>
              Upload Back Image Of Aadhar Card
            </Text>
            {!backImage ? (
              <TouchableOpacity
                onPress={() => {
                  setItemPressed(3);
                  toggleModals6();
                }}
                style={{
                  backgroundColor: '#fff',
                  height: 180,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setItemPressed(3);
                    toggleModals6();
                  }}
                  style={{
                    backgroundColor: '#000',
                    height: 60,
                    width: 60,

                    borderRadius: 60 / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome name="camera" size={30} color="#fff" />
                </TouchableOpacity>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setItemPressed(3);
                  toggleModals6();
                }}
                style={{
                  backgroundColor: '#fff',
                  height: 180,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: backImage?.path}}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
              </TouchableOpacity>
            )}

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Full Name
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                paddingHorizontal: 10,
                color: '#000',
              }}
              onChangeText={val => setFullName(val.replace(/[^a-zA-Z]+/g, ''))}
              value={fullName}
            />
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Pan Number
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                paddingHorizontal: 10,
                color: '#000',
              }}
              maxLength={10}
              keyboardType="numbers-and-punctuation"
              onChangeText={val => setPanNumber(val)}
              value={panNumber}
            />
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Aadhar Number
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 10,
                paddingHorizontal: 10,
                color: '#000',
              }}
              // maxLength={12}
              keyboardType="numeric"
              onChangeText={setAadharNumber}
              value={aadharNumber}
            />
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Date of Birth
            </Text>
            <Pressable
              onPress={() => toggleModal(6)}
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 4,
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: 5,
              }}>
              <View style={{position: 'absolute', left: 10}}>
                <Text style={{color: Colors.BLACK}}>
                  {formData.dateofbirth}
                </Text>
              </View>
              <FontAwesome name="chevron-down" size={20} color="#000" />
            </Pressable>
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Gender
            </Text>
            <Pressable
              onPress={() => toggleModal(7)}
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 4,
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: 5,
              }}>
              <View style={{position: 'absolute', left: 10}}>
                <Text style={{color: Colors.BLACK}}>{formData.gender}</Text>
              </View>
              <FontAwesome name="chevron-down" size={20} color="#000" />
            </Pressable>
            <View style={{marginVertical: 7}}>
              <CustomBtn
                Title={'Next Step'}
                ONCLICK={async () => {
                  if (!panCard) {
                    alert('Upload your Pan card Image');
                    return;
                  }
                  if (!image) {
                    alert('Upload your Aadhar card Image');
                    return;
                  }
                  if (!backImage) {
                    alert('Upload your Aadhar card back Image');
                    return;
                  }
                  if (!fullName) {
                    alert('Enter your Full Name');
                    return;
                  }
                  if (!panNumber) {
                    alert('Enter your Pan number');
                    return;
                  }
                  if (!aadharNumber) {
                    alert('Enter your Aadhar number');
                    return;
                  }
                  if (!formData.dateofbirth) {
                    alert('Choose your Date Of Birth');
                    return;
                  }
                  if (!formData.gender) {
                    alert('Choose your Gender');
                    return;
                  }
                  const isPANvalid = await _validatePAN(panNumber);
                  if (!isPANvalid || panNumber.length !== 10) {
                    Alert.alert('Enter Valid PAN Number');
                    return;
                  }
                  const isaadharValid = await _validateAadhar(aadharNumber);
                  // console.log(isaadharValid);
                  if (!isaadharValid) {
                    Alert.alert('Enter Valid Aadhar Number');
                    return;
                  }

                  toggleVerifyModal();
                }}
                //   setPage(3);
                // }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                //backgroundColor: 'gray',
                //marginHorizontal: 5,
                //paddingHorizontal: 20,
                width: width,
                marginVertical: 15,
              }}>
              <View
                style={{
                  height: 25,
                  width: 20,
                  //backgroundColor: 'skyblue',
                  marginLeft: 4,
                }}>
                {/* <Image
                  source={require('../assets/Images/shield.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    // resizeMode: 'contain',
                  }}
                /> */}
              </View>
              <View style={{width: '91%'}}>
                <Text style={{fontSize: 13}}>
                  The platform is committed to protecting the {'\n'} security of
                  the applicant's data
                </Text>
              </View>
            </View>
          </ScrollView>
          {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                //backgroundColor: 'gray',
                //marginHorizontal: 5,
                paddingHorizontal: 20,
                width: width,
                marginVertical: 15,
              }}>
              <View style={{height: 25, width: 25}}>
                <Image
                  source={require('../assets/Images/shield.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    // resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '90%'}}>
                <Text>
                  The platform is committed to protecting the security of the
                  applicant's data
                </Text>
              </View>
            </View> */}
        </>
      ) : (
        <>
          <ScrollView
            contentContainerStyle={{
              // flex: 1,
              marginHorizontal: width / 13,
              backgroundColor: Colors.GRAY,
              borderRadius: 4,
            }}>
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Bank Account Number
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 4,
                paddingLeft: 8,
                color: '#000',
              }}
              keyboardType="number-pad"
              onChangeText={onBankAccount}
              value={bankAccount}
            />

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Account Holder Name
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 4,
                paddingLeft: 8,
                color: '#000',
              }}
              onChangeText={onAccountHolder}
              value={accountHolder}
            />

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              IFSC Code
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 4,
                paddingLeft: 8,
                color: '#000',
              }}
              onChangeText={onIfscCode}
              value={ifscCode}
            />

            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: '500',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              Bank Name
            </Text>
            <TextInput
              style={{
                backgroundColor: Colors.WHITE,
                marginHorizontal: 10,
                height: 50,
                borderRadius: 4,
                paddingLeft: 8,
                color: '#000',
              }}
              onChangeText={onBankName}
              value={bankName}
            />

            <View style={{marginVertical: 7}}>
              <CustomBtn
                Title={'Submit'}
                // ONCLICK={toggleVerifyModal}
                // ONCLICK={() => {
                //   Linking.openURL(loanDetails?.getAll[5]?.addUrl);
                //   // URL WILL BE HERE
                // }}
                ONCLICK={() => {
                  if (
                    !bankAccount ||
                    bankAccount.length < 5 ||
                    bankAccount.length > 18
                  ) {
                    alert('Enter Valid Bank Account Number');
                    return;
                  }
                  if (!accountHolder) {
                    alert('Enter Bank Account Holder Name');
                    return;
                  }
                  if (!ifscCode || ifscCode.length !== 11) {
                    alert('Enter Valid IFSC Code');
                    return;
                  }
                  if (!bankName) {
                    alert('Enter your Bank Name');
                    return;
                  }
                  toggleVerifyModal();
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                //backgroundColor: 'gray',
                //marginHorizontal: 5,
                //paddingHorizontal: 20,
                width: width,
                marginVertical: 15,
              }}>
              <View
                style={{
                  height: 25,
                  width: 20,
                  // backgroundColor: 'skyblue',
                  marginLeft: 4,
                }}>
                {/* <Image
                  source={require('../assets/Images/shield.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    // resizeMode: 'contain',
                  }}
                /> */}
              </View>
              <View style={{width: '91%'}}>
                <Text style={{fontSize: 13}}>
                  The platform is committed to protecting the {'\n'} security of
                  the applicant's data
                </Text>
              </View>
            </View>
          </ScrollView>
          {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                //backgroundColor: 'gray',
                //marginHorizontal: 5,
                paddingHorizontal: 20,
                width: width,
                marginVertical: 35,
              }}>
              <View style={{height: 25, width: 25}}>
                <Image
                  source={require('../assets/Images/shield.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    // resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{width: '90%'}}>
                <Text>
                  The platform is committed to protecting the security of the
                  applicant's data
                </Text>
              </View>
            </View> */}
        </>
      )}

      {/* {pickerIndex === 0 && (
          // <SmoothPicker
          //   initialScrollToIndex={selected}
          //   onScrollToIndexFailed={() => {}}
          //   keyExtractor={(_, index) => index.toString()}
          //   showsVerticalScrollIndicator={false}
          //   data={OCCUPATION}
          //   scrollAnimation
          //   onSelected={({item, index}) => {
          //     setSelected(index);
          //     setFormData({
          //       ...formData,
          //       occupation: item,
          //     });
          //   }}
          //   renderItem={option => ItemToRender(option, selected, true)}
          //   magnet
          //   selectOnPress
          // />
          // <SelectDropdown
          //   data={OCCUPATION}
          //   onSelect={(selectedItem, index) => {
          //     console.log(selectedItem, index);
          //   }}
          //   buttonTextAfterSelection={(selectedItem, index) => {
          //     return selectedItem;
          //   }}
          //   rowTextForSelection={(item, index) => {
          //     return item;
          //   }}
          // />
          <ScrollPicker
            STYLES={{
              backgroundColor: 'white',
              width: width,
              height: height / 4.2,
            }}
            // SELECTED_VALUE={
            //   formData.occupation ? formData.occupation : OCCUPATION[1]
            // }
            // PICKER_DATA={OCCUPATION}
            SELECTED_VALUE={'item4'}
            PICKER_DATA={['Salaried', 'Self-employed', 'Student', 'Business']}
            ON_VALUE_CHANGE={value => {
              // console.log('value---->>>>', value);
              setFormData({
                ...formData,
                occupation: value,
              });
              setModalVisible(false);
            }}
          />
        )}
  
        {pickerIndex === 1 && (
          <ScrollPicker
            STYLES={{
              backgroundColor: 'white',
              width: width,
              height: height / 4.2,
            }}
            SELECTED_VALUE={'item6'}
            PICKER_DATA={[
              'Not Educated',
              'Primary School',
              'High School',
              'Bachelors',
              'Masters',
              'Doctors',
            ]}
            ON_VALUE_CHANGE={value => {
              // console.log('value---->>>>', value);
              setFormData({
                ...formData,
                education: value,
              });
              setModalVisible(false);
            }}
          />
        )}
  
        {pickerIndex === 2 && (
          <ScrollPicker
            STYLES={{
              backgroundColor: 'white',
              width: width,
              height: height / 4.2,
            }}
            SELECTED_VALUE={'item5'}
            PICKER_DATA={['1 month', '2 month', '3 month', '4 month', '6 month']}
            ON_VALUE_CHANGE={value => {
              // console.log('value---->>>>', value);
              setFormData({
                ...formData,
                loanTenure: value,
              });
              setModalVisible(false);
            }}
          />
        )}
  
        {pickerIndex === 3 && (
          <ScrollPicker
            STYLES={{
              backgroundColor: 'white',
              width: width,
              height: height / 4.2,
            }}
            SELECTED_VALUE={'item3'}
            PICKER_DATA={['Own House', 'Rented', ' Others']}
            ON_VALUE_CHANGE={value => {
              // console.log('value---->>>>', value);
              setFormData({
                ...formData,
                residence: value,
              });
              setModalVisible(false);
            }}
          />
        )}
        {pickerIndex === 4 && (
          <ScrollPicker
            STYLES={{
              backgroundColor: 'white',
              width: width,
              height: height / 4.2,
            }}
            SELECTED_VALUE={'item3'}
            PICKER_DATA={[
              'Son/Daughter',
              ' Friends',
              'Father/Mother',
              'Brothers/Sisters',
              'Spouse',
              'Relatives',
            ]}
            ON_VALUE_CHANGE={value => {
              // console.log('value---->>>>', value);
              setFormData({
                ...formData,
                relationship: value,
              });
              setModalVisible(false);
            }}
          />
        )}
  
        {pickerIndex === 5 && (
          <ScrollPicker
            STYLES={{
              backgroundColor: 'white',
              width: width,
              height: height / 4.2,
            }}
            SELECTED_VALUE={'item3'}
            PICKER_DATA={[
              'Son/Daughter',
              ' Friends',
              'Father/Mother',
              'Brothers/Sisters',
              'Spouse',
              'Relatives',
            ]}
            ON_VALUE_CHANGE={value => {
              // console.log('value---->>>>', value);
              setFormData({
                ...formData,
                emergencyrealtion: value,
              });
              setModalVisible(false);
            }}
          />
        )}
  
        {pickerIndex === 6 && (
          <DatePickerScroll
            STYLES={{
              backgroundColor: 'white',
              width: width,
              height: height / 4.2,
            }}
            // MAX_DATE={new Date()}
            // SELECTED_DATE={new Date()}
            ON_CHANGE_DATE={value => {
              let fDate = moment(value).format('L');
              console.log('value---->>>>', value);
              setFormData({
                ...formData,
                dateofbirth: fDate,
              });
              //setModalVisible(false);
            }}
          />
        )}
  
        {pickerIndex === 7 && (
          <ScrollPicker
            STYLES={{
              backgroundColor: 'white',
              width: width,
              height: height / 4.2,
            }}
            SELECTED_VALUE={'item3'}
            PICKER_DATA={['Male', 'Female', 'other']}
            ON_VALUE_CHANGE={value => {
              // console.log('value---->>>>', value);
              setFormData({
                ...formData,
                gender: value,
              });
              setModalVisible(false);
            }}
          />
        )} */}

      <Modal
        isVisible={isModalVisible}
        animationOutTiming={300}
        animationInTiming={300}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        swipeDirection={['down']}
        style={{alignSelf: 'center', width: '100%'}}>
        <View
          style={{
            // flex: 1,
            // position: 'absolute',
            // top: height / 7,
            backgroundColor: Colors.WHITE,
            height: height / 1.5,
            //width: '100%',
            marginTop: height,

            // marginHorizontal: 0,
            // bottom: 0,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              borderBottomColor: Colors.LIGHT_GREY,
              borderBottomWidth: 2,
            }}>
            <Text
              onPress={() => setModalVisible(false)}
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: Colors.DARK_BLUE,
              }}>
              Cancel
            </Text>
            <Text
              onPress={() => setModalVisible(false)}
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: Colors.DARK_BLUE,
              }}>
              Confirm
            </Text>
          </View>
          {pickerIndex === 0 && (
            <ScrollPicker
              STYLES={{
                backgroundColor: 'white',
                width: width,
                height: height / 4.2,
              }}
              SELECTED_VALUE={'item4'}
              PICKER_DATA={['Salaried', 'Self-employed', 'Student', 'Business']}
              ON_VALUE_CHANGE={value => {
                // console.log('value---->>>>', value);
                setFormData({
                  ...formData,
                  occupation: value,
                });
                setModalVisible(false);
              }}
            />
          )}

          {pickerIndex === 1 && (
            <ScrollPicker
              STYLES={{
                backgroundColor: 'white',
                width: width,
                height: height / 4.2,
              }}
              SELECTED_VALUE={'item6'}
              PICKER_DATA={[
                'Not Educated',
                'Primary School',
                'High School',
                'Bachelors',
                ' Masters',
                'Doctors',
              ]}
              ON_VALUE_CHANGE={value => {
                // console.log('value---->>>>', value);
                setFormData({
                  ...formData,
                  education: value,
                });
                setModalVisible(false);
              }}
            />
          )}

          {pickerIndex === 2 && (
            <ScrollPicker
              STYLES={{
                backgroundColor: 'white',
                width: width,
                height: height / 4.2,
              }}
              SELECTED_VALUE={'item5'}
              PICKER_DATA={[
                '1 month',
                ' 2 month',
                '3 month',
                ' 4 month',
                '6 month',
              ]}
              ON_VALUE_CHANGE={value => {
                // console.log('value---->>>>', value);
                setFormData({
                  ...formData,
                  loanTenure: value,
                });
                setModalVisible(false);
              }}
            />
          )}

          {pickerIndex === 3 && (
            <ScrollPicker
              STYLES={{
                backgroundColor: 'white',
                width: width,
                height: height / 4.2,
              }}
              SELECTED_VALUE={'item3'}
              PICKER_DATA={['Own House', 'Rented', ' Others']}
              ON_VALUE_CHANGE={value => {
                // console.log('value---->>>>', value);
                setFormData({
                  ...formData,
                  residence: value,
                });
                setModalVisible(false);
              }}
            />
          )}
          {pickerIndex === 4 && (
            <ScrollPicker
              STYLES={{
                backgroundColor: 'white',
                width: width,
                height: height / 4.2,
              }}
              SELECTED_VALUE={'item3'}
              PICKER_DATA={[
                'Son/Daughter',
                ' Friends',
                'Father/Mother',
                'Brothers/Sisters',
                'Spouse',
                'Relatives',
              ]}
              ON_VALUE_CHANGE={value => {
                // console.log('value---->>>>', value);
                setFormData({
                  ...formData,
                  relationship: value,
                });
                setModalVisible(false);
              }}
            />
          )}

          {pickerIndex === 5 && (
            <ScrollPicker
              STYLES={{
                backgroundColor: 'white',
                width: width,
                height: height / 4.2,
              }}
              SELECTED_VALUE={'item3'}
              PICKER_DATA={[
                'Son/Daughter',
                ' Friends',
                'Father/Mother',
                'Brothers/Sisters',
                'Spouse',
                'Relatives',
              ]}
              ON_VALUE_CHANGE={value => {
                // console.log('value---->>>>', value);
                setFormData({
                  ...formData,
                  emergencyrealtion: value,
                });
                setModalVisible(false);
              }}
            />
          )}

          {pickerIndex === 6 && (
            <DatePickerScroll
              STYLES={{
                backgroundColor: 'white',
                width: width,
                height: height / 4.2,
              }}
              // MAX_DATE={new Date()}
              // SELECTED_DATE={new Date()}
              ON_CHANGE_DATE={value => {
                let fDate = moment(value).format('L');
                console.log('value---->>>>', value);
                setFormData({
                  ...formData,
                  dateofbirth: fDate,
                });
                //setModalVisible(false);
              }}
            />
          )}

          {pickerIndex === 7 && (
            <ScrollPicker
              STYLES={{
                backgroundColor: 'white',
                width: width,
                height: height / 4.2,
              }}
              SELECTED_VALUE={'item3'}
              PICKER_DATA={['Male', 'Female', 'other']}
              ON_VALUE_CHANGE={value => {
                // console.log('value---->>>>', value);
                setFormData({
                  ...formData,
                  gender: value,
                });
                setModalVisible(false);
              }}
            />
          )}
        </View>
      </Modal>

      <Modal
        isVisible={isModalVisible1}
        animationOutTiming={300}
        animationInTiming={300}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        swipeDirection={['up']}
        style={{alignSelf: 'center', width: '100%'}}>
        <View
          style={{
            height: height / 1.7,

            marginHorizontal: 10,

            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            overflow: 'hidden',
            //backgroundColor: 'purple',
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible1(!isModalVisible1)}
            style={{
              backgroundColor: '#cdd0d4',
              width: 20,
              borderRadius: 20 / 2,
              height: 20,
              alignSelf: 'flex-end',
              marginRight: 10,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <FontAwesome name="close" size={18} color="#000" />
          </TouchableOpacity>
          <View
            style={{
              height: height / 2.8,
              marginHorizontal: 10,

              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            {/* <Image
              source={require('../assets/Images/Adhar.png')}
              style={{
                height: '100%',
                width: '100%',
                //marginHorizontal: 10,
                // marginVertical: 10,
                resizeMode: 'contain',
              }}
            /> */}
          </View>

          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 10,
              marginTop: 4,
              color: '#000',
            }}>
            Clear Aadhar card information will increase loan success rates by
            atleast 15%.
          </Text>
          <CustomBtn Title={'Upload Aadhar'} ONCLICK={toggleModal2} />
        </View>
      </Modal>

      <Modal
        isVisible={isModalVisible6}
        animationOutTiming={300}
        animationInTiming={300}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        swipeDirection={['up']}
        style={{alignSelf: 'center', width: '100%'}}>
        <View
          style={{
            height: height / 1.7,

            marginHorizontal: 10,

            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            overflow: 'hidden',
            //backgroundColor: 'purple',
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible6(!isModalVisible6)}
            style={{
              backgroundColor: '#cdd0d4',
              width: 20,
              borderRadius: 20 / 2,
              height: 20,
              alignSelf: 'flex-end',
              marginRight: 10,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <FontAwesome name="close" size={18} color="#000" />
          </TouchableOpacity>
          <View
            style={{
              height: height / 2.8,
              marginHorizontal: 10,

              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            {/* <Image
              source={require('../assets/Images/AdharBack.png')}
              style={{
                height: '100%',
                width: '100%',
                //marginHorizontal: 10,
                // marginVertical: 10,
                resizeMode: 'contain',
              }}
            /> */}
          </View>

          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 10,
              marginTop: 4,
              color: '#000',
            }}>
            Clear Aadhar card information will increase loan success rates by
            atleast 15%.
          </Text>
          <CustomBtn Title={'Upload Aadhar'} ONCLICK={toggleModal2} />
        </View>
      </Modal>

      <Modal
        isVisible={isModalVisible3}
        animationOutTiming={300}
        animationInTiming={300}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        swipeDirection={['up']}
        style={{alignSelf: 'center', width: '100%'}}>
        <View
          style={{
            height: height / 1.7,

            marginHorizontal: 10,

            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            overflow: 'hidden',
            //backgroundColor: 'pink',
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible3(!isModalVisible3)}
            style={{
              backgroundColor: '#cdd0d4',
              width: 20,
              borderRadius: 20 / 2,
              height: 20,
              alignSelf: 'flex-end',
              marginRight: 10,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <FontAwesome name="close" size={18} color="#000" />
          </TouchableOpacity>
          <View
            style={{
              height: height / 2.8,
              marginHorizontal: 10,

              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              //backgroundColor: 'skyblue',
            }}>
            {/* <Image
              source={require('../assets/Images/GroupOne.png')}
              style={{
                height: '100%',
                width: '100%',
                //marginHorizontal: 10,
                // marginVertical: 10,
                resizeMode: 'contain',
              }}
            /> */}
          </View>

          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 10,
              marginTop: 4,
              color: '#000',
            }}>
            Clear Pan card information will increase loan success rates by
            atleast 15%.
          </Text>
          <CustomBtn Title={'Upload PanCard'} ONCLICK={toggleModal4} />
        </View>
      </Modal>

      <Modal
        isVisible={isModalVisible2}
        animationOutTiming={300}
        animationInTiming={300}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        swipeDirection={['up']}
        style={{alignSelf: 'center', width: '100%'}}>
        {/* <View
            style={{
              // flex: 1,
              height: height / 4,
  
              marginHorizontal: 20,
  
              backgroundColor:Colors.WHITE,
              borderRadius: 15,
              justifyContent: 'space-around',
              //overflow: 'hidden',
              flexDirection: 'row',
              backgroundColor: 'purple',
            }}>
            <View
              style={{
                width: '40%',
                height: height / 5,
  
                backgroundColor: 'pink',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={openCamera}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="camera" size={40} color="#000" />
                <Text style={{fontSize: 15, fontWeight: '400'}}>open camera</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '40%',
                height: height / 5,
  
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={openLibrary}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="image" size={40} color="#000" />
                <Text style={{fontSize: 15, fontWeight: '400'}}>
                  choose from gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}

        <View
          style={{
            height: height / 4,

            marginHorizontal: 20,

            backgroundColor: Colors.WHITE,
            borderRadius: 15,

            //backgroundColor: 'skyblue',
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible2(!isModalVisible2)}
            style={{
              backgroundColor: '#cdd0d4',
              width: 20,
              borderRadius: 20 / 2,
              height: 20,
              alignSelf: 'flex-end',
              marginRight: 10,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <FontAwesome name="close" size={18} color="#000" />
          </TouchableOpacity>
          <View
            style={{
              // flex: 1,
              height: height / 5.5,

              marginHorizontal: 15,
              marginVertical: 5,

              backgroundColor: Colors.WHITE,
              borderRadius: 15,
              justifyContent: 'space-around',

              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '40%',
                height: height / 6,

                //backgroundColor: 'pink',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={openCamera}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="camera" size={40} color="#000" />
                <Text style={{fontSize: 15, fontWeight: '400', color: '#000'}}>
                  open camera
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '40%',
                height: height / 6,

                //backgroundColor: 'pink',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={openLibrary}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="image" size={40} color="#000" />
                <Text style={{fontSize: 15, fontWeight: '400', color: '#000'}}>
                  choose from gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={isModalVisible4}
        animationOutTiming={300}
        animationInTiming={300}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        swipeDirection={['up']}
        style={{alignSelf: 'center', width: '100%'}}>
        <View
          style={{
            height: height / 4,

            marginHorizontal: 20,

            backgroundColor: Colors.WHITE,
            borderRadius: 15,

            //backgroundColor: 'skyblue',
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible4(!isModalVisible4)}
            style={{
              backgroundColor: '#cdd0d4',
              width: 20,
              borderRadius: 20 / 2,
              height: 20,
              alignSelf: 'flex-end',
              marginRight: 10,
              marginTop: 5,
              alignItems: 'center',
            }}>
            <FontAwesome name="close" size={18} color="#000" />
          </TouchableOpacity>
          <View
            style={{
              // flex: 1,
              height: height / 5.5,

              marginHorizontal: 15,
              marginVertical: 5,

              backgroundColor: Colors.WHITE,
              borderRadius: 15,
              justifyContent: 'space-around',

              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '40%',
                height: height / 6,

                //backgroundColor: 'pink',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={openCamera}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="camera" size={40} color="#000" />
                <Text style={{fontSize: 15, fontWeight: '400', color: '#000'}}>
                  open camera
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '40%',
                height: height / 6,

                //backgroundColor: 'pink',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={openLibrary}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="image" size={40} color="#000" />
                <Text style={{fontSize: 15, fontWeight: '400', color: '#000'}}>
                  choose from gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={isModalVisible5}
        animationOutTiming={300}
        animationInTiming={300}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        swipeDirection={['up']}
        style={{alignSelf: 'center', width: '100%'}}>
        <View
          style={{
            // flex: 1,
            height: height / 4.8,

            marginHorizontal: 20,

            backgroundColor: Colors.WHITE,
            borderRadius: 15,

            //justifyContent: 'center',
            //flexDirection: 'row',
          }}>
          <View
            style={{
              width: '90%',
              height: height / 10,

              //backgroundColor: 'pink',
              //alignSelf: 'center',
              alignItems: 'center',
              paddingHorizontal: 2,
              paddingVertical: 4,
              marginVertical: 7,
              marginHorizontal: 10,
              //justifyContent: 'center',
            }}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              Your Application has been submitted for review. We will let you
              know about your status in the next 3-4 business days
            </Text>
          </View>
          <View
            style={{
              //backgroundColor: 'pink',
              //marginHorizontal: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <CoustomBtn4
              Title={'OKAY'}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'LoanStack'}],
                });
              }}
              // onPress={() => navigation.navigate('LoanStack')}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  button: {
    width: width / 1.1,
    backgroundColor: Colors.DARK_BLUE,
    borderRadius: 7,
    marginVertical: 10,
    left: 15,
    elevation: 9,
    paddingVertical: 10,
    height: height / 18,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    // margin: 10,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  wrapperVertical: {
    width: 250,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
    // backgroundColor: '#aaa',
    alignSelf: 'center',
  },
});
