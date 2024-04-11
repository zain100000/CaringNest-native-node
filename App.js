import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Splash from './src/components/screens/Splash';
import UserBottomNavigator from './src/components/navigation/UserNavigation/UserBottomNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#000'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="UserHome" component={UserBottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
