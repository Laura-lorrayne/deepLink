import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product!!</Text>
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

export default ProductScreen;
