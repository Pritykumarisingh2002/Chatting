import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Avatarp from '../component/Avatarp';
import Signup from './Signup';
let {height, width} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Profile = () => {
  return (
    <ScrollView>
    <View>
      <SafeAreaView>
        <Avatarp />
      </SafeAreaView>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 40, color: '#A45EE9'}}>Prity</Text>
      </View>
      <View
        style={{
          backgroundColor: '#A45EE9',
          height: 64,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 18, color: 'white'}}>Name</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: '#A45EE9',
          height: 64,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 18, color: 'white'}}>Email</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#A45EE9',
          height: 64,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 18, color: 'white'}}>Address</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#A45EE9',
          height: 64,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity>
          <Text style={{fontSize: 18, color: 'white'}}>Mobile No</Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#A45EE9',
              height: 64,
              borderRadius: 10,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 20,
              alignSelf: 'flex-end',
              marginRight: 30,
            }}>
            <Icon name="sign-out" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#A45EE9',
              height: 64,
              borderRadius: 10,
              marginLeft: 25,
              marginRight: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 18, color: 'white'}}>Change Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
