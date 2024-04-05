import React from 'react';
import {styled} from 'styled-components/native';

function Loading() {
  return <Heading>Loading...</Heading>;
}

export default Loading;

const Heading = styled.Text`
  font-size: 32px;
  color: ${({theme}) => theme.colors.accentYellow};
  text-align: center;
`;
