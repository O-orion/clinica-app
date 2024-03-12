import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/styles/temas';
import { LogBox } from 'react-native';
import Rotas from './src/Rotas';

export default function App() {
  LogBox.ignoreAllLogs();
  
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas></Rotas>
    </NativeBaseProvider>
  );  
}
