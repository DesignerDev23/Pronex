// AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Onboarding/SplashScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import RoleSelectionScreen from '../screens/Auth/RoleSelectionScreen';
import SignupScreen from '../screens/Auth/SignupScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SelectRole" component={RoleSelectionScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
