import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/roboto';

import Routes from './src/routes/tab.routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' translucent={true} />
      <Routes />
    </NavigationContainer>
  )
}

export default App;