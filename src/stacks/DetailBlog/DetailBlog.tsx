import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {StyleScreen, StyleStack} from '../../utils/style';
import {format} from 'date-fns';
import axios from 'axios';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {apiBlog} from '../../api';
import {HorizontalFlatList, SliderBlog} from '../../components';

const data = [
  {id: '1', text: 'Item 1', isActive: true},
  {id: '2', text: 'Item 2'},
  {id: '3', text: 'Item 3'},
  {id: '4', text: 'Item 4'},
  {id: '5', text: 'Item 5'},
];

interface BlogItem {
  id: number;
  createdAt: any;
  nameBlog: string;
  desc: string;
  thumbBlog: string;
  category: string;
}

const DetailBlog = () => {
  const [blogData, setBlogData] = useState<BlogItem[]>([]);
  const route = useRoute();

  const fetchDataBlog = async () => {
    try {
      const response = await axios.get<BlogItem[]>(apiBlog);
      setBlogData(response.data);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchDataBlog();
    }, []),
  );

  // Ambil ID blog dari params rute
  const {blogId} = route.params;

  // Cari blog yang sesuai dengan ID yang dipilih
  const selectedBlog = blogData.find(blog => blog.id === blogId);

  if (!selectedBlog) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        size={50}
      />
    );
  }

  return (
    <ScrollView style={StyleStack.bgColorDetail}>
      <View style={StyleStack.containerDetailBlog}>
        <Text style={StyleStack.judulTextStyle}>{selectedBlog.nameBlog}</Text>
        <View style={StyleStack.containerCategoryDate}>
          <View style={StyleStack.wrapperCategory}>
            <Text style={StyleStack.categoryText}>{selectedBlog.category}</Text>
          </View>
          <Text style={StyleStack.dateText}>
            {format(new Date(selectedBlog.createdAt), 'dd MMMM yyyy')}
          </Text>
        </View>
        <Image
          source={{uri: selectedBlog.thumbBlog}}
          style={StyleStack.imageDetail}
        />
        <Text style={StyleStack.textDesc}>{selectedBlog.desc}</Text>
      </View>
      <Text style={StyleStack.textBeritaTerkait}>Berita Terkait</Text>
      <HorizontalFlatList data={data} />
      <View style={StyleScreen.containerBlogHome}>
        <FlatList
          data={blogData}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <SliderBlog
              id={item.id}
              nameBlog={item.nameBlog}
              desc={item.desc}
              thumbBlog={item.thumbBlog}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default DetailBlog;
