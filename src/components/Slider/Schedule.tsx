import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {StyleComponent} from '../../utils/style';

const SliderSchedule = () => {
  return (
    <View style={StyleComponent.boxActiveSchedule}>
      <View style={StyleComponent.textBoxContainerActive}>
        <Text style={StyleComponent.textActiveBoxBold}>Matematika</Text>
        <Text style={StyleComponent.textActiveBoxRegular}>
          07:00 - 08:45 - Kelas XI Mipa 3
        </Text>
      </View>
      <View style={StyleComponent.secondBoxActiveSchedule}>
        <View style={StyleComponent.textBoxSecondContainerActive}>
          <Text style={StyleComponent.textActiveBoxBold}>Offline Lesson</Text>
          <Text style={StyleComponent.textActiveBoxBold}>Ongoing</Text>
        </View>
      </View>
      {/* <View style={StyleComponent.boxNonActiveSchedule}>
        <View style={StyleComponent.textBoxContainerNonActive}>
          <Text style={StyleComponent.textNonActiveBoxBold}>Matematika</Text>
          <Text style={StyleComponent.textNonActiveBoxRegular}>
            07:00 - 08:45 - Kelas XI Mipa 3
          </Text>
        </View>
        <View style={StyleComponent.secondBoxNonActiveSchedule}>
          <View style={StyleComponent.textBoxSecondContainerNonActive}>
            <Text style={StyleComponent.textNonActiveBoxBold}>
              Offline Lesson
            </Text>
            <Text style={StyleComponent.textNonActiveBoxBold}>Ongoing</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default memo(SliderSchedule);
