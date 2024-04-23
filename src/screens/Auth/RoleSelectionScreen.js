import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RoleSelectionScreen = ({ navigation }) => {
  const handleRoleSelect = (role) => {
    // Navigate to the appropriate signup screen based on the selected role
    navigation.navigate('Signup', { role });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => handleRoleSelect('patient')}
      >
        <Text style={styles.buttonText}>Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => handleRoleSelect('doctor')}
      >
        <Text style={styles.buttonText}>Doctor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  roleButton: {
    backgroundColor: '#00B4FE',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RoleSelectionScreen;
