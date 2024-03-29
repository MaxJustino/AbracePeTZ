import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputEmail = () => {
  return (
    <TextInput
      style={inputStyles.textInput}
      placeholder='Informe o seu E-mail'
      keyboardType='email-address'
      autoCapitalize="none"
      autoCompleteType='email'
    />
  );
}

const inputStyles = StyleSheet.create({
  textInput: {
    color: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 18,
    width: '70%',
    padding: 10,
    margin: 10,
  },
});

export default InputEmail;
