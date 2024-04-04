import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TextInput,
  Button,
  Card,
  Title,
  Paragraph,
  List,
} from 'react-native-paper';
import {styled} from 'styled-components/native';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const dummyData = [
      {
        title: 'Movie 1',
        overview: 'This is a movie about something interesting.',
      },
      {
        title: 'Movie 2',
        overview: 'This is another movie with a captivating plot.',
      },
      {
        title: 'Movie 3',
        overview: 'A third movie that will keep you at the edge of your seat.',
      },
    ];
    setMovies(dummyData);
  };

  return (
    <SafeArea style={styles.container}>
      <Wrapper>
        <Input
          label="Search for a movie"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          style={styles.input}
        />
        <Bttn mode="contained" onPress={handleSearch} style={styles.button}>
          Search
        </Bttn>

        {movies?.length > 0 && (
          <View style={styles.moviesContainer}>
            <Title>Recommended Movies</Title>
            <List.Section>
              {movies.map((movie, index) => (
                <Card key={index} style={styles.movieCard}>
                  <Card.Content>
                    <Title>{movie.title}</Title>
                    <Paragraph>{movie.overview}</Paragraph>
                  </Card.Content>
                </Card>
              ))}
            </List.Section>
          </View>
        )}
      </Wrapper>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const Wrapper = styled.View`
  padding: 10px;
`;

const Input = styled(TextInput)`
  background: #fff;
`;

const Bttn = styled(Button)`
  background: ${({theme}) => theme?.colors?.primaryBackground};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
  },
  moviesContainer: {
    flex: 1,
  },
  movieCard: {
    marginBottom: 10,
  },
});

export default HomeScreen;
