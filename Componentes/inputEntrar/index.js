import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const InputEntrar = () => {
  const handlePress = () => {
    // Pagina Inicial 
    console.log('Clicou em Entrar');
  };

  return (
    <TouchableOpacity
      style={inputStyles.button}
      onPress={handlePress}
    >
      <Text style={inputStyles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  );
}

const inputStyles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    width: '60%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InputEntrar;
