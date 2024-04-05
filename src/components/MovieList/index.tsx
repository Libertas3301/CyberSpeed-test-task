import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import MoviePreview from '../MoviePreview';
import {styled} from 'styled-components/native';

const MovieList = ({data}) => {
  const [displayCount, setDisplayCount] = useState(3);

  const loadMore = useCallback(() => {
    setDisplayCount(displayCount + 3);
  }, [displayCount]);

  return (
    <FlatList
      data={data?.slice(0, displayCount)}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <MoviePreview item={item} />}
      ListFooterComponent={
        displayCount < data?.length ? (
          <LoadMoreButton onPress={loadMore}>
            <LoadMoreText>Load More</LoadMoreText>
          </LoadMoreButton>
        ) : null
      }
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

export default MovieList;

const LoadMoreButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.accentYellow};
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const LoadMoreText = styled.Text`
  color: ${({theme}) => theme.colors.textBlack};
  font-size: 16px;
  font-weight: bold;
`;
