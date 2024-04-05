import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme/defaultTheme';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const MovieSearcherApp = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default MovieSearcherApp;
