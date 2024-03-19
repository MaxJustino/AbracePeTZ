import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login no Sistema</Text>
      <StatusBar style="auto" />
      {/* Adicione os campos de entrada TextInput aqui */}
      <Pressable>
        <Text>Logar</Text>
      </Pressable>
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
