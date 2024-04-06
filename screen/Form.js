import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import {SIZES} from '../constant/theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
let {height, width} = Dimensions.get('window')
const Form = ({navigation}) => {
  const [checkboxState, setCheckboxState] = useState(false);
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFCFC',
        maxHeight: SIZES.height,
        
      }}>
      <Image
        source={require('../Images/BG.jpg')}
        style={{width: SIZES.width - 80, height: 170, marginTop:20}}
        resizeMode="contain"
      />
      <ScrollView>
    <View
      style={{
        flex: 1,
        paddingBottom:50,
        justifyContent: 'center',
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: '#FCFCFC',
        maxHeight: SIZES.height,
      }}>
        <KeyboardAvoidingView>
      <Text style={{color: 'black', textAlign:'center', fontSize: 45, fontWeight: 'bold'}}>
        Fill out this form
      </Text>
      <Text
          style={{
            color: 'black',
            fontSize: 19,
            fontWeight: 'bold',
            textAlign:'center',
            marginBottom: 10,
          }}>
        Please complete your information
      </Text>
      <View style={{marginTop:50}}>
      <KeyboardAvoidingView>
        <TextInput
          placeholder="Enter Your First Name"
          placeholderTextColor={'#A45EE9'}
          style={{ borderRadius:15 ,borderWidth:2, fontWeight:'bold',fontSize: 17, textAlign:"center", paddingHorizontal: 100, borderColor:"#A45EE9", marginBottom:15}}></TextInput>
        <TextInput
          placeholder="Enter Your Last Name"
          placeholderTextColor={'#A45EE9'}
          style={{borderRadius:15,borderWidth:2, fontWeight:'bold',fontSize: 17, textAlign:"center", paddingHorizontal: 100, borderColor:"#A45EE9", marginBottom:15, align:'center'}}></TextInput>
          <TextInput
          placeholder="Enter Your Phone Number"
          placeholderTextColor={'#A45EE9'}
          style={{ borderRadius:15 ,borderWidth:2, fontWeight:'bold',fontSize: 17, textAlign:"center", paddingHorizontal: 100, borderColor:"#A45EE9", marginBottom:15}}></TextInput>
        <TextInput
          placeholder="Enter Your Email"
          placeholderTextColor={'#A45EE9'}
          style={{borderRadius:15,borderWidth:2, fontWeight:'bold',fontSize: 17, textAlign:"center", paddingHorizontal: 100, borderColor:"#A45EE9",marginBottom:15}}
          keyboardType="email-address"></TextInput>
        <TextInput
          placeholder="Enter a Password"
          placeholderTextColor={'#A45EE9'}
          style={{borderRadius:15,borderWidth:2, fontWeight:'bold',fontSize: 17, textAlign:"center", paddingHorizontal: 100, borderColor:"#A45EE9",marginBottom:15}}></TextInput>
      </KeyboardAvoidingView>
      </View>
      <View style={{marginTop:50}}>
      <BouncyCheckbox
        size={(25, 15)}
        fillColor="#A45EE9"
        unfillColor="#FFFFFF"
        text="By creating an account you agree to our terms."
        iconStyle={{borderColor: '#A45EE9'}}
        innerIconStyle={{borderWidth: 2, borderRadius: 0}}
        textStyle={{
          textDecorationLine: 'none',
          fontWeight:'bold',
          textAlign:'center'
          
          
        }}
        onPress={() => setCheckboxState(!checkboxState)}
        className="m-4"
      />
      </View>
      <View style={{marginTop:40}}>
      <TouchableOpacity className="">
        <Text
          style={{color: 'white', fontWeight: 'bold', textAlign:'center', fontSize: 30, paddingHorizontal: 100, borderRadius:15,borderWidth:2, borderColor:'white', backgroundColor:'#A45EE9'}}
          onPress={() => navigation.navigate('Home')}>
          Continue
        </Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
    </ScrollView>
   </View>

    
   
  );
};

export default Form;

const styles = StyleSheet.create({});
