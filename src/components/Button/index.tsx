import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {FONT, WARNA, RADIUS, SIZE} from '../../utils/theme';

const ButtonPrimary = ({title, onPress}: {title: string; onPress: any}) => {
  return (
    <View style={s.containerBtn}>
      <TouchableOpacity style={s.buttonPrimary} onPress={onPress}>
        <Text style={s.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonSecondary = ({title, onPress}: {title: string; onPress: any}) => {
  return (
    <TouchableOpacity style={s.buttonSecondary} onPress={onPress}>
      <Text style={s.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: WARNA.Primary,
    padding: 9,
    borderRadius: RADIUS.radius_4,
    marginTop: 30,
  },
  buttonSecondary: {
    alignItems: 'center',
    backgroundColor: WARNA.Primary,
    padding: 9,
    borderRadius: RADIUS.radius_4,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: FONT.poppins_medium,
    fontSize: SIZE.size_12,
  },
  containerBtn: {
    display: 'flex',
    width: '70%',
  },
});

export {ButtonPrimary, ButtonSecondary};
