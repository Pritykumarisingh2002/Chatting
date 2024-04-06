import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import {Icon} from '@rneui/themed';
import {Image} from 'react-native-elements';
let {height, width} = Dimensions.get('window')
const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {backgroundColor: '#A45EE9'},
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'white'
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../icons/home.png')}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"></Image>
              );
            },
          }}
        />
        <Tab.Screen
          name="Status"
          component={Status}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../Images/status.jpeg')}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"></Image>
              );
            },
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../Images/calls.jpg')}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"></Image>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../Images/profile.png')}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"></Image>
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
    
  );
};

export default Bottom;

const styles = StyleSheet.create({});