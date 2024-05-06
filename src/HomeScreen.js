import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ route }) => {
  const { userData } = route.params;

  return (
    <View>
      {userData && userData.firstName ? (
        <Text>Welcome, {userData.firstName}!</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default HomeScreen;
