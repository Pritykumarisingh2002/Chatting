import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import icons from '../constant/icons';

const Icon = ({onPress, icon, style, size = 32}) => {
  const Images = (
    <Image
      source={icons[icon]}
      style={[{width: size, height: size, resizeMode: 'cover'}, style]}
    />
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{Images}</TouchableOpacity>;
  }
  return Images;
};

export default Icon;