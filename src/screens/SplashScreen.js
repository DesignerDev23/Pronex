import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000);
  }, []);

  return (
    <LinearGradient colors={['#00B4FE', '#00B4FE']} style={styles.container}>
      <View style={styles.middleContainer}>
        <Image source={require('../../assets/images/splash.png')} style={styles.largeLogo} />
      </View>
      <View style={styles.bottomContainer}>
        <Image source={require('../../assets/images/bt.png')} style={styles.smallLogo} />
        <Text style={styles.text}>Powered by Bigtech Agency LTD</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 140,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  largeLogo: {
    width: '87%',
    height: '87%',
    resizeMode: 'contain',
  },
  smallLogo: {
    width: 65,
    height: 45,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
