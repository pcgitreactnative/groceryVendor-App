import {View, Text} from 'react-native';
import React from 'react';

export default function St_line({
  BACK_COLOR,
  BORDER_COLOR,
  BORDER_WIDTH,
  MARGIN_H,
  WIDTH,
}) {
  return (
    <View
      style={{
        width: WIDTH,
        backgroundColor: BACK_COLOR,
        borderColor: BORDER_COLOR,
        borderWidth: BORDER_WIDTH,
        marginHorizontal: MARGIN_H,
      }}
    />
  );
}
