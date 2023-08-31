import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const SliderSwiper = ({images}: any) => {
  return (
    <View>
      <Swiper
        height={160}
        style={s.wrapper}
        loop={true}
        showsPagination={false}>
        {images?.map((image: any, index: any) => (
          <TouchableOpacity key={index} style={s.slideContainer}>
            <Image source={image} style={s.image} />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {},
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  image: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
});

export default SliderSwiper;
