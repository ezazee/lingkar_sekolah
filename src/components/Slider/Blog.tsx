// components/Blog.tsx

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import s from '../../utils/tailwind';

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
      style={s`ml-2 w-70 h-60 bg-white shadow-lg rounded-md`}>
      <Image source={{uri: thumbBlog}} style={s`w-full h-35 rounded-md`} />
      <View style={s`flex-1 flex-row justify-center px-3 mb-2 mt-2`}>
        <View style={s`w-44`}>
          <Text style={s`font-bold text-primary text-base flex-1 flex-wrap`}>
            {nameBlog}
          </Text>
        </View>
        <Text style={s`font-semibold text-primary text-xs`}>
          {formattedDate}
        </Text>
      </View>
      <View style={s`px-2 mb-5`}>
        <Text
          style={s`font-light text-primary text-sm`}
          numberOfLines={3}
          ellipsizeMode="tail">
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Blog;
