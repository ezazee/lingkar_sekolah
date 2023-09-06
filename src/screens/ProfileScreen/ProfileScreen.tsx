import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Userpic} from 'react-native-userpic';
import {StyleScreen} from '../../utils/style';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import {apiProfile} from '../../api';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileViewBox = () => {
  const [avatarUrl, setAvatarUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchAvatar = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiProfile);
      setAvatarUrl(response.data.avatarUrl);
    } catch (error) {
      console.error('Error fetching API Avatar:', error);
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
    <View style={StyleScreen.containerProfileViewBox}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Userpic size={70} source={avatarUrl} />
        )}
      </View>
      <View style={StyleScreen.profileHighlight}>
        <Text style={StyleScreen.textNamaProfile}>Iqbal Ali Mirza</Text>
        <Text style={StyleScreen.textIdProfile}>ID - 032290932482</Text>
        <View style={StyleScreen.boxKelas}>
          <Text style={StyleScreen.textBoxKelas}>XI - MIPA 2</Text>
        </View>
      </View>
    </View>
  );
};

const ListItemProfile = ({
  title,
  iconName,
}: {
  title: string;
  iconName: string;
}) => {
  return (
    <View style={StyleScreen.listItemBox}>
      <View style={StyleScreen.boxStyle}>
        <Icon name={iconName} size={20} color="#064D3B" />
        <Text style={StyleScreen.textBox}>{title}</Text>
        <View style={StyleScreen.iconArrowRight}>
          <Icon name="arrow-forward-outline" size={20} color="#064D3B" />
        </View>
      </View>
    </View>
  );
};

const AccountScreen = () => {
  return (
    <ScrollView style={StyleScreen.containerProfile}>
      <ProfileViewBox />
      <View style={StyleScreen.containerNIS}>
        <View style={StyleScreen.boxNIS1}>
          <Text style={StyleScreen.textNIS1}>NIS</Text>
          <Text style={StyleScreen.textNIS2}>23130942893</Text>
        </View>
        <View style={StyleScreen.boxNIS2}>
          <Text style={StyleScreen.textNIS1}>No Telfon</Text>
          <Text style={StyleScreen.textNIS2}>093847293472</Text>
        </View>
      </View>
      <View style={StyleScreen.containerListBox}>
        <ListItemProfile title="Edit Profile" iconName="person-outline" />
        <ListItemProfile title="Ganti Bahasa" iconName="earth" />
        <ListItemProfile title="Ekstrakurikuler" iconName="people" />
        <ListItemProfile title="About" iconName="information-circle-outline" />
      </View>
      <View style={StyleScreen.versionBox}>
        <Text style={StyleScreen.textVersionProfile}>
          Version <Text style={{fontWeight: 'bold'}}>0.1.0</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
