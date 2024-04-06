// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screen/Login';
import Signup from './screen/Signup';
import New_password from './screen/New_password';
import Verification from './screen/Verification';
import Form from './screen/Form';
import Verify from './screen/Verify';
import Forget from './screen/Forget';
import Bottom from './screen/Bottom';
import Home from './screen/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forget"
          component={Forget}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="New_password"
          component={New_password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={Bottom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        
        
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;