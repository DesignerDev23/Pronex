import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import * as Font from 'expo-font';

Font.loadAsync({
  'poppins-regular': require('../../../assets/fonts/Poppins-Regular.ttf'), // Update the path accordingly
  'Montserrat': require('../../../assets/fonts/Montserrat-Bold.ttf'), // Update the path accordingly
});

const RoleSelectionScreen = ({ navigation }) => {
  const handleRoleSelect = (role) => {
    // Navigate to the appropriate signup screen based on the selected role
    navigation.navigate('Signup', { role });
  };

  return (
    <View style={styles.container}>
      {/* Set the background color for the status bar */}
      <StatusBar backgroundColor="#00B4FE" />

      {/* Title and Subtitle Container */}
      <View style={styles.titleContainer}>
        <Text style={styles.heading}>Select User</Text>
        <Text style={styles.subheading}>Choose your role and join Pronex Health as a doctor or patient. </Text>
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        {/* Login and Register Container */}
        <View style={styles.loginRegisterContainer}>
          <TouchableOpacity
            style={[styles.loginButton, styles.activeButton]}
            onPress={() => console.log('Login')}
          >
            <Text style={[styles.buttonText, styles.activeButtonText]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.registerButton, styles.inactiveButton]}
            onPress={() => console.log('Register')}
          >
            <Text style={[styles.buttonText, styles.inactiveButtonText]}>Register</Text>
          </TouchableOpacity>
        </View>

        {/* Patient and Doctor Buttons */}
        <View style={styles.roleButtonsContainer}>
          <TouchableOpacity
            style={[styles.roleButton]}
            onPress={() => handleRoleSelect('patient')}
          >
            <Text style={[styles.buttonText,  { color: '#00B4FE' }]}>Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton]}
            onPress={() => handleRoleSelect('doctor')}
          >
            <Text style={[styles.buttonText, { color: '#00B4FE' }]}>Doctor</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => console.log('Continue')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B4FE', // Set background color for the screen
  },
  titleContainer: {
    marginTop: -20,
    marginBottom: 20,
    paddingTop: 150, // Adjusted paddingTop for title and subtitle
    paddingHorizontal: 20, // Add padding for better spacing
    alignItems: 'flex-start', // Align items to the left
  },
  buttonsContainer: {
    flex: 1, // Fill the remaining space
    borderTopLeftRadius: 30, // Apply border radius to top corners
    borderTopRightRadius: 30,
    backgroundColor: '#fff', // Set white background color
    paddingHorizontal: 20, // Add padding for better spacing
    paddingTop: 20, // Add paddingTop for better spacing
    justifyContent: 'center', // Center buttons vertically
    alignItems: 'center', // Center buttons horizontally
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Montserrat', // Set Montserrat font family
    color: '#fff', // Set text color to white
    textAlign: 'left', // Align text to the left
  },
  subheading: {
    fontSize: 15,
    fontFamily: 'poppins-regular', // Set Poppins font family
    color: '#fff', // Set text color to white
    textAlign: 'left', // Align text to the left
  },
  loginRegisterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: -190,
    paddingHorizontal: 5,
    borderRadius: 19,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#00B4FE',
  },
  loginButton: {
    flex: 1,
    paddingVertical: 14,
    marginRight: 10,
    borderRadius: 15,
  },
  registerButton: {
    flex: 1,
    paddingVertical: 15,
    marginLeft: 10,
    borderRadius: 10,
  },
  roleButtonsContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    justifyContent: 'space-between', // Space evenly between buttons
    width: '100%', // Occupy the full width
    color: '#00B4FE', // Change TextColor to color
  },
  roleButton: {
    flex: 1,
    paddingVertical: 27,
    borderRadius: 10,
    borderColor: '#00B4FE',
    borderWidth: 1,
    marginBottom: 10,
    color: '#000', // Change text color to black
  },

  continueButton: {
    backgroundColor: '#00B4FE',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'stretch', // Stretch button to fill the width
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'poppins-regular',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activeButton: {
    backgroundColor: '#fff',
  },
  inactiveButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
  },
  activeButtonText: {
    color: '#00B4FE',
  },
  inactiveButtonText: {
    color: '#fff',
  },

  continueButtonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'poppins-regular',
    textAlign: 'center',
  },
});

export default RoleSelectionScreen;
