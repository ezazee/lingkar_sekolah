import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, OnboardingScreen} from '../screens';
import {TabNavigator} from '../components';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{headerShown: false, animation: 'default'}}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false, animation: 'default'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false, animation: 'default'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
