import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RADIUS, WARNA, FONT, SIZE, SPASI} from '../../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Feature = ({
  nameIcon,
  nameFeature,
}: {
  nameIcon: string;
  nameFeature: string;
}) => {
  return (
    <TouchableOpacity style={s.box}>
      <Icon style={s.iconBox} name={nameIcon} size={30} color="#000" />
      <Text style={s.textBox}>{nameFeature}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  boxContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '22%',
    height: 100,
    aspectRatio: 1,
    backgroundColor: WARNA.White,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderRadius: RADIUS.radius_4,
    marginBottom: SPASI.spasi_15,
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: WARNA.DarkGrey,
    fontFamily: FONT.poppins_regular,
    fontSize: SIZE.size_10,
  },
  iconBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: WARNA.DarkGrey,
    marginBottom: SPASI.spasi_4,
    marginTop: SPASI.spasi_10,
    fontSize: SIZE.size_24,
  },
});

export default Feature;
