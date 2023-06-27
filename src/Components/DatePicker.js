import {View, Text} from 'react-native';
import React from 'react';
import {DatePicker} from 'react-native-wheel-pick';

export default function DatePickerScroll({
  STYLES,
  SELECTED_DATE,
  PICKER_DATA,
  ON_CHANGE_DATE,
  MAX_DATE,
}) {
  return (
    <View>
      <DatePicker
        style={STYLES}
        // date={SELECTED_DATE}
        minimumDate={new Date('1000-01-01')}
        maximumDate={new Date()}
        textSize={20}
        onDateChange={value => {
          ON_CHANGE_DATE(value);
        }}
      />
    </View>
  );
}
