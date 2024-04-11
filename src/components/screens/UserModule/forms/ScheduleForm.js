import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const ScheduleForm = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [availTime, setAvailTime] = useState('');
  const [name, setName] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Declare and initialize refs
  const nameRef = useRef();
  const emailRef = useRef();
  const cellRef = useRef();

  const ValidInput = () => {
    const namePattern = /^[a-zA-Z\s]*$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const cellPattern = /^(\+92|92|0)(3\d{2}|\d{2})(\d{7})$/;

    return (
      namePattern.test(name) &&
      emailPattern.test(email) &&
      cellPattern.test(cell)
    );
  };

  const validateName = () => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!name.match(regex)) {
      return 'Special Characters Not Allowed';
    }
    return '';
  };
  const nameError = validateName();

  const handleCellChange = value => {
    setCell(value);
  };
  const validateCell = () => {
    if (!cell) {
      return '';
    }
    const cellRegex = /^(\+92|92|0)(3\d{2}|\d{2})(\d{7})$/;
    if (!cellRegex.test(cell)) {
      return 'Invalid Cell Format';
    }
    return '';
  };
  const cellError = validateCell();

  const handleEmailChange = value => {
    setEmail(value);
  };
  const validateEmail = () => {
    if (!email) {
      return '';
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Invalid Email Format';
    }
    return '';
  };
  const emailError = validateEmail();

  const clearFields = () => {
    setName('');
    setEmail('');
    setCell('');
    setDate('');
    setAvailTime('');
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleScheduleForm = async () => {
    if (!date) {
      alert('Date field is empty');
      return;
    }

    if (!availTime) {
      alert('Schedule Time field is empty');
      return;
    }
    if (!name) {
      alert('Fullname field is empty');
      nameRef.current.focus();
      return;
    }
    if (!email) {
      alert('Email field is empty');
      emailRef.current.focus();
      return;
    }
    if (!cell) {
      alert('Cell field is empty');
      cellRef.current.focus();
      return;
    }

    if (!ValidInput()) {
      alert('Please fill in the fields correctly');
      return;
    }

    try {
      setLoading(true);

      const scheduleData = {
        date: date,
        time: availTime,
        fullname: name,
        email: email,
        mobile: cell,
      };

      console.log(scheduleData);

      const scheduleFormApiUrl =
        'https://caring-nest-deployment-server.onrender.com/api/schedule/createScheduleForm';
      const response = await axios.post(scheduleFormApiUrl, scheduleData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        alert('Thank You! Your Schedule Has Been Booked!');
        clearFields();
        navigation.navigate('Home');
      } else {
        alert('Error saving data. Please try again later.');
      }
    } catch (error) {
      console.error('Error during schedule booking:', error);
      alert('An error occurred during schedule booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}>
        <View className="flex-1 mt-14">
          {/* Date */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                className="text-sm text-primary left-3"
                placeholder="DD/MM/YYYY"
                placeholderTextColor={'#539165'}
                value={date && date.toLocaleDateString()} // Check if date is defined before calling toLocaleDateString
                editable={false}
                style={{fontFamily: 'Roboto-Medium'}}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DatePicker
                style={{width: 200, marginLeft: 36}}
                value={date}
                mode="date"
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                minDate={new Date()} // Set minDate to today
                maxDate={new Date(2100, 0, 1)} // Set maxDate to 2100-01-01
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onChange={handleDateChange}
              />
            )}
          </View>

          {/* Schedule Time */}
          <View>
            <View className="mb-3 border-b-2 border-b-gray-500">
              <Picker
                selectedValue={availTime}
                onValueChange={text => setAvailTime(text)}
                style={{color: '#539165'}}>
                <Picker.Item
                  label="Select Available Time for Picking"
                  value=""
                  style={{color: '#539165', fontSize: 15, fontWeight: '800'}}
                />
                <Picker.Item
                  label="10AM"
                  value="10AM"
                  style={{color: '#539165', fontSize: 18, fontWeight: '800'}}
                />
                <Picker.Item
                  label="11AM"
                  value="11AM"
                  style={{color: '#539165', fontSize: 18, fontWeight: '800'}}
                />
                <Picker.Item
                  label="12PM"
                  value="12PM"
                  style={{color: '#539165', fontSize: 18, fontWeight: '800'}}
                />
                <Picker.Item
                  label="1PM"
                  value="1PM"
                  style={{color: '#539165', fontSize: 18, fontWeight: '800'}}
                />
                <Picker.Item
                  label="2PM"
                  value="2PM"
                  style={{color: '#539165', fontSize: 18, fontWeight: '800'}}
                />
                <Picker.Item
                  label="3PM"
                  value="3PM"
                  style={{color: '#539165', fontSize: 18, fontWeight: '800'}}
                />
                <Picker.Item
                  label="4PM"
                  value="4PM"
                  style={{color: '#539165', fontSize: 18, fontWeight: '800'}}
                />
                <Picker.Item
                  label="5PM"
                  value="5PM"
                  style={{color: '#539165', fontSize: 18, fontWeight: '800'}}
                />
              </Picker>
            </View>
          </View>

          {/* FullName */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Name"
              placeholderTextColor={'#539165'}
              value={name}
              onChangeText={setName}
              ref={nameRef}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>
          {nameError ? (
            <Text
              className="text-red-600 text-sm left-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              {nameError}
            </Text>
          ) : null}

          {/* Email */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Email"
              placeholderTextColor={'#539165'}
              value={email}
              onChangeText={handleEmailChange}
              ref={emailRef}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>
          {emailError ? (
            <Text
              className="text-red-600 text-sm left-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              {emailError}
            </Text>
          ) : null}

          {/* Mobile */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Mobile"
              keyboardType="number-pad"
              placeholderTextColor={'#539165'}
              value={cell}
              onChangeText={handleCellChange}
              ref={cellRef}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>
          {cellError ? (
            <Text
              className="text-red-600 text-sm left-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              {cellError}
            </Text>
          ) : null}

          {/* Button */}
          <TouchableOpacity
            className="flex-1 justify-center left-3 mb-5 mr-5 items-center mt-8 p-4 bg-primary rounded-xl"
            onPress={handleScheduleForm}>
            {loading ? (
              <ActivityIndicator color={'#fff'} /> // Show loader while loading
            ) : (
              <Text
                className="text-white text-xl"
                style={{fontFamily: 'Roboto-Medium'}}>
                Book Schedule
              </Text> // Show Submit text when not loading
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScheduleForm;
