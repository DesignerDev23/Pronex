import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import authService from '../services/authService';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons from expo/vector-icons

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const userData = {
        email,
        password,
      };

      const response = await authService.signIn(userData);
      console.log(response); // Handle success or error response

      // Navigate to the home screen and pass user data as route parameters
      navigation.replace('HomeScreen', { userData: response });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')} // Replace 'bg.png' with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Welcome Back !!</Text>
          <Text style={styles.subheading}>Sign in back to your account and access expert healthcare services instantly.</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="email-outline" size={24} color="#00B4FE" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="lock-outline" size={24} color="#00B4FE" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: '60%',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 15,
    fontFamily: 'poppins-regular',
    color: '#fff',
    textAlign: 'left',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    width: '100%',
    height: '88%',
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
  loginButton: {
    backgroundColor: '#00B4FE',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
