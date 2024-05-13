import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomBottomTabBar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={[styles.container, { bottom: 0 }]}>
      <TouchableOpacity onPress={() => navigateToScreen('HomeScreen')} style={styles.tab}>
        <Image source={require('../../assets/icons/home.png')} style={styles.icon} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('DoctorsScreen')} style={styles.tab}>
        <Image source={require('../../assets/icons/doctor.png')} style={styles.icon} />
        <Text style={styles.tabText}>Doctors</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('PharmacyScreen')} style={styles.tab}>
        <Image source={require('../../assets/icons/pharmacy.png')} style={styles.icon} />
        <Text style={styles.tabText}>Pharmacy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('MessagesScreen')} style={styles.tab}>
        <Image source={require('../../assets/icons/messages.png')} style={styles.icon} />
        <Text style={styles.tabText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('ProfileScreen')} style={styles.tab}>
        <Image source={require('../../assets/icons/profile.png')} style={styles.icon} />
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    flexDirection: 'row',
    width: '88%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00B4FE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    height: 80,
    top: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  tabText: {
    fontSize: 10,
    marginTop: 2,
    color: '#fff',
    fontFamily: 'Montserrat',
  },
});

export default CustomBottomTabBar;
