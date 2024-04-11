import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';

const ReferralForm = () => {
  const navigation = useNavigation();
  const [makingFirstName, setMakingFirstName] = useState('');
  const [makingLastName, setMakingLastName] = useState('');
  const [makingEmail, setMakingEmail] = useState('');
  const [makingMobile, setMakingMobile] = useState('');
  const [relation, setRelation] = useState('');
  const [selectedWaiver, setSelectedWaiver] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedAccessiblity, setSelectedAccessibility] = useState('');
  const [services, setServices] = useState('');
  const [selectedCustomServices, setSelectedCustomServices] = useState('');
  const [referredPersonFirstName, setReferredPersonFirstName] = useState('');
  const [referredPersonLastName, setReferredPersonLastName] = useState('');
  const [referredPersonEmail, setReferredPersonEmail] = useState('');
  const [referredPersonMobile, setReferredPersonMobile] = useState('');
  const [needs, setNeeds] = useState('');
  const [behaviour, setBehaviour] = useState('');
  const [physical, setPhysical] = useState('');
  const [selectedFacilities, setSelectedFacilities] = useState('');
  const [selectedStaffingSupport, setSelectedStaffingSupport] = useState('');
  const [selectedParticipating, setSelectedParticipating] = useState('');
  const [selectedSafety, setSelectedSafety] = useState('');
  const [uniqueNeeds, setUniqueNeeds] = useState('');
  const [additionalDocs, setAdditionalDocs] = useState('');
  const [initials, setInitials] = useState('');
  const [terms, setTerms] = useState('');
  const [loading, setLoading] = useState(false);

  // Declare and initialize refs
  const makingFirstNameRef = useRef();
  const makingLastNameRef = useRef();
  const makingEmailRef = useRef();
  const makingMobileRef = useRef();

  const ValidInput = () => {
    const makingFirstNamePattern = /^[a-zA-Z\s]*$/;
    const makingLastNamePattern = /^[a-zA-Z\s]*$/;
    const makingEmailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const makingMobilePattern = /^(\+92|92|0)(3\d{2}|\d{2})(\d{7})$/;

    return (
      makingFirstNamePattern.test(makingFirstName) &&
      makingLastNamePattern.test(makingLastNamePattern) &&
      makingEmailPattern.test(makingEmailPattern) &&
      makingMobilePattern.test(makingMobilePattern)
    );
  };

  const validateMakingFirstName = () => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!makingFirstName.match(regex)) {
      return 'Special Characters Not Allowed';
    }
    return '';
  };
  const makingFirstNameError = validateMakingFirstName();

  const validateMakingLastName = () => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!makingLastName.match(regex)) {
      return 'Special Characters Not Allowed';
    }
    return '';
  };
  const makingLastNameError = validateMakingLastName();

  const handleMakingMobileChange = value => {
    setMakingMobile(value);
  };
  const validateMakingMobile = () => {
    if (!makingMobile) {
      return '';
    }
    const makingMobile = /^(\+92|92|0)(3\d{2}|\d{2})(\d{7})$/;
    if (!makingMobile.test(makingMobile)) {
      return 'Invalid Cell Format';
    }
    return '';
  };
  const makingMobileError = validateMakingMobile();

  const handleMakingEmailChange = value => {
    setMakingEmail(value);
  };
  const validateMakingEmail = () => {
    if (!makingEmail) {
      return '';
    }
    const makingEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!makingEmail.test(makingEmail)) {
      return 'Invalid Email Format';
    }
    return '';
  };
  const makingEmailError = validateMakingEmail();

  const clearFields = () => {
    setMakingFirstName('');
    setMakingLastName('');
    setMakingEmail('');
    setMakingMobile('');
    setRelation('');
    setSelectedWaiver('');
    setSelectedAge('');
    setSelectedAccessibility('');
    setServices('');
    setSelectedCustomServices('');
    setReferredPersonFirstName('');
    setReferredPersonLastName('');
    setReferredPersonEmail('');
    setReferredPersonMobile('');
    setNeeds('');
    setBehaviour('');
    setPhysical('');
    setSelectedFacilities('');
    setSelectedStaffingSupport('');
    setSelectedParticipating('');
    setSelectedSafety('');
    setUniqueNeeds('');
    setAdditionalDocs('');
    setInitials('');
    setTerms('');
  };

  const handleReferralForm = async e => {
    if (!makingFirstName) {
      alert('First Name Field is empty');
      makingFirstNameRef.current.focus();
      return;
    }
    if (!makingLastName) {
      alert('Last Name field is empty');
      makingLastNameRef.current.focus();
      return;
    }
    if (!makingEmail) {
      alert('Email field is empty');
      makingEmailRef.current.focus();
      return;
    }
    if (!makingMobile) {
      alert('Mobile field is empty');
      makingMobileRef.current.focus();
      return;
    }
    if (!initials) {
      alert('Initials field is empty');
      return;
    }
    if (!terms) {
      alert('Please Agreed To The Terms');
      return;
    }
    try {
      setLoading(true);
      const referralFormData = new FormData();

      referralFormData.append('makingFirstName', makingFirstName);
      referralFormData.append('makingLastName', makingLastName);
      referralFormData.append('makingEmail', makingEmail);
      referralFormData.append('makingMobile', makingMobile);
      referralFormData.append('relation', relation);
      referralFormData.append('waiver', selectedWaiver);
      referralFormData.append('age', selectedAge);
      referralFormData.append('accessibility', selectedAccessiblity);
      referralFormData.append('services', services);
      referralFormData.append('customServices', selectedCustomServices);
      referralFormData.append(
        'referredPersonFirstName',
        referredPersonFirstName,
      );
      referralFormData.append('referredPersonLastName', referredPersonLastName);
      referralFormData.append('referredPersonEmail', referredPersonEmail);
      referralFormData.append('referredPersonMobile', referredPersonMobile);
      referralFormData.append('needs', needs);
      referralFormData.append('behaviour', behaviour);
      referralFormData.append('physical', physical);
      referralFormData.append('facilities', selectedFacilities);
      referralFormData.append('staffingSupport', selectedStaffingSupport);
      referralFormData.append('participating', selectedParticipating);
      referralFormData.append('safety', selectedSafety);
      referralFormData.append('uniqueNeeds', uniqueNeeds);
      if (additionalDocs && additionalDocs.length > 0) {
        referralFormData.append('additionalDocs', {
          uri: additionalDocs[0],
          type: 'image/jpeg',
          name: 'doc.jpg',
        });
      }
      referralFormData.append('initials', initials);
      referralFormData.append('terms', terms);

      const referralFormApiUrl =
        'https://caring-nest-deployment-server.onrender.com/api/referral/createReferralForm';
      const response = await axios.post(referralFormApiUrl, referralFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        alert('Thank You! Your Referral Form Has Been Submitted Successfully!');
        clearFields();
        navigation.navigate('Home');
      } else {
        alert('Error saving data. Please try again later!');
      }
    } catch (error) {
      console.error('Error during Submitting Referral Form!', error);
      alert('An error occurred during Submitting Referral Form!');
    } finally {
      setLoading(false);
    }
  };

  const handlePickDocs = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images], // You can specify other types as needed
      });

      const uri = result[0].uri; // Get the URI of the selected document
      setAdditionalDocs([uri]); // Replace the existing sample array with the new URI
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // Handle cancel
      } else {
        // Handle other errors
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="flex-1 mt-5">
          {/* FullName */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="First Name(Individual Making Referral)"
              placeholderTextColor={'#539165'}
              value={makingFirstName}
              onChangeText={setMakingFirstName}
              ref={makingFirstNameRef}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>
          {makingFirstNameError ? (
            <Text
              className="text-red-600 text-sm left-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              {makingFirstNameError}
            </Text>
          ) : null}

          {/* Last Name */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Last Name(Individual Making Referral)"
              placeholderTextColor={'#539165'}
              value={makingLastName}
              onChangeText={setMakingLastName}
              ref={makingLastNameRef}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>
          {makingLastNameError ? (
            <Text
              className="text-red-600 text-sm left-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              {makingLastNameError}
            </Text>
          ) : null}

          {/* Email */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Email(Individual Making Referral)"
              placeholderTextColor={'#539165'}
              value={makingEmail}
              onChangeText={handleMakingEmailChange}
              ref={makingEmailRef}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>
          {makingEmailError ? (
            <Text
              className="text-red-600 text-sm left-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              {makingEmailError}
            </Text>
          ) : null}

          {/* Mobile */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Mobile(Individual Making Referral)"
              keyboardType="number-pad"
              placeholderTextColor={'#539165'}
              value={makingMobile}
              onChangeText={handleMakingMobileChange}
              ref={makingMobileRef}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>
          {makingMobileError ? (
            <Text
              className="text-red-600 text-sm left-3"
              style={{fontFamily: 'Roboto-Medium'}}>
              {makingMobileError}
            </Text>
          ) : null}

          {/* Relation */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="RelationShip with Referred Individual"
              placeholderTextColor={'#539165'}
              value={relation}
              onChangeText={setRelation}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Waiver */}
          <View className="flex-1">
            <Text
              className="text-[16px] left-3 text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Waiver Program
            </Text>
            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity
                onPress={() => setSelectedWaiver('CADI Waiver')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedWaiver === 'CADI Waiver' ? '● ' : '○ '}</Text>
                  CADI Waiver
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedWaiver('TBI Waiver')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedWaiver === 'TBI Waiver' ? '● ' : '○ '}</Text>
                  TBI Waiver
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity
                onPress={() => setSelectedWaiver('Elderly Waiver')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>
                    {selectedWaiver === 'Elderly Waiver' ? '● ' : '○ '}
                  </Text>
                  Elderly Waiver
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="w-32"
                onPress={() =>
                  setSelectedWaiver('Individual is not on waiver program')
                }>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>
                    {selectedWaiver === 'Individual is not on waiver program'
                      ? '● '
                      : '○ '}
                  </Text>
                  Individual is not on waiver program
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Age */}
          <View className="flex-1">
            <Text
              className="text-[16px] left-3 text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Is the recipient of service 55 Years of age and older?
            </Text>
            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity onPress={() => setSelectedAge('Yes')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedAge === 'Yes' ? '● ' : '○ '}</Text>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedAge('No')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedAge === 'No' ? '● ' : '○ '}</Text>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Accessbility */}
          <View className="flex-1">
            <Text
              className="text-[16px] left-3 text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Is the recipient of services in need of an accessible home (no
              stairs, shower accessibility, etc.)?
            </Text>
            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity onPress={() => setSelectedAccessibility('Yes')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedAccessiblity === 'Yes' ? '● ' : '○ '}</Text>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedAccessibility('No')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedAccessiblity === 'No' ? '● ' : '○ '}</Text>
                  No
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  setSelectedAccessibility('Yes, to a certain degree')
                }>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>
                    {selectedAccessiblity === 'Yes, to a certain degree'
                      ? '● '
                      : '○ '}
                  </Text>
                  Yes, to a certain degree
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Services */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Seeking What Types Of Services"
              placeholderTextColor={'#539165'}
              value={services}
              onChangeText={setServices}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Customized Services */}
          <View className="flex-1">
            <Text
              className="text-[16px] left-3 text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Is the recipient of services in need of 24-hour customized
              assisted living services?
            </Text>
            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity
                onPress={() => setSelectedCustomServices('Yes')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedCustomServices === 'Yes' ? '● ' : '○ '}</Text>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedAccessibility('No')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedCustomServices === 'No' ? '● ' : '○ '}</Text>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Referred FullName */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="First Name(Individual Being Referred)"
              placeholderTextColor={'#539165'}
              value={referredPersonFirstName}
              onChangeText={setReferredPersonFirstName}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Referred Last Name */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Last Name(Individual Being Referred)"
              placeholderTextColor={'#539165'}
              value={referredPersonLastName}
              onChangeText={setReferredPersonLastName}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Referred Email */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Email(Individual Making Referral)"
              placeholderTextColor={'#539165'}
              value={referredPersonEmail}
              onChangeText={setReferredPersonEmail}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Referred Mobile */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Mobile (Individual Being Referred)"
              keyboardType="number-pad"
              placeholderTextColor={'#539165'}
              value={referredPersonMobile}
              onChangeText={setReferredPersonMobile}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Needs */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Medical/Personal Needs"
              placeholderTextColor={'#539165'}
              value={needs}
              onChangeText={setNeeds}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Behaviour */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Behavioural Summary and Vulnerabilities"
              placeholderTextColor={'#539165'}
              value={behaviour}
              onChangeText={setBehaviour}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Physical */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Physical Summary"
              placeholderTextColor={'#539165'}
              value={physical}
              onChangeText={setPhysical}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Facilities */}
          <View className="flex-1">
            <Text
              className="text-[16px] left-3 text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Is the recipient of services currently living in an assisted
              living facility?
            </Text>
            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity onPress={() => setSelectedFacilities('Yes')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedFacilities === 'Yes' ? '● ' : '○ '}</Text>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedFacilities('No')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedFacilities === 'No' ? '● ' : '○ '}</Text>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Staffing */}
          <View className="flex-1">
            <Text
              className="text-[16px] left-3 text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Determine the staffing support needed.
            </Text>
            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity
                onPress={() => setSelectedStaffingSupport('1:1')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedStaffingSupport === '1:1' ? '● ' : '○ '}</Text>
                  1:1
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setSelectedStaffingSupport('1:2')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedStaffingSupport === '1:2' ? '● ' : '○ '}</Text>
                  1:2
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity
                onPress={() => setSelectedStaffingSupport('1:3')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedStaffingSupport === '1:3' ? '● ' : '○ '}</Text>
                  1:3
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setSelectedStaffingSupport('1:4')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedStaffingSupport === '1:4' ? '● ' : '○ '}</Text>
                  1:4
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Participating */}
          <View className="flex-1">
            <Text
              className="text-[16px] left-3 text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Is the recipient of services currently participating in a day
              program?
            </Text>
            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity onPress={() => setSelectedParticipating('Yes')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedParticipating === 'Yes' ? '● ' : '○ '}</Text>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedParticipating('No')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedParticipating === 'No' ? '● ' : '○ '}</Text>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Safety */}
          <View className="flex-1">
            <Text
              className="text-[16px] left-3 text-dark"
              style={{fontFamily: 'Roboto-Bold'}}>
              Does the recipient of services require visual safety checks during
              sleep hours?
            </Text>
            <View className="flex-row justify-around text-center mt-5">
              <TouchableOpacity onPress={() => setSelectedSafety('Yes')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedSafety === 'Yes' ? '● ' : '○ '}</Text>
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedSafety('No')}>
                <Text className="mb-5 text-[16px] left-3 text-dark">
                  <Text>{selectedSafety === 'No' ? '● ' : '○ '}</Text>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Unique Needs */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Unique Needs"
              placeholderTextColor={'#539165'}
              value={uniqueNeeds}
              onChangeText={setUniqueNeeds}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Additional Docs */}
          <View className="flex-1 flex-row p-5">
            {additionalDocs.length > 0 && (
              <Image
                source={{uri: additionalDocs[0]}}
                className="w-32 h-32 right-3 mr-3"
              />
            )}
          </View>

          {/* Additional Docs */}
          <View className="flex-row left-2 mb-5">
            <TouchableOpacity
              onPress={handlePickDocs}
              className="pl-5 pr-5 pt-4 pb-4 rounded-md bg-primary">
              <Text
                className="text-white text-[16px]"
                style={{fontFamily: 'Roboto-Bold'}}>
                Choose Additional Docs
              </Text>
            </TouchableOpacity>
          </View>

          {/* Initials */}
          <View className="border-b-2 border-b-gray-500 mb-3">
            <TextInput
              className="text-sm text-primary left-3"
              placeholder="Initials"
              placeholderTextColor={'#539165'}
              value={initials}
              onChangeText={setInitials}
              style={{fontFamily: 'Roboto-Medium'}}
            />
          </View>

          {/* Terms */}
          <View>
            <View className="left-3 mt-8">
              <Text
                className="text-primary text-lg"
                style={{fontFamily: 'Montserrat-SemiBold'}}>
                Terms
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="flex-row mb-3">
                <TouchableOpacity
                  onPress={() => {
                    setTerms(!terms);
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    marginTop: 15,
                  }}>
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      borderWidth: 2,
                      borderColor: '#539165',
                      marginRight: 10,
                      borderRadius: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {terms && <Text style={{color: '#539165'}}>&#10003;</Text>}
                  </View>
                  <Text
                    className="text-[16px] text-dark"
                    style={{fontFamily: 'Roboto-Medium'}}>
                    I declare that the information I've provided is accurate &
                    complete.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Button */}
          <TouchableOpacity
            className="flex-1 justify-center left-3 mb-5 mr-5 items-center mt-8 p-4 bg-primary rounded-xl"
            onPress={handleReferralForm}>
            {loading ? (
              <ActivityIndicator color={'#fff'} /> // Show loader while loading
            ) : (
              <Text
                className="text-white text-xl"
                style={{fontFamily: 'Roboto-Medium'}}>
                Submit
              </Text> // Show Submit text when not loading
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReferralForm;
