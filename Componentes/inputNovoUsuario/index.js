import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const InputNovoUsuario = () => {
  const handlePress = () => {
    // Pagina novo usuário
    console.log('Clicou em Novo Usuário');
  };

  return (
    <TouchableOpacity
      style={inputStyles.button}
      onPress={handlePress}
    >
      <Text style={inputStyles.buttonText}>Novo Usuário</Text>
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

export default InputNovoUsuario;
