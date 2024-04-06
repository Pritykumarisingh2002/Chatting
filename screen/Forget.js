
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import React, {useState} from 'react';
import {SIZES} from '../constant/theme';
import {MaterialCommunityIcons} from '@expo/vector-icons';
let {height, width} = Dimensions.get('window')


const Forget = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FCFCFC',
      maxHeight: SIZES.height,
      
    }}>
      <Image
        source={require('../Images/log2.png')}
        style={{width: SIZES.width - 80, height: 250}}
        resizeMode="contain"
      />
           <View
        style={{
          backgroundColor: '#A45EE9',
          height: 300,
          width: 460,
          borderTopLeftRadius: 130,
          borderTopRightRadius: 130,
          borderBottomRightRadius: 130,
          borderBottomLeftRadius: 130,
          paddingTop: 40,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            paddingBottom: 20,
          }}>
          Forget password!
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Please Enter Your Registered{'\n'} phone number
        </Text>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Enter Your Phone Number"
            placeholderTextColor={'black'}
            paddingHorizontal="120"
            style={{
              borderRadius: 60,
              color: 'black',
              marginTop: 25,
              
              paddingHorizontal: 50,
              width: '80%',
              backgroundColor: 'rgb(220,220,220)',
              marginVertical: 10,
            }}
            keyboardType="numeric"
            onChangeText={value => setnumber(value)}
          />
        </KeyboardAvoidingView>
      </View>
        
      <View style={{marginTop: 40}}>
        <TouchableOpacity style={' '}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30,
              paddingHorizontal: 142,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: '#A45EE9',
              
            }}
            onPress={() => navigation.navigate('Verification')}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>

      </View>

    
  );
};
      export default Forget;
  

const styles = StyleSheet.create({})