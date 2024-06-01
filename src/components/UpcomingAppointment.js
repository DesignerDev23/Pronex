import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import doctorProfileImage from '../../assets/images/doctor.png';

const UpcomingAppointment = () => {
  const upcomingAppointmentData = {
    doctorName: 'Dr. John Doe',
    specialty: 'Cardiologist',
    appointmentDate: 'April 30, 2024',
    appointmentTime: '10:00 AM',
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftContainer}>
          <View style={styles.backgroundCircle}>
          <Image
            style={styles.profilePicture}
            source={doctorProfileImage} // Use the imported image
          />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.doctorName}>{upcomingAppointmentData.doctorName}</Text>
            <Text style={styles.specialty}>{upcomingAppointmentData.specialty}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.phoneIconContainer}>
            <FontAwesome name="phone" size={20} color="#00B4FE" />
          </View>
        </View>
      </View>
      <View style={styles.dateTimeContainer}>
            <FontAwesome name="calendar" size={18} color="#00B4FE" style={styles.icon} />
            <Text style={styles.appointmentDateTime}>{upcomingAppointmentData.appointmentDate}</Text>
            <View style={styles.lineSeparator}></View>
            <FontAwesome name="clock-o" size={18} color="#00B4FE" style={styles.icon} />
            <Text style={styles.appointmentDateTime}>{upcomingAppointmentData.appointmentTime}</Text>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 9,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00B4FE',
    borderRadius: 20,
    width: '96%',
    padding: 15,
    marginLeft: 10,
    marginBottom: 10,
    height: 160, // Adjust the height as needed
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -60,
  },
  backgroundCircle: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 55,
    height: 55,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  textContainer: {
    marginLeft: 10,
  },
  doctorName: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Montserrat',
  },
  specialty: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'poppins-regular',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: -60,
  },
  phoneIconContainer: {
    backgroundColor: '#fff',
    borderRadius: 60,
    padding: 15,
    marginBottom: 10,
  },
  
  dateTimeContainer: {
    flexDirection: 'row',
    marginTop: -70,
    width: '83%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    paddingHorizontal: 15,
    marginLeft: 30,
    paddingVertical: 10,
  },
  appointmentDateTime: {
    fontSize: 10,
    color: '#00B4FE',
    flex: 1,
    marginLeft: 10,
    fontFamily: 'poppins-regular',
  },
  lineSeparator: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
});

export default UpcomingAppointment;
