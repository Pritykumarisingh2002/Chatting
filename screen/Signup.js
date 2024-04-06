import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import React, {useState} from 'react';
import {SIZES} from '../constant/theme';
let {height, width} = Dimensions.get('window')
const Signup = ({navigation}) => {
  const [number, setnumber] = useState('');
  const [otp, setotp] = useState('');
  const [confirm, setconfirm] = useState('');
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
        source={require('../Images/signup.png')}
        style={{width: SIZES.width - 80, height: 250}}
        resizeMode="contain"
      />
      <View
        style={{
          backgroundColor: '#A45EE9',
          height: 300,
          width: 460,
          borderTopLeftRadius: 130,
          borderBottomRightRadius: 130,
          borderTopRightRadius: 130,
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
          Let's get started!
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          We will send a verification code{'\n'} on your phone number
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
              paddingHorizontal: 120,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: '#A45EE9',
            }}
            onPress={() => navigation.navigate('Verify')}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{position: 'absolute', bottom: 25}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Already have an account{' '}
          <TouchableOpacity>
            <Text
              style={{color: '#A45EE9', fontWeight: 'bold', fontSize: 16}}
              onPress={() => navigation.navigate('Login')}>
              Sign in
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
