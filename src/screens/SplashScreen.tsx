import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';
import {fetchRandomMovies} from '../store/actions/movieActions';
import {useDispatch} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const bootstrap = () => {
      dispatch(fetchRandomMovies(10, 'a'));
    };

    bootstrap();

    setTimeout(() => {
      navigation.replace('tabStack');
    }, 3000);
  }, []);

  return (
    <Container>
      <Heading>CyberSpeed Movies</Heading>
    </Container>
  );
};

export default SplashScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.textBlack};
`;

const Heading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.accentYellow};
`;
