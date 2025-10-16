import React from 'react';
import {View, Text, TextInput, Button, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/store/index';
import LoadingScreen from './src/screen/Auth/LoadingScreen';
class App extends React.Component {

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <LoadingScreen />
      </Provider>
    );
  }
}

export default App;
