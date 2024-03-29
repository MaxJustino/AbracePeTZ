import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputSenha = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={inputStyles.container}>
      <TextInput
        style={[inputStyles.textInput, { flex: 1 }]} 
        placeholder='Informe a sua Senha'
        autoCapitalize='none'
        secureTextEntry={!showPassword} 
      />
      <TouchableOpacity
        style={inputStyles.toggleButton}
        onPress={handleTogglePasswordVisibility}
      >
        <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
}

const inputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%', 
  },
  textInput: {
    color: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 18,
    padding: 10,
    marginVertical: 10, 
  },
  toggleButton: {
    marginLeft: 10, 
  },
});

export default InputSenha;
