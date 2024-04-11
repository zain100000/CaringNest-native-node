import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserHome from '../../screens/UserModule/UserHome';
import ContactForm from '../../screens/UserModule/forms/ContactForm';
import ScheduleForm from '../../screens/UserModule/forms/ScheduleForm';
import ReferralForm from '../../screens/UserModule/forms/ReferralForm';

const Tab = createBottomTabNavigator();

const UserBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: true,
        tabBarLabel: '',
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 5,
          color: '#fff',
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          height: 55,
          paddingTop: 5,
          backgroundColor: '#00bcd4',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#fff',
          fontSize: 25,
          fontFamily: 'Roboto-Bold',
        },
        headerStyle: {
          backgroundColor: '#00bcd4',
          height: 65,
        },
      })}>
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            color: '#fff',
            fontFamily: 'Roboto-Medium',
            bottom: 3,
          },
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home-outline' : 'home-outline'}
              color={focused ? '#fff' : '#000'}
              size={30}
            />
          ),
        }}
        name="Home"
        component={UserHome}
      />

      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            color: '#fff',
            fontFamily: 'Roboto-Medium',
            bottom: 3,
          },
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'person-add' : 'person-add'}
              color={focused ? '#fff' : '#000'}
              size={30}
            />
          ),
        }}
        name="Referral Form"
        component={ReferralForm}
      />

      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            color: '#fff',
            fontFamily: 'Roboto-Medium',
            bottom: 3,
          },
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'time' : 'time'}
              color={focused ? '#fff' : '#000'}
              size={30}
            />
          ),
        }}
        name="Schedule Tour"
        component={ScheduleForm}
      />

      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            color: '#fff',
            fontFamily: 'Roboto-Medium',
            bottom: 3,
          },
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'phone-portrait' : 'phone-portrait'}
              color={focused ? '#fff' : '#000'}
              size={30}
            />
          ),
        }}
        name="Contact Us"
        component={ContactForm}
      />
    </Tab.Navigator>
  );
};

export default UserBottomNavigator;
