import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { inputStyles } from './styles';




export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.formTitle}>Login no Sistema</Text>

        {/* Utilize os estilos importados para os inputs */}
        <TextInput style={inputStyles.formInput} 
          placeholder="Informe o seu E-mail"
          keyboardType='email-address'
          autoCapitalize="none"
          autoComplete='email'
          
        />

        <TextInput style={inputStyles.formInput}
          placeholder='Informe a sua Senha'
          autoCapitalize='none'
          secureTextEntry
        />

        <Pressable style={styles.formButton}>
          <Text style={styles.textButton}>Logar</Text>
        </Pressable>

        <View style={styles.subContainer}></View>

        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>

        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Novo usuário</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </>
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
    fontSize: 36,
    fontWeight: 'bold',
    color: 'green',
    margin: 10,
  },
  
  formButton: {  //Estilos do botão LOGAR
    
    backgroundColor: 'green',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subButton: {
    padding: 10,
  },
  subTextButton: {
    color: 'blueViolet',
  },



  
});

