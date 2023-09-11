import {View, Text, TouchableHighlight, ActivityIndicator} from 'react-native';
import React, {memo} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import {Userpic} from 'react-native-userpic';
import {StyleScreen} from '../../utils/style';
import {apiProfile} from '../../api';

const TopBar = () => {
  const [userData, setUserData] = React.useState<{avatar: string}>({
    avatar: '',
  });

  const [isLoading, setIsLoading] = React.useState(true);

  const fetchAvatar = async () => {
    try {
      const response = await axios.get(apiProfile);
      if (response.status === 200) {
        const data = response.data[0];
        setUserData(data);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAvatar();
    }, []),
  );

  return (
    <View style={StyleScreen.topBarHome}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Userpic size={35} source={{uri: userData.avatar}} />
        )}
      </View>
      {userData && (
        <View style={StyleScreen.textContainerHome}>
          <Text style={StyleScreen.textTopBarHome}>Welcome</Text>
          <Text style={StyleScreen.textBotBarHome}>Iqbal Ali Mirza</Text>
        </View>
      )}
      <TouchableHighlight style={StyleScreen.iconTopHome}>
        <Icon
          style={StyleScreen.iconTopHome}
          name="notifications"
          size={20}
          color="#000"
        />
      </TouchableHighlight>
    </View>
  );
};

export default memo(TopBar);
