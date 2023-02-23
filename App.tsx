import React from 'react';
import {StatusBar} from 'react-native';

import {Home} from './src/screens/Home';
import {theme} from './src/themes';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: theme.background.primary,
    flex: 1,
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Home />
    </>
  );
}

export default App;
