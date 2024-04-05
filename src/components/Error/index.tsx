import React from 'react';
import {styled} from 'styled-components/native';

function Error({error}) {
  return <Heading>{error}</Heading>;
}

export default Error;

const Heading = styled.Text`
  color: ${({theme}) => theme.colors.accentRed};
`;
