import React, {useCallback, useState} from 'react';
import {Divider} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {styled} from 'styled-components/native';
import MovieList from '../components/MovieList';
import MovieStories from '../components/MovieStories';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Search from '../components/Search';
import {searchMovies} from '../store/actions/movieActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {randomMovies, movies, loading, error} = useSelector(
    state => state.movie,
  );
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback(async () => {
    dispatch(searchMovies(searchQuery));
  }, [searchQuery]);

  const updateSearchQuery = async (e: string) => {
    setSearchQuery(e);
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <SafeArea>
      <Wrapper>
        <Search
          updateSearchQuery={updateSearchQuery}
          handleSearch={handleSearch}
          searchQuery={searchQuery}
        />

        <Divider style={{marginBottom: 10}} />

        <Heading>Movie Stories</Heading>

        {randomMovies.description?.length > 0 && (
          <MovieStories data={randomMovies.description} />
        )}

        {loading ? (
          <Loading />
        ) : (
          <>
            {movies.description && (
              <>
                <Heading>Movies for {searchQuery}</Heading>

                {movies.description?.length > 0 && (
                  <MovieList data={movies.description} />
                )}
              </>
            )}

            {!movies.description && (
              <>
                <Heading>Recomended Movies</Heading>

                {randomMovies.description?.length > 0 && (
                  <MovieList data={randomMovies.description} />
                )}
              </>
            )}
          </>
        )}
      </Wrapper>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: black;
`;

const Wrapper = styled.View`
  padding: 10px;
  background: black;
  height: 100%;
`;

const Heading = styled.Text`
  color: ${({theme}) => theme.colors.accentYellow};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default HomeScreen;
