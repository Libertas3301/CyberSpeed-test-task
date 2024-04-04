import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {
  TextInput,
  Button,
  Card,
  Title,
  Paragraph,
  List,
} from 'react-native-paper';

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
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Search for a movie"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSearch} style={styles.button}>
        Search
      </Button>

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
    </SafeAreaView>
  );
};

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
