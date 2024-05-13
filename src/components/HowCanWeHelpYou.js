import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HowCanWeHelpYou = () => {
  return (
    <View style={styles.container}>
      {/* Find a Doctor */}
      <View style={styles.itemContainer}>
        <Image source={require('../../assets/icons/Nurse.png')} style={styles.image} />
        <Text style={styles.title}>Find a Doctor</Text>
      </View>
      {/* Buy Medication */}
      <View style={styles.itemContainer}>
        <Image source={require('../../assets/icons/medication.png')} style={styles.image} />
        <Text style={styles.title}>Buy Medication</Text>
      </View>
      {/* Lab Test */}
      <View style={styles.itemContainer}>
        <Image source={require('../../assets/icons/lab.png')} style={styles.image} />
        <Text style={styles.title}>Lab Test</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 10,
  },
  itemContainer: {
    backgroundColor: 'rgba(0, 180, 254, 0.2)',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
    width: 45,
    height: 45,
    marginBottom: 10,
  },
  title: {
    fontSize: 10,
    color: '#333',
    fontFamily: 'poppins-regular',
  },
});

export default HowCanWeHelpYou;
