import React, {useEffect} from 'react';
import {Title, Caption, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {getMovieDetails} from '../store/actions/movieActions';

const MovieDetailScreen = ({route}) => {
  const dispatch = useDispatch();
  const {selectedMovie, loading, error} = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(getMovieDetails(route.params.id));
  }, []);

  console.log('id');
  console.log(selectedMovie);
  console.log(loading);
  console.log(error);

  return (
    <Container>
      {/* <Poster source={{uri: data['#IMG_POSTER']}} />
      <MovieTitle>{data['#TITLE']}</MovieTitle>
      <MovieCaption>{data['#YEAR']}</MovieCaption>
      <MovieCaption>{data['#ACTORS']}</MovieCaption>
      <MovieCaption>{data['#AKA']}</MovieCaption>
      <MoreInfoButton
        icon="information"
        mode="contained"
        onPress={() => {
          console.log(data['#IMDB_URL']);
        }}>
        More Info
      </MoreInfoButton> */}
    </Container>
  );
};

export default MovieDetailScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Poster = styled.Image`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  resize-mode: cover;
`;

const MovieTitle = styled(Title)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const MovieCaption = styled(Caption)`
  font-size: 16px;
  margin-bottom: 5px;
  text-align: center;
`;

const MoreInfoButton = styled(Button)`
  margin-top: 20px;
`;
