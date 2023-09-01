import React, {memo} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {StyleComponent} from '../../utils/style';

const ButtonPrimary = ({title, onPress}: {title: string; onPress: any}) => {
  return (
    <View style={StyleComponent.containerBtn}>
      <TouchableOpacity style={StyleComponent.buttonPrimary} onPress={onPress}>
        <Text style={StyleComponent.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonSecondary = ({title, onPress}: {title: string; onPress: any}) => {
  return (
    <TouchableOpacity style={StyleComponent.buttonSecondary} onPress={onPress}>
      <Text style={StyleComponent.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export const MemoButtonPrimary = memo(ButtonPrimary);
export const MemoButtonSecondary = memo(ButtonSecondary);
