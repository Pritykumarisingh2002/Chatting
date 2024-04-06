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
const Login = ({navigation}) => {
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
        source={require('../Images/signin.png')}
        style={{width: SIZES.width - 80, height: 250}}
        resizeMode="contain"
      />
      <View
        style={{
          backgroundColor: '#A45EE9',
          height: 300,
          width: 460,
          borderTopLeftRadius: 150,
          borderBottomRightRadius: 150,
          borderTopRightRadius: 150,
          borderBottomLeftRadius: 150,
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
          Welcome Back!
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 25,
          }}>
          Please Login to your account
        </Text>

        <KeyboardAvoidingView>
          <TextInput
            placeholder="Enter Your Phone Number"
            placeholderTextColor={'black'}
            style={{
              borderRadius: 60,
              color: 'black',
              paddingHorizontal: 100,
              width: '80%',
              backgroundColor: 'rgb(220,220,220)',
              marginVertical: 10,
            }}
            keyboardType="numeric"
            onChangeText={value => setnumber(10)}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor={'black'}
            style={{
              borderRadius: 60,
              color: 'black',
              paddingHorizontal: 120,
              width: '80%',
              backgroundColor: 'rgb(220,220,220)',
              marginVertical: 10,
            }}
            keyboardType="numeric"
            onChangeText={value => setnumber(5)}
          />
        </KeyboardAvoidingView>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Forget')}>
          <Text
            style={{
              color: '#A45EE9',
              fontWeight: 'bold',
              paddingTop: 15,
              fontSize: 18,
            }}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <View style={{marginTop: 35}}>
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
            onPress={() => navigation.navigate('Home')}>
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{position: 'absolute', bottom: 25}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Dont't have an account?{' '}
          <TouchableOpacity>
            <Text
              style={{color: '#A45EE9', fontWeight: 'bold', fontSize: 16}}
              onPress={() => navigation.navigate('Signup')}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
