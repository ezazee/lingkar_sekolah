import {View, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Ilus1, Ilus2, Ilus3, Ilus4} from '../../assets/images/img';
import {WARNA, SIZE, FONT} from '../../utils/theme';
import {MemoButtonPrimary} from '../../components';
import {StyleScreen} from '../../utils/style';

const OnboardingScreen = ({navigation}: any) => {
  return (
    <View style={StyleScreen.containerOnboarding}>
      <Onboarding
        showDone={false}
        showSkip={false}
        showNext={false}
        bottomBarHeight={100}
        bottomBarColor={WARNA.White}
        pages={[
          {
            backgroundColor: WARNA.White,
            image: (
              <Image source={Ilus4} style={StyleScreen.imageLogoOnboarding} />
            ),
            title: 'Perkenalkan Aplikasi LINGKAR SEKOLAH',
            subtitle: 'Memperkenalkan Aplikasi Lingkar Sekolah',
            titleStyles: {
              color: WARNA.Black,
              fontSize: SIZE.size_14 * 2,
              fontFamily: FONT.poppins_bold,
            },
            subTitleStyles: {
              paddingHorizontal: 10,
              color: WARNA.Black,
              fontSize: SIZE.size_18,
              fontFamily: FONT.poppins_medium,
            },
          },
          {
            backgroundColor: WARNA.White,
            image: (
              <Image source={Ilus1} style={StyleScreen.imageLogoOnboarding} />
            ),
            title: 'Integrasi Sistem Yang Baik',
            subtitle: 'Sistem Admin Sekolah Jadi Makin Gampang dan Akurat Lho!',
            titleStyles: {
              color: WARNA.Black,
              fontSize: SIZE.size_14 * 2,
              fontFamily: FONT.poppins_bold,
            },
            subTitleStyles: {
              paddingHorizontal: 10,
              color: WARNA.Black,
              fontSize: SIZE.size_18,
              fontFamily: FONT.poppins_medium,
            },
          },
          {
            backgroundColor: WARNA.White,
            image: (
              <Image source={Ilus2} style={StyleScreen.imageLogoOnboarding} />
            ),
            title: 'Bekerja Jadi Lebih Flexibel',
            subtitle: 'Sistem Admin Sekolah Jadi Makin Gampang dan Akurat Lho!',
            titleStyles: {
              color: WARNA.Black,
              fontSize: SIZE.size_14 * 2,
              fontFamily: FONT.poppins_bold,
            },
            subTitleStyles: {
              paddingHorizontal: 10,
              color: WARNA.Black,
              fontSize: SIZE.size_18,
              fontFamily: FONT.poppins_medium,
            },
          },
          {
            backgroundColor: WARNA.White,
            image: (
              <Image source={Ilus3} style={StyleScreen.imageLogoOnboarding} />
            ),
            title: 'Mulai Pantau Murid Sekolah',
            subtitle: (
              <MemoButtonPrimary
                title="Mulai Aplikasi"
                onPress={() => navigation.replace('Login')}
              />
            ),
            titleStyles: {
              color: WARNA.Black,
              fontSize: SIZE.size_14 * 2,
              fontFamily: FONT.poppins_bold,
            },
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
