import React, {memo} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import s from '../../utils/tailwind';

const ButtonPrimary = ({title, onPress}: {title: string; onPress: any}) => {
  return (
    <View style={s`flex w-55`}>
      <TouchableOpacity
        style={s`items-center bg-primary p-2 rounded-md`}
        onPress={onPress}>
        <Text style={s`text-white text-center font-medium text-base`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonSecondary = ({title, onPress}: {title: string; onPress: any}) => {
  return (
    <TouchableOpacity
      style={s`items-center bg-secondary p-2 rounded-md`}
      onPress={onPress}>
      <Text style={s`text-white text-center font-medium text-base`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export const MemoButtonPrimary = memo(ButtonPrimary);
export const MemoButtonSecondary = memo(ButtonSecondary);
