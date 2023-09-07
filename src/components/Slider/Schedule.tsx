import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {StyleComponent} from '../../utils/style';
import {isToday} from 'date-fns';

interface SliderScheduleProps {
  date: Date;
}

const SliderSchedule: React.FC<SliderScheduleProps> = ({date}) => {
  const isActive = isToday(date);

  return (
    <View
      style={
        isActive
          ? StyleComponent.boxActiveSchedule
          : StyleComponent.boxNonActiveSchedule
      }>
      <View
        style={
          isActive
            ? StyleComponent.textBoxContainerActive
            : StyleComponent.textBoxContainerNonActive
        }>
        <Text
          style={
            isActive
              ? StyleComponent.textActiveBoxBold
              : StyleComponent.textNonActiveBoxBold
          }>
          Matematika
        </Text>
        <Text
          style={
            isActive
              ? StyleComponent.textActiveBoxRegular
              : StyleComponent.textNonActiveBoxRegular
          }>
          07:00 - 08:45 - Kelas XI Mipa 3
        </Text>
      </View>
      <View
        style={
          isActive
            ? StyleComponent.secondBoxActiveSchedule
            : StyleComponent.secondBoxNonActiveSchedule
        }>
        <View
          style={
            isActive
              ? StyleComponent.textBoxSecondContainerActive
              : StyleComponent.textBoxSecondContainerNonActive
          }>
          <Text
            style={
              isActive
                ? StyleComponent.textActiveBoxBold
                : StyleComponent.textNonActiveBoxBold
            }>
            Offline Lesson
          </Text>
          <Text
            style={
              isActive
                ? StyleComponent.textActiveBoxBold
                : StyleComponent.textNonActiveBoxBold
            }>
            {isActive ? 'Ongoing' : 'Upcoming'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(SliderSchedule);
