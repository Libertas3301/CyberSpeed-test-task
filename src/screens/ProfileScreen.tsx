import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, List} from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.Content title="CyberSpeed Profile" />
      </Appbar.Header>

      <View style={{paddingHorizontal: 16, paddingTop: 16}}>
        <List.Section>
          <List.Subheader>App Information</List.Subheader>
          <List.Item title="App Version" description="1.0.0" />
          <List.Item title="Last Updated" description="April 5, 2024" />
          <List.Item title="Author" description="Vicol Constantin" />
          <List.Item title="Work time" description="3h" />
        </List.Section>
      </View>
    </View>
  );
};

export default ProfileScreen;
