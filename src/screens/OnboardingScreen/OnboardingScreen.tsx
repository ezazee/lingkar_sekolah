import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Ilus1, Ilus2, Ilus3, Ilus4} from '../../assets/images/img';
import {WARNA, SIZE, FONT} from '../../utils/theme';
import {ButtonPrimary} from '../../components';

const OnboardingScreen = ({navigation}: any) => {
  return (
    <View style={s.container}>
      <Onboarding
        showDone={false}
        showSkip={false}
        showNext={false}
        bottomBarHeight={100}
        bottomBarColor={WARNA.White}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={Ilus4} style={s.imageLogo} />,
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
            backgroundColor: '#fff',
            image: <Image source={Ilus1} style={s.imageLogo} />,
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
            backgroundColor: '#fff',
            image: <Image source={Ilus2} style={s.imageLogo} />,
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
            backgroundColor: '#fff',
            image: <Image source={Ilus3} style={s.imageLogo} />,
            title: 'Mulai Pantau Murid Sekolah',
            subtitle: (
              <ButtonPrimary
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

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  imageLogo: {
    width: 240,
    height: 240,
  },
});

export default OnboardingScreen;
