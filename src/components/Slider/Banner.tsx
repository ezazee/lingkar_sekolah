import {TouchableOpacity, Image, View} from 'react-native';
import React, {memo} from 'react';
import Swiper from 'react-native-swiper';
import {StyleComponent} from '../../utils/style';

const SliderSwiper = ({images}: any) => {
  return (
    <View>
      <Swiper
        height={140}
        style={StyleComponent.wrapper}
        loop={true}
        showsPagination={false}>
        {images?.map((image: any, index: any) => (
          <TouchableOpacity
            key={index}
            style={StyleComponent.sliderBannerContainer}>
            <Image source={image} style={StyleComponent.imageBanner} />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

export default memo(SliderSwiper);
