import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
// import {  } from 'react-native';

export default function FormPopUp({
  STYLISH,
  isModalVisible,
  verifyDetails,
  navigation,
  goBack,
  nextStep,
  isImage,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  //const [verifyDetails, setVerifyDetails] = useState([]);
  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        animationOutTiming={300}
        animationInTiming={300}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        swipeDirection={['up']}
        style={{alignSelf: 'center', width: '100%'}}>
        <ScrollView>
          <View
            style={{
              marginHorizontal: 10,
              backgroundColor: '#fff',
              borderRadius: 10,
              borderColor: '#2C3E50',
              borderWidth: 2,
              // justifyContent: 'space-around',
            }}>
            <Text
              style={{
                marginVertical: 10,
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '500',
                color: '#2980B9',
                marginHorizontal: 10,
              }}>
              Please re-check your information before going to the next step
            </Text>
            {verifyDetails.map((item, index) => (
              <View
                key={index}
                style={{
                  marginHorizontal: 5,
                  alignSelf: 'center',
                  //alignItems: 'center',
                  //justifyContent: 'center',
                  //backgroundColor: 'green',
                  marginVertical: 10,
                  width: '85%',
                }}>
                <View
                  style={
                    item.path
                      ? {}
                      : {
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                        }
                  }>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      //marginLeft: 5,
                      color: '#000',
                    }}>
                    {item.title}: {}
                  </Text>
                  {item.path ? (
                    <View
                      style={{
                        height: 150,
                        width: '100%',
                        // backgroundColor: '#aaa',
                      }}>
                      <Image
                        source={{uri: item.path}}
                        style={{
                          height: '100%',
                          width: '100%',
                          transform: [{rotate: '90deg'}],
                        }}
                        resizeMode={'contain'}
                      />
                    </View>
                  ) : (
                    <>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          marginRight: 10,
                          color: '#000',
                        }}>
                        {item.value}
                      </Text>
                    </>
                  )}
                </View>
              </View>
            ))}

            <View
              style={{
                // backgroundColor: 'pink',
                marginVertical: 20,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setActiveIndex(0);
                  //navigation.goBack('');
                  goBack();
                }}
                style={{
                  width: '30%',
                  justifyContent: 'center',
                  backgroundColor: activeIndex === 0 ? '#2C3E50' : '#fff',
                  alignItems: 'center',
                  marginVertical: 2,
                  borderRadius: 5,
                  borderColor: '#2C3E50',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: activeIndex === 0 ? '#fff' : '#000',
                  }}>
                  Go Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setActiveIndex(1);
                  // nextStep();
                }}
                style={{
                  backgroundColor: activeIndex === 1 ? '#2C3E50' : '#fff',
                  width: '30%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 2,
                  borderRadius: 5,
                  borderColor: '#2C3E50',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: activeIndex === 0 ? '#000' : '#fff',
                  }}>
                  Next Step
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}
