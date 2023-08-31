import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {LogoSekolah} from '../../assets/images/img';
import {ButtonPrimary, InputText} from '../../components';

const LoginScreen = ({navigation}: any) => {
  return (
    <View style={s.container}>
      <Image source={LogoSekolah} style={s.imgSekolah} />
      <InputText security={false} title="Username" placeholder="Isi Username" />
      <InputText security={true} title="Password" placeholder="Isi Password" />
      <ButtonPrimary title="Login" onPress={() => navigation.replace('Home')} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSekolah: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
});

export default LoginScreen;
