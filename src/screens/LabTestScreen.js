import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LabTestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Lab Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LabTestScreen;
