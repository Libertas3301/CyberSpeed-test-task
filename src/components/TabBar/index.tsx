import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../theme/defaultTheme';

const values = {
  profileStack: 'Profile',
  homeStack: 'Home',
};

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const label = values[route.name];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabButton key={route.key} onPress={onPress} isFocused={isFocused}>
            <ButtonText isFocused={isFocused}>{label}</ButtonText>
          </TabButton>
        );
      })}
    </TabBarContainer>
  );
};

const TabBarContainer = styled(View)`
  flex-direction: row;
  background-color: ${theme.colors.textBlack};
  border-top-width: 3px;
  border-top-color: ${theme.colors.accentYellow};
  padding-vertical: 5px;
  padding-bottom: 40px;
`;

const TabButton = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: ${props => (props.isFocused ? theme.colors.accentYellow : '#666')};
`;

export default TabBar;
