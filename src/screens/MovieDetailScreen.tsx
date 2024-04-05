import React, {useEffect} from 'react';
import {Title, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {getMovieDetails} from '../store/actions/movieActions';
import {ScrollView} from 'react-native-gesture-handler';
import Loading from '../components/Loading';
import Error from '../components/Error';

const MovieDetailScreen = ({route}) => {
  const dispatch = useDispatch();
  const {selectedMovie, loading, error} = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(getMovieDetails(route.params.id));
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <SafeArea>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <Container>
            <Poster source={{uri: selectedMovie?.fake['#IMG_POSTER']}} />
            <InfoContainer>
              <Title>
                {selectedMovie?.fake['#TITLE']} ({selectedMovie?.fake['#YEAR']})
              </Title>
              <Subtitle>Also known as: {selectedMovie?.fake['#AKA']}</Subtitle>
              <Subtitle>Actors: {selectedMovie?.fake['#ACTORS']}</Subtitle>
              <Description>{selectedMovie?.short['description']}</Description>

              <Wrapper>
                <Submit
                  mode="contained"
                  onPress={() => console.log('Navigate to IMDb')}>
                  View on IMDb
                </Submit>
                <Submit
                  mode="outlined"
                  onPress={() => console.log('Watch Trailer')}>
                  Watch Trailer
                </Submit>
              </Wrapper>
            </InfoContainer>
          </Container>
        </ScrollView>
      )}
    </SafeArea>
  );
};

export default MovieDetailScreen;
const SafeArea = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
`;

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  height: 100%;
  flex: 1;
`;

const InfoContainer = styled.View`
  margin-top: 20px;
  flex-direction: column;
  gap: 6px;
`;

const Poster = styled.Image`
  width: 100%;
  height: 400px;
  resizemode: cover;
  border-radius: 30px;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Submit = styled(Button)`
  margin: 5px 0;
`;

const Wrapper = styled.View``;
