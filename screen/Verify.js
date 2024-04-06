import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {SIZES} from '../constant/theme';
import {OtpInput} from 'react-native-otp-entry';
let {height, width} = Dimensions.get('window')
const Verify = ({navigation}) => {
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
      <View
        style={{
          backgroundColor: '#A45EE9',
          height: 340,
          width: 460,
          borderTopLeftRadius: 130,
          borderBottomRightRadius: 130,
          borderTopRightRadius: 130,
          borderBottomLeftRadius: 130,
          paddingTop: 40,
          paddingBottom: 5,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
          Verify your number
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 5,
            paddingVertical: 15,
            paddingBottom: 55,
          }}>
          We sent you a 5-digit code to verify{'\n'} your number.
        </Text>
        <View style={{width: '100%', paddingHorizontal: 22, paddingLeft: 30}}>
          <OtpInput
            width="100%"
            height="200"
            paddingHorizontal="22"
            className="ml-5 mr-5"
            numberOfDigits={5}
            focusColor="#36013F"
            
            alignItems="center"
            paddingBottom="40"
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
            }}
            onPress={() => navigation.navigate('Form')}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verify;
