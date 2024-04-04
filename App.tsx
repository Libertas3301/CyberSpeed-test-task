import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const MovieSearcherApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default MovieSearcherApp;
