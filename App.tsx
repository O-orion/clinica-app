import React from 'react';
import Login from './src/Login';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/styles/temas';
import { LogBox } from 'react-native';
import Cadastro from './src/Cadastro';

export default function App() {
  LogBox.ignoreAllLogs();
  
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Cadastro></Cadastro>
     
    </NativeBaseProvider>
  );  
}
