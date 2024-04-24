// HomeScreen.js

import React from 'react';
import { View, Text } from 'react-native';


const HomeScreen = ({ route }) => {
  // Retrieve user data from route parameters
  const { userData } = route.params;

  // Assuming userData contains the user's name
  const userName = userData.firstName; // Update this based on the actual structure of userData

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {userName}!</Text>
      {/* Display other content of the home screen */}
    </View>
  );
};

export default HomeScreen;
