import {View, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Ilus1, Ilus2, Ilus3, Ilus4, LogoLingkar} from '../../assets/images/img';
import {MemoButtonPrimary} from '../../components';
import s from '../../utils/tailwind';

const OnboardingScreen = ({navigation}: any) => {
  const pages = [
    {
      backgroundColor: '#fff',
      image: <Image source={Ilus1} style={s`w-50 h-50`} />,
      title: 'Selamat Datang di Lingkar Sekolah',
      subtitle:
        'Aplikasi yang bakal bantu kamu buat manage waktu pas kamu di sekolah.',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={Ilus2} style={s`w-50 h-50`} />,
      title: 'Sangat Hemat Waktu',
      subtitle:
        'Lingkar Sekolah Bakal ingetin semua kebutuhan kamu pas di sekolah.',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={Ilus3} style={s`w-50 h-50`} />,
      title: 'Aplikasi Ga Ribet!',
      subtitle:
        'Lingkar Sekolah akan memandu kamu dalam menggunakan fitur fitur di aplikasi ini, jadi kamu biar makin simpel.',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={Ilus4} style={s`w-50 h-50`} />,
      title: 'Mulai Manage Waktu Sekolah mu',
      subtitle:
        'Kami akan siapkan semua kebutuhan sekolahmu di Lingkar Sekolah.',
    },
  ];

  return (
    <View style={s`flex flex-1 bg-white`}>
      <View style={s`flex items-center mt-5 z-1 flex-0`}>
        <Image source={LogoLingkar} style={s`w-20 h-20`} />
      </View>
      <Onboarding
        containerStyles={s`relative`}
        showDone={false}
        showNext={false}
        showSkip={false}
        titleStyles={s`text-3xl font-bold text-primary w-60 flex-wrap`}
        subTitleStyles={s`text-black text-base w-80 flex-wrap`}
        showPagination={false}
        pages={pages}
      />
      <View style={s`flex justify-center items-center mb-10`}>
        <MemoButtonPrimary
          title="Login"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
