import React from 'react';
import styled from 'styled-components/native';

const MovieStories = ({data}) => {
  return (
    <Container>
      {data?.slice(0, 5).map((item, index) => (
        <Circle key={index}>
          <CircleImage source={{uri: item['#IMG_POSTER']}} />
        </Circle>
      ))}
    </Container>
  );
};

export default MovieStories;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

const Circle = styled.View`
  border-radius: 25px;
  background-color: ${({theme}) => theme.colors.textBlack};
  margin-right: 10px;
`;

const CircleImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 100px;
`;
