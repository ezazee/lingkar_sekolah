import React from 'react';
import {HomeScreen, TaskScreen, AboutScreen, InfoScreen} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {StyleComponent} from '../../utils/style';
import Icon from 'react-native-vector-icons/Ionicons';
import {WARNA, SPASI, FONT} from '../../utils/theme';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  const renderTabIcon = (name: string, focused: boolean, color: string) => {
    return (
      <View
        style={focused ? StyleComponent.activeTabBackgroundNavigator : null}>
        <Icon name={name} color={focused ? WARNA.Primary : color} size={23} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: WARNA.Primary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: FONT.poppins_regular,
          height: SPASI.spasi_24,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          height: SPASI.spasi_10 * 6,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
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
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            renderTabIcon('information-circle-outline', focused, color),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
