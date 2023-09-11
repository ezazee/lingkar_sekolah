// components/Blog.tsx

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import {StyleComponent} from '../../utils/style';

interface BlogProps {
  id: number;
  nameBlog: string;
  desc: string;
  thumbBlog: string;
}

const Blog: React.FC<BlogProps> = ({id, nameBlog, desc, thumbBlog}) => {
  const navigation = useNavigation();
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'dd MMMM yyyy');

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailBlog', {blogId: id})}
      style={StyleComponent.boxBlog}>
      <Image source={{uri: thumbBlog}} style={StyleComponent.imageBlog} />
      <View style={StyleComponent.containerTextJudulBlog}>
        <View style={StyleComponent.wrapperTextJudulBlog}>
          <Text style={StyleComponent.textJudulBlog}>{nameBlog}</Text>
        </View>
        <Text style={StyleComponent.textCreatedAtBlog}>{formattedDate}</Text>
      </View>
      <View style={StyleComponent.containerTextDescBlog}>
        <Text
          style={StyleComponent.textDescBlog}
          numberOfLines={3}
          ellipsizeMode="tail">
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Blog;
