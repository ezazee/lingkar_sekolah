import {ImageBackground, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {LogoLingkar, BgSekolah} from '../../assets/images/img';
import {StyleScreen} from '../../utils/style';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding', 'Login');
    }, 2000);
  }, [navigation]);
  return (
    <ImageBackground
      source={BgSekolah}
      resizeMode="cover"
      style={StyleScreen.containerSplash}>
      <View style={StyleScreen.backContainerSplash}>
        <Image source={LogoLingkar} style={StyleScreen.imageLogoSplash} />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
