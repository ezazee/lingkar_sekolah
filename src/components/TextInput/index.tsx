import {View, StyleSheet, TextInput, Text} from 'react-native';
import React, {useState} from 'react';
import {FONT, RADIUS, SIZE, WARNA} from '../../utils/theme';

const InputText = ({
  title,
  placeholder,
  security,
}: {
  title: string;
  placeholder: string;
  security: boolean;
}) => {
  const [uname, setUname] = useState('');

  return (
    <View style={s.formContainer}>
      <Text style={s.label}>{title}</Text>
      <View style={s.formBox}>
        <TextInput
          secureTextEntry={security}
          placeholder={placeholder}
          style={s.inputText}
          onChangeText={setUname}
          value={uname}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  formContainer: {
    margin: 5,
  },
  formBox: {
    marginHorizontal: 20,
    paddingHorizontal: 14,
    marginTop: 5,
    marginBottom: 16,
    borderWidth: 0.6,
    borderRadius: RADIUS.radius_4,
    backgroundColor: WARNA.White,
    elevation: 1.4,
    flexDirection: 'row',
  },
  label: {
    marginHorizontal: 20,
    marginBottom: 8,
    fontSize: SIZE.size_16,
    fontWeight: 'bold',
    color: WARNA.Primary,
  },
  inputText: {
    width: '100%',
    fontSize: SIZE.size_14,
    fontFamily: FONT.poppins_medium,
  },
});

export default InputText;
