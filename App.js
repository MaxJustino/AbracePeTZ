import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputEmail from './Componentes/InputEmail';
import InputSenha from './Componentes/InputSenha';
import InputEntrar from './Componentes/InputEntrar';
import InputEsqueciSenha from './Componentes/InputEsqueciSenha';
import InputNovoUsuario from './Componentes/InputNovoUsuario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login no Sistema</Text>

      <InputEmail />
      <InputSenha />
      <InputEntrar />
      <InputEsqueciSenha />
      <InputNovoUsuario />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
