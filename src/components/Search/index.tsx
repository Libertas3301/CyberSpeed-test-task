import React from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {styled} from 'styled-components/native';

function Search({updateSearchQuery, handleSearch, searchQuery}) {
  return (
    <View>
      <Input
        label="Search for a movie"
        value={searchQuery}
        onChangeText={text => updateSearchQuery(text)}
      />
      <Bttn
        textColor={'black'}
        dark={true}
        mode="contained"
        onPress={handleSearch}>
        Search
      </Bttn>
    </View>
  );
}

export default Search;

const Input = styled(TextInput).attrs({
  placeholderTextColor: 'white',
})`
  background: white;
  color: white;
`;

const Bttn = styled(Button)`
  background: ${({theme}) => theme?.colors?.accentYellow};
  color: black;
  margin: 20px 0;
`;
