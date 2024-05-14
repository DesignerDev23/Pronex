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
      <View contentContainerStyle={styles.infoContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
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
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
      <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('ScreenName')}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="arrow-right" size={24} color="#00B4FE" />
      </View>
      <Text style={styles.title}>Item 2</Text>
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
    fontFamily: 'Montserrat',
  },
  infoContainer: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: -0,
    height: '100%',
  },
  scrollContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: -0,
    minHeight: '100%',
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
    marginTop: '-255%',
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 200,
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
