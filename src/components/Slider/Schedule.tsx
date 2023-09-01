import {View, Text} from 'react-native';
import React, {useState, memo} from 'react';
import Swiper from 'react-native-swiper';
import {StyleComponent} from '../../utils/style';

const SliderSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  return (
    <View>
      <View style={StyleComponent.containerSchedule}>
        <Text style={StyleComponent.textTopSchedule}>Schedule</Text>
        <Text style={StyleComponent.textBotSchedule}>{formattedDate}</Text>
      </View>
      <Swiper style={StyleComponent.wrapper} loop={false}>
        <View style={StyleComponent.boxActiveSchedule}>
          <View style={StyleComponent.secondBoxActiveSchedule}>
            <Text>sdsdsd</Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default memo(SliderSchedule);
