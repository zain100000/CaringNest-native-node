import React from 'react';
import {View, Text, Image} from 'react-native';

const CarouselItem = ({item}) => {
  return (
    <View className="flex-1">
      <Image
        source={item.imageUri}
        className="w-full h-full bg-cover object-cover"
      />
      <View className="absolute w-full h-full  justify-center left-5">
        <Text
          className="text-[30px] text-light mb-2 w-[350px] text-center"
          style={{fontFamily: 'Roboto-Bold'}}>
          {item.title}
        </Text>
        <Text
          className="text-[16px] text-gray-300 text-center w-[350px]"
          style={{fontFamily: 'Roboto-Bold'}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default CarouselItem;
