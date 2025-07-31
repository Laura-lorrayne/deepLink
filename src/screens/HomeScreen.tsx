import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity, } from 'react-native';
import { abrirMaps, abrirNavegador, abrirWhatsApp, enviarEmail } from '../services/externalApps';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao SuperApp!</Text>

      <TouchableOpacity style={styles.button} onPress={() => abrirMaps(-15.777194290809625, -47.88760443095584)}>
        
        <Text style={styles.buttonText}>Abrir Localização</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirWhatsApp('5562992806200', 'Olá!')}>
    
        <Text style={styles.buttonText}>Abrir WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => enviarEmail('laura.reis.dev@gmail.com', 'teste assunto')}>
        
        <Text style={styles.buttonText}>Abrir Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirNavegador()}>

        <Text style={styles.buttonText}>Abrir Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E4A89', 
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5C6BC0', 
    padding: 12,
    borderRadius: 30,
    marginBottom: 15,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
});

export default HomeScreen;
