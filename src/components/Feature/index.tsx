import {TouchableOpacity, Text} from 'react-native';
import React, {memo} from 'react';
import {WARNA} from '../../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleComponent} from '../../utils/style';

const Feature = ({
  nameIcon,
  nameFeature,
}: {
  nameIcon: string;
  nameFeature: string;
}) => {
  return (
    <TouchableOpacity style={StyleComponent.boxFeature}>
      <Icon
        style={StyleComponent.iconBoxFeature}
        name={nameIcon}
        size={30}
        color={WARNA.Black}
      />
      <Text style={StyleComponent.textBoxFeature}>{nameFeature}</Text>
    </TouchableOpacity>
  );
};

export default memo(Feature);
