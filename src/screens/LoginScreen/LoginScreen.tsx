import {View, Image} from 'react-native';
import React from 'react';
import {LogoSekolah} from '../../assets/images/img';
import {MemoButtonPrimary, InputText} from '../../components';
import {StyleScreen} from '../../utils/style';

const LoginScreen = ({navigation}: any) => {
  return (
    <View style={StyleScreen.containerLogin}>
      <Image source={LogoSekolah} style={StyleScreen.imgSekolahLogin} />
      <InputText security={false} title="Username" placeholder="Isi Username" />
      <InputText security={true} title="Password" placeholder="Isi Password" />
      <MemoButtonPrimary
        title="Login"
        onPress={() => navigation.replace('Home')}
      />
    </View>
  );
};

export default LoginScreen;
