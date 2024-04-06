import { Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions } from 'react-native'
  import {SIZES} from '../constant/theme';
  let {height, width} = Dimensions.get('window')
import React from 'react'

export default function Home() {
  return (
    <View style={{
      backgroundColor: '#A45EE9',
      height: 100,
      width: 415,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      paddingTop: 10,
      alignItems: 'center',
    }}>
      <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 1,
            alignItems:'center'
          }}>
          CHAT
        </Text>
    </View>
  )
}
