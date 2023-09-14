import {TouchableOpacity, Image, View} from 'react-native';
import React, {memo} from 'react';
import Swiper from 'react-native-swiper';
import s from '../../utils/tailwind';

const SliderSwiper = ({images}: any) => {
  return (
    <View>
      <Swiper height={140} loop={true} showsPagination={false}>
        {images?.map((image: any, index: any) => (
          <TouchableOpacity
            key={index}
            style={s`flex-1 justify-center items-center px-3`}>
            <Image source={image} style={s`w-full h-full`} />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

export default memo(SliderSwiper);
