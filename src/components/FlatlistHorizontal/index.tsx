import React from 'react';
import {TouchableOpacity, FlatList, Text} from 'react-native';
import {StyleComponent} from '../../utils/style';

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
              ? StyleComponent.flatListHorizontalActive
              : StyleComponent.flatListHorizontalNonActive
          }>
          <Text
            style={
              item.isActive
                ? StyleComponent.textFlatlistActive
                : StyleComponent.textFlatlistNonActive
            }>
            {item.text}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default HorizontalFlatList;
