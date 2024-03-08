import React from 'react';
import Login from './src/Login';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/styles/temas';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();
  
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Login></Login>
    </NativeBaseProvider>
  );  
}
