import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import RevenueList from './RevenueList';
import ExpenditureList from './ExpenditureList';

const StackNavigation = createStackNavigator();

export default function MyNavigation() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#48B230',
          },
          title: '',
        }}
      >
        <StackNavigation.Screen name="Home" component={Home} />
        <StackNavigation.Screen name="RevenueList" component={RevenueList} />
        <StackNavigation.Screen name="ExpenditureList" component={ExpenditureList} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}