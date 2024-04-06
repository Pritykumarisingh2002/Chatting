import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Avatar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SIZES} from '../constant/theme';
import {Badge} from 'react-native-paper';
import {Icon} from 'react-native-elements';

const Avatarp = () => {
  const [profile, setprofile] = useState('');
  return (
    <View style={{alignItems: 'center'}}>
      <Avatar.Image
        style={{marginTop: 20}}
        size={120}
        source={require('../Images/BG.jpg')}
      />

      <TouchableOpacity>
        <Text
          style={{
            marginTop: 7,
            alignItems: 'center',
            color: '#08b6ff',
            fontSize: 20,
          }}>
          Edit Your profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Avatarp;

const styles = StyleSheet.create({});
