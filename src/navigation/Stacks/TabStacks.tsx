import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TabBar from './components/TabBar';

import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const BottomTab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      //   tabBar={props => <TabBar {...props} />}
    >
      <BottomTab.Screen name={'homeStack'} component={HomeStack} />

      <BottomTab.Screen name={'profileStack'} component={ProfileStack} />
    </BottomTab.Navigator>
  );
};

export default TabStack;
