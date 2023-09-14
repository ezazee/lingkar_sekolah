import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {isToday} from 'date-fns';
import s from '../../utils/tailwind';

interface SliderScheduleProps {
  date: Date;
}

const SliderSchedule: React.FC<SliderScheduleProps> = ({date}) => {
  const isActive = isToday(date);

  return (
    <View
      style={
        isActive
          ? s`bg-primary w-78 h-20 ml-2 rounded-sm`
          : s`bg-whiteMate w-78 h-20 ml-2 rounded-sm`
      }>
      <View
        style={
          isActive
            ? s`flex-1 px-2 justify-center`
            : s`flex-1 px-2 justify-center`
        }>
        <Text
          style={
            isActive ? s`font-bold text-white` : s`font-medium text-primary`
          }>
          Matematika
        </Text>
        <Text
          style={
            isActive ? s`font-bold text-white` : s`font-medium text-primary`
          }>
          07:00 - 08:45 - Kelas XI Mipa 3
        </Text>
      </View>
      <View
        style={
          isActive
            ? s`absolute bg-secondary w-full h-10 top-18 rounded-bl-sm rounded-br-sm`
            : s`absolute bg-whiteMateDark w-full h-10 top-18 rounded-bl-sm rounded-br-sm`
        }>
        <View
          style={
            isActive
              ? s`flex-1 px-2 items-center justify-between flex-row`
              : s`flex-1 px-2 items-center justify-between flex-row`
          }>
          <Text
            style={
              isActive ? s`font-bold text-white` : s`font-bold text-primary`
            }>
            Offline Lesson
          </Text>
          <Text
            style={
              isActive ? s`font-bold text-white` : s`font-bold text-primary`
            }>
            {isActive ? 'Ongoing' : 'Upcoming'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(SliderSchedule);
