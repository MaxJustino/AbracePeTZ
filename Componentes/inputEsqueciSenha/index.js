import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const InputEsqueciSenha = () => {
  const handlePress = () => {
    // Pagina esqueci senha
    console.log('Clicou em Esqueci a Senha');
  };

  return (
    <TouchableOpacity
      style={inputStyles.button}
      onPress={handlePress}
    >
      <Text style={inputStyles.buttonText}>Esqueci a Senha</Text>
    </TouchableOpacity>
  );
}

const inputStyles = StyleSheet.create({
  button: {
    backgroundColor: 'red', 
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InputEsqueciSenha;
