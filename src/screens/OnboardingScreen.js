import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as Font from 'expo-font';

const {width, height} = Dimensions.get('window');

Font.loadAsync({
  'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'), // Update the path accordingly
  'Montserrat': require('../../assets/fonts/Montserrat-Bold.ttf'), // Update the path accordingly
});


const COLORS = {primary: '#00B4FE', white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('../../assets/images/onboarding1.png'),
    title: `Welcome to
Pronex Health !!`,
    subtitle: `Experience the ease of scheduling appointments, consulting with healthcare professionals virtually, and get your medications to your door step`,
  },
  {
    id: '2',
    image: require('../../assets/images/onboarding2.png'),
    title: `Take Control of your 
Well-Being !!`,
    subtitle: `Access features tailored for you. Stay informed, connected, and in control of your health journey.`,
  },
  {
    id: '3',
    image: require('../../assets/images/onboarding3.png'),
    title: `Everything
from Home !!`,
    subtitle: `Experience healthcare at your fingertips. From virtual consultations to medicine delivery, get everything from home.`,
  },
  {
    id: '4',
    image: require('../../assets/images/get started.png'),
    title: 'Get Started',
    subtitle: 'Create your account and access expert healthcare services instantly.',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center', paddingTop: 20 }}>
      <Image
        source={item?.image}
        style={{ height: '60%', width, resizeMode: 'contain', marginTop: 50 }}
      />
      <View style={{ alignItems: 'flex-start', marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};


const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('HomeScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontFamily: 'poppins-regular',
    fontSize: 13,
    marginTop: 10,
    marginRight: 10,
    width: 298,
    height: 90,
    textAlign: 'justify',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontFamily: 'Montserrat', // Change the font family to 'Montserrat'
    fontSize: 28,
    marginTop: 10,
    textAlign: 'left',
  },
  image: {
    height: '85%',
    width: '90%',
    marginTop: 70,
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
    marginTop: 30,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;