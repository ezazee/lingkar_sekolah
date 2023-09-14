import {TouchableOpacity, Text} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import s from '../../utils/tailwind';

const Feature = ({
  nameIcon,
  nameFeature,
}: {
  nameIcon: string;
  nameFeature: string;
}) => {
  return (
    <TouchableOpacity
      style={s`w-18 h-18 aspect-square bg-white justify-center items-center rounded-md mb-5 shadow`}>
      <Icon
        style={s`flex-1 justify-center items-center text-grey mt-2 mb-2 text-xl`}
        name={nameIcon}
        size={30}
        color="#000"
      />
      <Text
        style={s`flex-1 justify-center items-center text-grey font-light text-xs`}>
        {nameFeature}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(Feature);
