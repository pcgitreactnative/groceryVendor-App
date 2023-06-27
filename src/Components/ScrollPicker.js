import {View, Text} from 'react-native';
import React from 'react';
import {Picker, DatePicker} from 'react-native-wheel-pick';

export default function ScrollPicker({
  STYLES,
  SELECTED_VALUE,
  PICKER_DATA,
  ON_VALUE_CHANGE,
}) {
  return (
    <View>
      <Picker
        style={STYLES}
        selectedValue={SELECTED_VALUE}
        pickerData={PICKER_DATA}
        textSize={20}
        onValueChange={value => {
          ON_VALUE_CHANGE(value);
        }}
      />
    </View>
  );
}
