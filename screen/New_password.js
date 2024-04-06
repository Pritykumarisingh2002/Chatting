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
  const New_password = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FCFCFC',
            maxHeight: SIZES.height,
          }}>
            <Image
        source={require('../Images/Reset.jpg')}
        style={{width: SIZES.width - 80, height: 250}}
        resizeMode="contain"
      />
      <View style={{
          backgroundColor: '#A45EE9',
          height: 300,
          width: 460,
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
         Reset Password
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 25,
          }}>
          Please Enter Your New Password.
        </Text>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Enter Your New Password"
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
            onChangeText={value => setnumber(value)}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Confirm Your New Password"
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
            onChangeText={value => setnumber(value)}
          />
        </KeyboardAvoidingView>
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
              marginTop: 40
            }}
            onPress={() => navigation.navigate('Home')}>
            Continue
          </Text>
        </View>
      </TouchableOpacity>

      </View>

        </View>


  
  );
};
export default New_password;
const styles = StyleSheet.create({})