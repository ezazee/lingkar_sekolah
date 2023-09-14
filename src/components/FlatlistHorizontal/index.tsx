import React, {memo} from 'react';
import {TouchableOpacity, FlatList, Text} from 'react-native';
import s from '../../utils/tailwind';

const HorizontalFlatList = ({data}: any) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity
          style={
            item.isActive
              ? s`w-25 h-8 justify-center items-center bg-primary border-0 border-primary m-2 rounded-md`
              : s`w-25 h-8 justify-center items-center bg-white border-2 border-primary m-2 rounded-md`
          }>
          <Text style={item.isActive ? s`text-white` : s`text-primary`}>
            {item.text}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default memo(HorizontalFlatList);
