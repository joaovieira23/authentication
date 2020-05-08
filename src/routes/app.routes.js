import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const AppStack = createStackNavigator(); 

// import { Container } from './styles';

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name ="Dashboard" component={Dashboard}/>
  </AppStack.Navigator>
)

export default AppRoutes;