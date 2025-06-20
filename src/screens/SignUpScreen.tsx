import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function SignUpScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const { signUp } = useAuth();

  const handleSignUp = () => {
    signUp(name);
    navigation.navigate('LinkPartner');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome! 💖</Text>
      <Text style={styles.subHeaderText}>What's your name?</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={!name.trim()}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E91E63',
    marginBottom: 30,
    fontSize: 16,
    paddingVertical: 8,
    color: '#333',
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFCDD2',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    opacity: 1,
  },
  buttonText: {
    color: '#B71C1C',
    fontWeight: '600',
    fontSize: 16,
  },
});
