import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import {Userpic} from 'react-native-userpic';
import {
  FeatureBox,
  SliderBlog,
  SliderSchedule,
  SliderSwiper,
} from '../../components';
import {StyleScreen, StyleComponent} from '../../utils/style';
import {BannerSlide, BannerSlide2} from '../../assets/images/img';
import {apiProfile} from '../../api';
import {format} from 'date-fns';
import Swiper from 'react-native-swiper';

const TopBar = () => {
  const [avatarUrl, setAvatarUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAvatar = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiProfile);
      setAvatarUrl(response.data.avatarUrl);
    } catch (error) {
      console.error('Error fetching API Avatar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAvatar();
    }, []),
  );

  return (
    <View style={StyleScreen.topBarHome}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Userpic size={35} source={avatarUrl} />
        )}
      </View>
      <View style={StyleScreen.textContainerHome}>
        <Text style={StyleScreen.textTopBarHome}>Welcome</Text>
        <Text style={StyleScreen.textBotBarHome}>Iqbal Ali Mirza</Text>
      </View>
      <TouchableHighlight style={StyleScreen.iconTopHome}>
        <Icon
          style={StyleScreen.iconTopHome}
          name="notifications"
          size={20}
          color="#000"
        />
      </TouchableHighlight>
    </View>
  );
};

const HomeScreen = () => {
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
            <SliderSchedule />
            <SliderSchedule />
          </Swiper>
        </View>
        {/* Swiper Blog Component */}
        <View style={StyleScreen.containerBlogHome}>
          <Swiper
            loadMinimal={true}
            showsPagination={false}
            style={StyleComponent.wrapper}
            loop={false}>
            <SliderBlog />
            <SliderBlog />
          </Swiper>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
