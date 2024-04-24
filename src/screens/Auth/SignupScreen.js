import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the MaterialCommunityIcons from react-native-vector-icons
import authService from '../services/authService';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

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
      navigation.navigate('Login'); // Redirect to LoginScreen after Signup
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')} // Replace 'bg.png' with your background image path
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Get Started</Text>
          <Text style={styles.subheading}>Create your account and access expert healthcare services instantly.</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={22} color="#00B4FE" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            />
          </View>
          <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={22} color="#00B4FE" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="email-outline" size={22} color="#00B4FE" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="phone" size={22} color="#00B4FE" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              onChangeText={(text) => setFormData({ ...formData, phone1: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock-outline" size={22} color="#00B4FE" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock-outline" size={22} color="#00B4FE" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={(text) => setFormData({ ...formData, password_confirmation: text })}
              secureTextEntry
            />
          </View>
          <Text style={styles.termsText}>By creating an account you agree to our Term of Use and Privacy Policy.</Text>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 180, 254, 0.99)',
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Montserrat',
    color: '#fff',
    textAlign: 'left',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 15,
    fontFamily: 'poppins-regular',
    color: '#fff',
    textAlign: 'left',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    height: '100%',
    paddingBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#00B4FE',
    borderWidth: 1,
    borderRadius: 15,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 15,
  },
  termsText: {
    fontSize: 12,
    fontFamily: 'poppins-regular',
    color: '#00B4FE',
    marginBottom: 10,
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#00B4FE',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 13,
    fontFamily: 'poppins-regular',
    color: '#00B4FE',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SignupScreen;
