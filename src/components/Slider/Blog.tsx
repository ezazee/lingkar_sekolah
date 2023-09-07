import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleComponent} from '../../utils/style';
import {BgSekolah} from '../../assets/images/img';
import {format} from 'date-fns';

const Blog = ({onPress}: any) => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'dd MMMM yyyy');
  return (
    <TouchableOpacity onPress={onPress} style={StyleComponent.boxBlog}>
      <Image source={BgSekolah} style={StyleComponent.imageBlog} />
      <View style={StyleComponent.containerTextJudulBlog}>
        <View style={StyleComponent.wrapperTextJudulBlog}>
          <Text style={StyleComponent.textJudulBlog}>
            Anak-Anak Sekolah Mengeluh Soal Sekolah Online
          </Text>
        </View>
        <Text style={StyleComponent.textCreatedAtBlog}>{formattedDate}</Text>
      </View>
      <View style={StyleComponent.containerTextDescBlog}>
        <Text
          style={StyleComponent.textDescBlog}
          numberOfLines={3}
          ellipsizeMode="tail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam deserunt aperiam deserunt
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Blog;
