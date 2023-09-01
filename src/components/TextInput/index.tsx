import {View, TextInput, Text} from 'react-native';
import React, {useState, memo} from 'react';
import {StyleComponent} from '../../utils/style';

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
    <View style={StyleComponent.formContainerInputText}>
      <Text style={StyleComponent.labelInputText}>{title}</Text>
      <View style={StyleComponent.formBoxInputText}>
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
