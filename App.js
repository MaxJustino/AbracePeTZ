import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login no Sistema</Text>
      <StatusBar style="auto" />
      {/* Corrigindo importação e usando TextInput em vez de TextInputBase */}
      <TextInput />
      <TextInput />

      {/* Botão de Pressionar para Logar */}
      <Pressable>
        <Text>Logar</Text>
      </Pressable>
      
      {/* Botão de Pressionar Esqueci a Senha */}
      <Pressable>
        <Text>Esqueci a senha</Text>
      </Pressable>
      
      <Pressable>
        <Text>Novo usuário</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
