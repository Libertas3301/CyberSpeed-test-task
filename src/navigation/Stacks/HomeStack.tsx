import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'home'} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
