import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Loader from '../../components/Loader';

const VerifyOTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVerifyOTP = async () => {
    setLoading(true);
    try {
      // Perform OTP verification logic here
      setLoading(false);
      // If OTP verification is successful, navigate to the next screen
      navigation.navigate('NextScreen'); // Replace 'NextScreen' with the actual name of the screen
    } catch (error) {
      console.error('OTP verification error:', error);
      setError(error);
      setLoading(false);
      Alert.alert('Error', 'Failed to verify OTP. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {loading && <Loader />}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#fff" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Verify OTP</Text>
          <Text style={styles.subheading}>Enter the 6-digit OTP sent to your contact</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.otpContainer}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(text) => setOtp((prevOtp) => prevOtp + text)}
                value={otp[index - 1] || ''}
                autoFocus={index === 1}
                onFocus={() => setOtp('')}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
          {error && <Text style={styles.errorText}>Failed to verify OTP. Please try again.</Text>}
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    backgroundColor: '#fff',
    width: '14%',
    height: 50,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#00B4FE',
    borderWidth: 1,
  },
  verifyButton: {
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
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default VerifyOTPScreen;
