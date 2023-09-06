import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, OnboardingScreen} from '../screens';
import {TabNavigator} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkFirstLaunch() {
      try {
        const value = await AsyncStorage.getItem('isFirstLaunch');
        if (value === 'true') {
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
      }
    }
    checkFirstLaunch();
  }, []);

  return (
    <Stack.Navigator initialRouteName={isFirstLaunch ? 'Onboarding' : 'Login'}>
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
