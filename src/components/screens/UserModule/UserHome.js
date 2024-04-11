import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from '../../othercomponents/Carousel/CarouselItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    title: 'Welcome to Caring Nest Home',
    description:
      'At Caring Nest Home LLC, we provide assisted living services that give your loved ones the perfect home and support to live a happy life.',
    imageUri: require('../../../assets/slider/slider1.jpg'),
  },
  {
    title: 'Welcome to Caring Nest Home',
    description:
      'At Caring Nest Home LLC, we provide assisted living services that give your loved ones the perfect home and support to live a happy life.',
    imageUri: require('../../../assets/slider/slider2.jpg'),
  },
];

const UserHome = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  renderItem = ({item}) => (
    <CarouselItem
      item={item}
      onPressButton1={() => console.log('Button 1 pressed')}
      onPressButton2={() => console.log('Button 2 pressed')}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Carousel */}
        <View className="h-96">
          <Carousel
            data={data}
            renderItem={this.renderItem}
            sliderWidth={500}
            itemWidth={500}
            autoplay={true}
            loop={true}
            onSnapToItem={index => setActiveSlide(index)}
            autoplayInterval={4000}
            animationType={'ease-in-out'}
          />
        </View>
        {/* Carousel */}

        {/* About Us */}
        <View className="flex-1 items-center">
          <View className="flex-1 items-center border-b-ternary border-4 border-t-0 border-l-0 border-r-0 mt-10">
            <Text
              className="text-[25px] text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              About Us
            </Text>
          </View>
          <Text
            className="text-gray-500 text-sm text-center top-3"
            style={{fontFamily: 'Roboto-Medium'}}>
            Caring Nest is a sanctuary for seniors seeking comfort and
            companionship in their twilight years. Nestled amidst serene
            surroundings, it provides a nurturing environment where residents
            are attended to with compassion and dignity. With personalized care
            plans tailored to individual needs, Caring Nest fosters a sense of
            belonging and security. Professional staff members are dedicated to
            enhancing the quality of life for every resident, offering a range
            of activities and amenities to promote well-being and fulfillment.
          </Text>
        </View>
        {/* About Us */}

        {/* Services */}
        <View className="flex-1 items-center">
          <View className="flex-1 items-center border-b-primary border-4 border-t-0 border-l-0 border-r-0 mt-10">
            <Text
              className="text-[25px] text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Our Services
            </Text>
          </View>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#4bbb6b', '#64b5f6']}
            className="items-center p-5 m-5 rounded-xl">
            <View className="mb-2">
              <AntDesign name="user" size={40} color="#000" />
            </View>
            <Text
              className="text-white text-[20px] text-center"
              style={{fontFamily: 'Roboto-Bold'}}>
              PERSONALIZED ATTENTION
            </Text>
            <Text
              className="text-white text-[16px] text-center top-3 mb-2"
              style={{fontFamily: 'Roboto-Medium'}}>
              We offer many services to assist our residents, including
              counseling, job search assistance, community access
            </Text>
          </LinearGradient>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#4bbb6b', '#64b5f6']}
            className="items-center p-5 m-5 rounded-xl">
            <View className="mb-2">
              <AntDesign name="user" size={40} color="#000" />
            </View>
            <Text
              className="text-white text-[20px] text-center"
              style={{fontFamily: 'Roboto-Bold'}}>
              REGISTERED NURSE SERVICE
            </Text>
            <Text
              className="text-white text-[16px] text-center top-3 mb-2"
              style={{fontFamily: 'Roboto-Medium'}}>
              Our registered nurses perform a variety of duties including
              Medication administration, taking vital signs.
            </Text>
          </LinearGradient>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#4bbb6b', '#64b5f6']}
            className="items-center p-5 m-5 rounded-xl">
            <View className="mb-2">
              <FontAwesome5 name="clipboard-check" size={40} color="#000" />
            </View>
            <Text
              className="text-white text-[20px] text-center"
              style={{fontFamily: 'Roboto-Bold'}}>
              MEDICAL DISTRIBUTION
            </Text>
            <Text
              className="text-white text-[16px] text-center top-3 mb-2"
              style={{fontFamily: 'Roboto-Medium'}}>
              At Caring Nest Home Care, we offer professional, reliable
              Medication Distribution services to all of our patients.
            </Text>
          </LinearGradient>
        </View>
        {/* Services */}

        {/* Extra Statement */}
        <View>
          <Text
            className="text-dark text-[20px] text-center top-3 mb-2 p-2"
            style={{fontFamily: 'Roboto-Medium'}}>
            We are dedicated to provide high quality care and a warm environment
            that you can call home.
          </Text>
        </View>
        {/* Extra Statement */}

        {/* Our Contact */}
        <View className="flex-1 items-center">
          <View className="flex-1 items-center border-b-ternary border-4 border-t-0 border-l-0 border-r-0 mt-10 mb-2">
            <Text
              className="text-[25px] text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Our Contact
            </Text>
          </View>

          <View className="flex-row justify-around items-center">
            <View className="p-3 items-center">
              <View className="p-3">
                <AntDesign name="mobile1" size={30} color={'#00bcd4'} />
              </View>
              <Text
                className="text-center text-gray-600"
                style={{fontFamily: 'Roboto-Medium'}}>
                612-451-1654
              </Text>
            </View>

            <View className="p-3 items-center top-2">
              <View className="p-3">
                <AntDesign name="mail" size={30} color={'#00bcd4'} />
              </View>
              <Text
                className="w-28 text-center text-gray-600"
                style={{fontFamily: 'Roboto-Medium'}}>
                caringnesthomehealth@gmail.com
              </Text>
            </View>

            <View className="p-3 items-center">
              <View className="p-3">
                <AntDesign name="enviroment" size={30} color={'#00bcd4'} />
              </View>
              <Text
                className="w-28 text-center text-gray-600"
                style={{fontFamily: 'Roboto-Medium'}}>
                Peshawar Road Rawalpindi
              </Text>
            </View>
          </View>
        </View>
        {/* Our Contact */}

        {/* Opening Hours */}
        <View className="flex-1 items-center">
          <View className="flex-1 items-center border-b-ternary border-4 border-t-0 border-l-0 border-r-0 mt-10 mb-2">
            <Text
              className="text-[25px] text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Opening Hours
            </Text>
          </View>

          <View className="flex-row justify-around items-center">
            <View className="p-5 w-48 items-center">
              <View className="p-3">
                <AntDesign name="clockcircle" size={30} color={'#00bcd4'} />
              </View>
              <Text
                className="text-center text-gray-600"
                style={{fontFamily: 'Roboto-Medium'}}>
                Monday-Thursday(9am - 5pm)
              </Text>
            </View>

            <View className="p-3 w-48 items-center">
              <View className="p-3">
                <AntDesign name="clockcircle" size={30} color={'#00bcd4'} />
              </View>
              <Text
                className="text-center text-gray-600"
                style={{fontFamily: 'Roboto-Medium'}}>
                Friday (8am - 4pm)(12pm - 1pm Break)
              </Text>
            </View>
          </View>

          <View className="flex-row justify-around items-center">
            <View className="p-5 w-48 items-center">
              <View className="p-3">
                <AntDesign name="clockcircle" size={30} color={'#00bcd4'} />
              </View>
              <Text
                className="text-center text-[18px] text-red-600"
                style={{fontFamily: 'Roboto-Bold'}}>
                Saturday(Closed)
              </Text>
            </View>

            <View className="p-3 w-48 items-center">
              <View className="p-3">
                <AntDesign name="clockcircle" size={30} color={'#00bcd4'} />
              </View>
              <Text
                className="text-center text-[18px] text-red-600"
                style={{fontFamily: 'Roboto-Bold'}}>
                Sunday(Closed)
              </Text>
            </View>
          </View>
        </View>
        {/* Opening Hours */}

        {/* Opening Hours */}
        <View className="flex-1 items-center">
          <View className="flex-1 items-center border-b-ternary border-4 border-t-0 border-l-0 border-r-0 mt-10 mb-2">
            <Text
              className="text-[25px] text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Waivers
            </Text>
          </View>

          <View className="flex-row justify-around items-center">
            <View className="p-5 gap-5 items-center">
              <Text
                className="text-center text-[18px] text-gray-600"
                style={{fontFamily: 'Roboto-Medium'}}>
                Community Access for Disability Inclusion (CADI)
              </Text>
              <Text
                className="text-center text-[18px] text-gray-600"
                style={{fontFamily: 'Roboto-Medium'}}>
                Elderly Waiver (EW)
              </Text>
              <Text
                className="text-center text-[18px] text-gray-600"
                style={{fontFamily: 'Roboto-Medium'}}>
                Brain Injury (BI)
              </Text>
            </View>
          </View>
        </View>
        {/* Opening Hours */}

        {/* Our Mission */}
        <View className="flex-1 items-center">
          <View className="flex-1 items-center border-b-ternary border-4 border-t-0 border-l-0 border-r-0 mt-10">
            <Text
              className="text-[25px] text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Our Mission
            </Text>
          </View>
          <Text
            className="text-gray-500 text-sm  text-center top-3 p-5"
            style={{fontFamily: 'Roboto-Medium'}}>
            Our Mission is to provide the best home health service to our
            clients where they can enjoy their freedom and a professional
            support service.
          </Text>
        </View>
        {/* Our Mission */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserHome;
