import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const ContactForm = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  // Declare and initialize refs
  const fullnameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();

  const formTranslateY = new Animated.Value(200);

  const animateScreen = () => {
    Animated.parallel([
      Animated.timing(formTranslateY, {
        toValue: 0,
        duration: 1500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  React.useEffect(() => {
    animateScreen();
  }, []);

  const clearFields = () => {
    setFullName('');
    setEmail('');
    setMobile('');
    setMessage('');
  };

  const handleContactForm = async () => {
    try {
      setLoading(true);
      const contactformData = {
        name: fullname,
        email,
        mobile,
        message,
      };

      const ContactformApiUrl =
        'https://caring-nest-deployment-server.onrender.com/api/contact/createContactForm';
      const response = await axios.post(ContactformApiUrl, contactformData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        alert('Thank You! Your Form Has Been Submitted!');
        clearFields();
        navigation.navigate('Home');
      } else {
        alert('Error Submitting Contact Form!');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Error during submitting contact form:', error); // Log any errors that occur
      alert('Error During Submitting Contact Form!');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true); // Start the refreshing indicator

    // Simulate a delay to show the refreshing indicator
    setTimeout(() => {
      // Clear the form by resetting the state variables
      setFullName('');
      setEmail('');
      setMobile('');
      setMessage('');
      setRefreshing(false);
    }, 2000); // Simulate a 2-second delay (adjust as needed)
  };

  return (
    <SafeAreaView className="flex-1 bg-dark">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <Animated.View
          style={[
            styles.container,
            {transform: [{translateY: formTranslateY}]},
          ]}>
          {/* Form Start */}

          <View className="flex-1 inset-y-0 mt-16 px-3">
            <View className="flex-row mb-5 border-b-2 border-b-white">
              <View className="mt-3">
                <AntDesign name="user" size={25} color={'#fff'} />
              </View>
              <TextInput
                className="text-sm px-5 text-white w-full"
                placeholder="Your Name"
                placeholderTextColor={'#fff'}
                value={fullname}
                onChangeText={setFullName}
                ref={fullnameRef}
                style={{fontFamily: 'Roboto-Medium'}}
              />
            </View>

            <View className="flex-row mb-5 border-b-2 border-b-white">
              <View className="mt-3">
                <AntDesign name="mail" size={25} color={'#fff'} />
              </View>
              <TextInput
                className="text-sm px-5 text-white w-full"
                keyboardType="email-address"
                placeholder="Your Email"
                placeholderTextColor={'#fff'}
                value={email}
                onChangeText={setEmail}
                ref={emailRef}
                style={{fontFamily: 'Roboto-Medium'}}
              />
            </View>

            <View className="flex-row mb-5 border-b-2 border-b-white">
              <View className="mt-3">
                <AntDesign name="mobile1" size={25} color={'#fff'} />
              </View>
              <TextInput
                className="text-sm px-5 text-white w-full"
                keyboardType="number-pad"
                placeholder="Your Phone"
                placeholderTextColor={'#fff'}
                value={mobile}
                onChangeText={setMobile}
                ref={mobileRef}
                style={{fontFamily: 'Roboto-Medium'}}
              />
            </View>

            <View className="flex-row mb-5 border-b-2 border-b-white">
              <View className="justify-center">
                <AntDesign name="message1" size={25} color={'#fff'} />
              </View>
              <TextInput
                className="text-sm px-5 text-light border-b-2 border-b-black w-full"
                placeholder="Message"
                placeholderTextColor="white"
                multiline={true}
                numberOfLines={6}
                value={message}
                onChangeText={setMessage}
                ref={messageRef}
                style={{fontFamily: 'Roboto-Medium'}}
              />
            </View>

            {/* Button Start */}
            <TouchableOpacity
              className="justify-center items-center rounded-lg p-3 mt-5 mb-5 bg-primary"
              onPress={handleContactForm}>
              {loading ? (
                <ActivityIndicator color={'#fff'} /> // Show loader while loading
              ) : (
                <Text
                  className="text-white text-xl"
                  style={{fontFamily: 'Roboto-Medium'}}>
                  Submit
                </Text> // Show login text when not loading
              )}
            </TouchableOpacity>
            {/* Button End */}
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
