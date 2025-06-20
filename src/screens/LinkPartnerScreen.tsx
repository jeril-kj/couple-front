import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function LinkPartnerScreen({ navigation }: any) {
  const { user, linkPartner } = useAuth();
  const [code, setCode] = useState('');

  const handleLink = () => {
    linkPartner(code);
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your invite code:</Text>
        <Text style={styles.inviteCode}>{user?.inviteCode}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Or enter partner's code:</Text>
        <TextInput
          placeholder="Enter partner's code"
          value={code}
          onChangeText={setCode}
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={handleLink} disabled={!code.trim()}>
          <Text style={styles.buttonText}>Link Partner</Text>
        </TouchableOpacity>
      </View>
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
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  inviteCode: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
    marginBottom: 10,
    letterSpacing: 2,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E91E63',
    marginBottom: 20,
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
