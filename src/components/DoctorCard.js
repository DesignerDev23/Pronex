import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const DoctorCard = () => {
  // Dummy data for doctors
  const doctors = [
    { id: 1, name: 'Dr. Musa Abdulkadir', specialization: 'Dentist' },
    { id: 2, name: 'Dr. Fatima Aliyu', specialization: 'Pediatrician' },
    { id: 3, name: 'Dr. Yusuf Ibrahim', specialization: 'Cardiologist' },
    { id: 4, name: 'Dr. Aisha Mohammed', specialization: 'Dermatologist' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.leftContainer}>
        <View style={styles.profilePicture}>
          <FontAwesome5 name="user-md" size={24} color="#fff" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.specialization}>{item.specialization}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.phoneButton}>
        <FontAwesome5 name="phone-alt" size={18} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={doctors}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    marginRight: 10,
    width: 290, // Adjust as needed
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    backgroundColor: '#00B4FE',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 14,
    color: '#777',
  },
  phoneButton: {
    backgroundColor: '#00B4FE',
    padding: 10,
    borderRadius: 10,
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
});

export default DoctorCard;
