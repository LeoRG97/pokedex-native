import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigator from './Navigator';
import Tab2Screen from './Tab2';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 8 : 0,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS === 'ios') ? 80 : 60,
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        },
      }}
    >
      <Tab.Screen
        name="Navigator"
        component={Navigator}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => <Icon color={color} size={25} name="list-outline" />,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Búsqueda',
          tabBarIcon: ({ color }) => <Icon color={color} size={25} name="search-outline" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
