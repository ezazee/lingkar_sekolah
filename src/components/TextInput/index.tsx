import {View, TextInput, Text} from 'react-native';
import React, {useState, memo} from 'react';
import {StyleComponent} from '../../utils/style';
import s from '../../utils/tailwind';

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
    <View style={s`m-3`}>
      <Text style={s`px-5 mb-2 text-base font-bold text-primary`}>{title}</Text>
      <View
        style={s`px-5 py-3 mt-2 mb-4 border-2 rounded-sm bg-white shadow-sm flex-row`}>
        <TextInput
          secureTextEntry={security}
          placeholder={placeholder}
          style={StyleComponent.styleInputText}
          onChangeText={setUname}
          value={uname}
        />
      </View>
    </View>
  );
};

export default memo(InputText);
