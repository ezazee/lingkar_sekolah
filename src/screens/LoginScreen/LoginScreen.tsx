import {View, Image} from 'react-native';
import React from 'react';
import {LogoSekolah} from '../../assets/images/img';
import {MemoButtonPrimary, InputText} from '../../components';
import {useNavigation} from '@react-navigation/native';
import s from '../../utils/tailwind';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={s`flex-1 justify-center items-center`}>
      <Image source={LogoSekolah} style={s`w-40 h-40 mb-10`} />
      <InputText security={false} title="Username" placeholder="Isi Username" />
      <InputText security={true} title="Password" placeholder="Isi Password" />
      <View style={s`mt-5`}>
        <MemoButtonPrimary
          title="Login"
          onPress={() => navigation.replace('Tab')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
