import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import {
  FeatureBox,
  SliderBlog,
  SliderSchedule,
  SliderSwiper,
  TopBar,
} from '../../components';
import {StyleScreen, StyleComponent} from '../../utils/style';
import {BannerSlide, BannerSlide2} from '../../assets/images/img';
import {apiBlog} from '../../api';
import {format} from 'date-fns';
import Swiper from 'react-native-swiper';

interface BlogItem {
  id: number;
  nameBlog: string;
  desc: string;
  thumbBlog: string;
}

const HomeScreen = () => {
  const [blogData, setBlogData] = React.useState<BlogItem[]>([]);
  const fetchDataBlog = async () => {
    try {
      const response = await axios.get<BlogItem[]>(apiBlog);
      setBlogData(response.data.slice(0, 7));
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchDataBlog();
    }, []),
  );

  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE, dd MMMM yyyy');
  const images = [BannerSlide, BannerSlide2];
  return (
    <ScrollView>
      <View style={StyleScreen.containerHome}>
        {/* TopBar Component */}
        <TopBar />
        {/* Swiper Image Banner Component */}
        <SliderSwiper images={images} />
        {/* Feature Component */}
        <View style={StyleScreen.containerFeatureHome}>
          <FeatureBox nameFeature="Presence" nameIcon="map-outline" />
          <FeatureBox nameFeature="E-Learning" nameIcon="book" />
          <FeatureBox nameFeature="Digital Wallet" nameIcon="wallet" />
          <FeatureBox nameFeature="Report" nameIcon="stats-chart-sharp" />
          <FeatureBox nameFeature="Students" nameIcon="people" />
          <FeatureBox nameFeature="Calendar" nameIcon="calendar" />
          <FeatureBox nameFeature="Library" nameIcon="library" />
          <FeatureBox nameFeature="Shop" nameIcon="cart" />
        </View>
        {/* Swiper Schedule Component */}
        <View style={StyleScreen.containerScheduleHome}>
          <View style={StyleComponent.containerTopSchedule}>
            <View style={StyleComponent.textContainerSchedule}>
              <Text style={StyleComponent.textTopBarSchedule}>Schedule</Text>
              <Text style={StyleComponent.textBotBarSchedule}>
                {formattedDate}
              </Text>
            </View>
            <TouchableHighlight style={StyleComponent.containerShowAll}>
              <Text style={StyleComponent.textShowAll}>Show All</Text>
            </TouchableHighlight>
          </View>
          <Swiper
            showsPagination={false}
            style={StyleComponent.wrapper}
            loop={false}>
            <SliderSchedule date={new Date(currentDate)} />
            <SliderSchedule date={new Date(2023, 5, 10)} />
          </Swiper>
        </View>
        {/* Swiper Blog Component */}
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
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
