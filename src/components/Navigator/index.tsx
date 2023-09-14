import React from 'react';
import {HomeScreen, TaskScreen, ProfileScreen, InfoScreen} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import s from '../../utils/tailwind';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  const renderTabIcon = (name: string, focused: boolean, color: string) => {
    return (
      <View style={[s`${focused ? 'text-primary' : ''}`]}>
        <Icon name={name} color={focused ? '#064D3B' : color} size={23} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#064D3B',
        tabBarLabelStyle: s`text-sm font-bold h-10`,
        tabBarStyle: s`border-t-0 h-20 shadow-lg rounded-t-2xl`,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            renderTabIcon('home', focused, color),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            renderTabIcon('calendar-clear-outline', focused, color),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            renderTabIcon('chatbox-outline', focused, color),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            renderTabIcon('person-circle-outline', focused, color),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
