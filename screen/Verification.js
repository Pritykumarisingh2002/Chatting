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
  import {OtpInput} from 'react-native-otp-entry';
  let {height, width} = Dimensions.get('window')
  const Verification = ({navigation}) => {
    return (
        <View 
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FCFCFC',
          maxHeight: SIZES.height,
        }}>
            <Image
        source={require('../Images/verify.jpeg')}
        style={{width: SIZES.width - 80, height: 250}}
        resizeMode="contain"
      />
      <View style={{
          backgroundColor: '#A45EE9',
          height: 300,
          width: 430,
          borderTopLeftRadius: 130,
          borderBottomRightRadius: 130,
          borderTopRightRadius: 130,
          borderBottomLeftRadius: 130,
          paddingTop: 15,
          alignItems: 'center',
        }}>
            <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 1,
          }}>
          Verify it!
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 35,
          }}>
          We sent you a 5-digit code to verify{'\n'} your number.
        </Text>
        <View style={{width: '100%', paddingHorizontal: 22, paddingLeft: 30}}>
          <OtpInput
            width="100%"
            height="200"
            paddingHorizontal="32"
            className="ml-5 mr-5"
            numberOfDigits={5}
            focusColor="#36013F"
            alignItems="center"
            paddingBottom="50"
            marginBottom="20"
            focusStickBlinkingDuration={500}
            onTextChange={text => console.log(text)}
            onFilled={text => console.log(`OTP is ${text}`)}
          />
        </View>
        <View style={{position: 'absolute', bottom: 25}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
            Didn't recive code?{' '}
            <TouchableOpacity>
              <Text
                style={{color: 'white', fontWeight: 'bold', fontSize: 16}}
                onPress={() => navigation.navigate('Login')}>
                Resend
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View>
        <TouchableOpacity style={{marginTop: 35}}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30,
              paddingHorizontal: 140,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: '#A45EE9',
              marginTop: 100
            }}
            onPress={() => navigation.navigate('New_password')}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>

      </View>

        </View>
    );
  };
export default Verification;
  

const styles = StyleSheet.create({})