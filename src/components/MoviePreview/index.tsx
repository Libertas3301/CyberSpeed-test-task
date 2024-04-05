import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const MoviePreview = ({item}) => {
  const navigation = useNavigation();
  const onMoviePress = () => {
    navigation.navigate('movieDetail', {
      id: item['#IMDB_ID'],
    });
  };

  return (
    <CardContainer onPress={onMoviePress}>
      <CardImage source={{uri: item['#IMG_POSTER']}} />
      <CardContent>
        <CardTitle>{item['#TITLE']}</CardTitle>
        <CardText>{item['#YEAR']}</CardText>
        <CardText>{item['#ACTORS']}</CardText>
      </CardContent>
    </CardContainer>
  );
};

export default MoviePreview;

const CardContainer = styled.TouchableOpacity`
  border-radius: 10px;
  margin-right: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const CardImage = styled.Image`
  width: 30%;
  height: 100px;
`;

const CardContent = styled.View`
  padding: 10px;
  color: white;
`;

const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const CardText = styled.Text`
  font-size: 12px;
  margin-top: 3px;
  color: white;
`;
