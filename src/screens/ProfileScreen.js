import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons'; // Import Octicons
import CustomBottomTabBar from '../components/CustomBottomTabBar';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ProfileScreen = ({ route, navigation }) => {
  const { userData } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#00B4FE" />
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture}>
          {userData && userData.data.picture ? (
            <Image source={{ uri: userData.data.picture }} style={styles.profileImage} />
          ) : (
            <Text style={styles.profileInitial}>{userData?.data.firstName?.charAt(0)}</Text>
          )}
        </View>
        {userData && userData.data.firstName && (
          <Text style={styles.userName}>{userData.data.firstName} {userData.data.lastName}</Text>
        )}
      </View>
      <View style={styles.whiteContainer}>
        <ScrollView contentContainerStyle={styles.infoContainer} showsVerticalScrollIndicator={false}>
          {/* Manually define item containers */}
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
            </View>
            <Text style={styles.title}>Item 1</Text>
            <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
          </TouchableOpacity>
          {/* Add more item containers as needed */}
        </ScrollView>
      </View>
      <View style={styles.fixedBottom}>
        <CustomBottomTabBar navigation={navigation} route={route} userDataResponse={userData} />
      </View>
      <View style={styles.header}>
        <Octicons name="bell" size={24} color="#fff" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#00B4FE',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 95,
    height: 95,
    borderRadius: 53,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  profileInitial: {
    color: '#00B4FE',
    fontSize: 36,
    fontFamily: 'Montserrat',
  },
  userName: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'Montserrat',
  },
  whiteContainer: {
    flex: 1,
    borderTopLeftRadius: 30, // Border radius from the top-left corner
    borderTopRightRadius: 30, // Border radius from the top-right corner
    backgroundColor: '#FFFFFF', // White background color
    paddingHorizontal: 20, // Add horizontal padding as needed
    paddingTop: 20, // Add top padding as needed
  },
  infoContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Add bottom padding as needed
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  icon: {
    marginRight: 15,
    marginTop: -100,
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
  },
  
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 180, 254, 0.2)',
    borderRadius: 15,
    marginBottom: 10,
    height: 60,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 10,
    height: 40,
    width: 40,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 180, 254, 0.1)',
    borderRadius: 10, // Adjust the border radius as needed
  },
  
  title: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default ProfileScreen;
