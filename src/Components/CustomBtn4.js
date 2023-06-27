import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Colors from '../utils/Colors';
const {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';

function CoustomBtn4({Title, onPress, style}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        Colors={[Colors.LIGHT_BLUE, Colors.DARK_BLUE]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[Styles.button]}>
        <View style={style}>
          <Text style={Styles.buttonText}>{Title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default CoustomBtn4;

const Styles = StyleSheet.create({
  button: {
    width: width / 2,
    backgroundColor: Colors.DARK_BLUE,
    borderRadius: 7,
    marginVertical: 10,
    //left: 15,
    // elevation: 1,
    justifyContent: 'center',
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
});
