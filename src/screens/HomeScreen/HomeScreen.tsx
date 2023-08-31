import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Userpic} from 'react-native-userpic';
import {WARNA, FONT, SIZE, RADIUS} from '../../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderSwiper, FeatureBox} from '../../components';
import axios from 'axios';

const TopBar = () => {
  const [avatarUrl, setAvatarUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAvatar() {
      try {
        const response = await axios.get(
          'https://64ee9301219b3e2873c354a9.mockapi.io/APIAvatar',
        );
        setAvatarUrl(response.data.avatarUrl);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching API Avatar:', error);
        setIsLoading(false);
      }
    }
    fetchAvatar();
  }, []);

  return (
    <View style={s.topBar}>
      <View>
        {isLoading ? (
          <ActivityIndicator color={WARNA.Primary} />
        ) : (
          <Userpic size={35} source={avatarUrl} />
        )}
      </View>
      <View style={s.textContainer}>
        <Text style={s.textTopBar}>Welcome</Text>
        <Text style={s.textBotBar}>Iqbal Ali Mirza</Text>
      </View>
      <TouchableHighlight style={s.iconTop}>
        <Icon style={s.iconTop} name="notifications" size={20} color="#000" />
      </TouchableHighlight>
    </View>
  );
};

const HomeScreen = () => {
  const images = [
    require('../../assets/images/banner_slide.png'),
    require('../../assets/images/banner_slide2.png'),
  ];
  return (
    <ScrollView>
      <View style={s.container}>
        <TopBar />
        <SliderSwiper images={images} />
        <View style={s.containerFeature}>
          <FeatureBox nameFeature="Presence" nameIcon="map-outline" />
          <FeatureBox nameFeature="E-Learning" nameIcon="book" />
          <FeatureBox nameFeature="Digital Wallet" nameIcon="wallet" />
          <FeatureBox nameFeature="Report" nameIcon="stats-chart-sharp" />
          <FeatureBox nameFeature="Students" nameIcon="people" />
          <FeatureBox nameFeature="Calendar" nameIcon="calendar" />
          <FeatureBox nameFeature="Library" nameIcon="library" />
          <FeatureBox nameFeature="Shop" nameIcon="cart" />
        </View>
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F5FFF7',
    display: 'flex',
    flex: 1,
  },
  topBar: {
    width: '100%',
    height: 80,
    display: 'flex',
    paddingVertical: 25,
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 10,
  },
  textTopBar: {
    color: WARNA.Primary,
    fontFamily: FONT.poppins_semibold,
    fontSize: SIZE.size_12,
  },
  textBotBar: {
    color: WARNA.Primary,
    fontFamily: FONT.poppins_semibold,
    fontSize: SIZE.size_14,
  },
  iconTop: {
    marginLeft: 'auto',
  },
  containerFeature: {
    display: 'flex',
    justifyContent: 'space-between',
    elevation: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    width: '100%',
    height: 210,
    backgroundColor: WARNA.White,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopLeftRadius: RADIUS.radius_15,
    borderTopRightRadius: RADIUS.radius_15,
  },
});

export default HomeScreen;
