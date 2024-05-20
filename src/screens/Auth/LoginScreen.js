import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons from expo/vector-icons
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign from expo/vector-icons
import authService from '../services/authService';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../components/Loader';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    try {
      // Check if a token exists in AsyncStorage
      const token = await authService.getToken();
      if (token) {
        // Fetch user data using the stored token
        const userData = await authService.getUserData(token);
        // Navigate to the home screen with user data

        
        navigation.replace('HomeScreen', { userData });
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const handleSignIn = async () => {
    setLoading(true); // Show loader
    try {
      const userData = { email, password };
      const response = await authService.signIn(userData);
      const { token } = response; // Extract the token from the response
  
      // Fetch user data using the obtained token
      const userDataResponse = await authService.getUserData(token);
  
      // Store the token and user data in the session
      await authService.storeToken(token);
      await authService.storeUserData(userDataResponse);
  
      // Navigate to the home screen with user data
      navigation.replace('HomeScreen', { userData: userDataResponse });
    } catch (error) {
      console.error(error);
      Alert.alert('Login Error', 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false); // Hide loader
    }
  };
  
  

  const authenticateWithFingerprint = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync();
      if (result.success) {
        // Authentication successful, proceed with login
        handleSignIn();
      } else {
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')} // Replace 'bg.png' with your background image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      {loading && <Loader />}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#fff" style={{marginLeft: 5,}} />
        </TouchableOpacity>
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
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkbox}>
              {rememberMe ? (
                <MaterialCommunityIcons name="checkbox-marked" size={24} color="#00B4FE" />
              ) : (
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#00B4FE" />
              )}
              <Text style={styles.checkboxText}>Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>or Login With</Text>
            <View style={styles.separatorLine} />
          </View>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="facebook" size={24} color="#00B4FE" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="google" size={24} color="#00B4FE" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="apple" size={24} color="#00B4FE" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.fingerprintButton} onPress={authenticateWithFingerprint}>
            <MaterialCommunityIcons name="fingerprint" size={24} color="#00B4FE" />
            <Text style={styles.fingerprintText}>Sign in with fingerprint</Text>
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
  backButton: {
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    top: 10,
    left: 20,
    // backgroundColor: 'rgba(0, 255, 254, 0.19)',
    borderRadius: 10,
    padding: 4,
    zIndex: 1,
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
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'poppins-regular',
  },
  forgotPasswordText: {
    color: '#00B4FE',
    fontFamily: 'poppins-regular',
    fontSize: 13,
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
    fontFamily: 'poppins-regular',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#00B4FE',
    marginHorizontal: 10,
  },
  separatorText: {
    fontSize: 12,
    color: '#00B4FE',
    fontFamily: 'poppins-regular',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialButton: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#00B4FE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fingerprintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  fingerprintText: {
    marginLeft: 10,
    color: '#000',
    fontFamily: 'poppins-regular',
  },
});

export default LoginScreen;
