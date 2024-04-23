import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import authService from '../services/authService';

const SignupScreen = ({ navigation, route }) => {
  const { role } = route.params;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone1: '',
    password: '',
    password_confirmation: '',
  });

  const handleSignup = async () => {
    try {
      const response = await authService.signUp({ ...formData, role });
      console.log(response); // Handle success or error response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up as {role}</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => setFormData({ ...formData, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setFormData({ ...formData, lastName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={(text) => setFormData({ ...formData, phone1: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setFormData({ ...formData, password_confirmation: text })}
        secureTextEntry
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
  input: {
    width: '80%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: '#00B4FE',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
