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
import {FeatureBox, SliderSchedule, SliderSwiper} from '../../components';
import {StyleScreen} from '../../utils/style';
import {BannerSlide, BannerSlide2} from '../../assets/images/img';

const TopBar = () => {
  const [avatarUrl, setAvatarUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAvatar = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        'https://64ee9301219b3e2873c354a9.mockapi.io/APIAvatar',
      );
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
  const images = [BannerSlide, BannerSlide2];
  return (
    <ScrollView>
      <View style={StyleScreen.containerHome}>
        <TopBar />
        <SliderSwiper images={images} />
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
        <View style={StyleScreen.containerScheduleHome}>
          <SliderSchedule />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
