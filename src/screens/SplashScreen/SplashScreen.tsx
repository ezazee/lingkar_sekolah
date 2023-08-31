import {ImageBackground, Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {LogoLingkar, BgSekolah} from '../../assets/images/img';
import {WARNA} from '../../utils/theme';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding', 'Login');
    }, 2000);
  }, [navigation]);
  return (
    <ImageBackground source={BgSekolah} resizeMode="cover" style={s.container}>
      <View style={s.backContainer}>
        <Image source={LogoLingkar} style={s.imageLogo} />
      </View>
    </ImageBackground>
  );
};

const s = StyleSheet.create({
  imageLogo: {
    width: 235,
    height: 145,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 500,
    backgroundColor: WARNA.WhiteRGBA50,
  },
});

export default SplashScreen;
