import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/HomeScreen';
import MovieDetailScreen from '../../screens/MovieDetailScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'home'} component={Home} />
      <Stack.Screen name={'movieDetail'} component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
