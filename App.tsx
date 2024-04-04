import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme/defaultTheme';
import {styled} from 'styled-components/native';
import store from './src/store/store';
import {Provider} from 'react-redux';

const MovieSearcherApp = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      <RootContainer>
        <AppNavigation />
      </RootContainer>
      {/* </Provider> */}
    </ThemeProvider>
  );
};

const RootContainer = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
`;

export default MovieSearcherApp;
