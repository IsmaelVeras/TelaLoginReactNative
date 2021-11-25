import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/Login';


const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen 
      name="Login" 
      component={Login} 
      options={{
        headerShown: false
      }}
    />

    <AppStack.Screen 
      name="Home" 
      component={Home} 
      options={{
        headerShown: true,
        headerTitle: "Tela Principal",
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0, //remove shadow on Android
          shadowOpacity: 0, //remove shadow on iOS
        },
        headerTintColor: '#000',
      }}
    />


  </AppStack.Navigator>
)

export default AppRoutes;