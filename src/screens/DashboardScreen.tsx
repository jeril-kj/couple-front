// DashboardScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardScreen() {
  const { user } = useAuth();
  const userName = user?.name || 'You';
  const partnerName = user?.partnerName || 'Partner';

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Hello, {userName} 💖</Text>
      <Text style={styles.subHeaderText}>Your journey with {partnerName}</Text>

      {/* Add Task */}
      <TouchableOpacity style={styles.addTaskButton}>
        <Text style={styles.addTaskText}>+ Add New Task</Text>
      </TouchableOpacity>

      {/* Shared Task List */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔁 Shared Task List</Text>
        <View style={styles.bubble}><Text>🧹 Clean kitchen  <Text style={styles.taskMeta}>[{partnerName}]</Text></Text></View>
        <View style={styles.bubble}><Text>📦 Order groceries  <Text style={styles.taskMeta}>[{userName}]</Text></Text></View>
        <View style={styles.bubble}><Text>🐶 Walk dog  <Text style={styles.taskMeta}>[{partnerName}] ✅</Text></Text></View>
      </View>

      {/* Appreciation Section */}
      <View style={styles.card}>        
        <Text style={styles.cardTitle}>❤️ Weekly Appreciation:</Text>
        <Text style={styles.quote}>💌 "Thanks for walking the dog! You’re the best 🐾💕"</Text>
      </View>

      {/* Mood Tracker */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🗓️ This Week’s Mood:</Text>
        <Text style={styles.moodRow}>😊 💕 😊 🌸 😐 💫 🙂</Text>
      </View>

      {/* Upcoming Dates */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📅 Upcoming Events:</Text>
        <Text style={styles.eventItem}>🎂 <Text style={styles.bold}>Birthday:</Text> {partnerName} - July 5</Text>
        <Text style={styles.eventItem}>🌹 <Text style={styles.bold}>Anniversary:</Text> Aug 20</Text>
        <Text style={styles.eventItem}>✈️ <Text style={styles.bold}>Trip:</Text> Bali - Sept 14</Text>
      </View>

      {/* Love Coupons */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎁 Love Coupons:</Text>
        <Text style={styles.coupon}>💆 One Free Massage 💆</Text>
        <Text style={styles.coupon}>🍳 Breakfast in Bed 🛌</Text>
        <Text style={styles.coupon}>🎮 Movie Night Pick 🎬</Text>
      </View>

      {/* Digital Diary */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📖 Shared Diary</Text>
        <Text style={styles.diaryEntry}>📝 <Text style={styles.bold}>June 17:</Text> Had such a fun picnic today! 🍓🌞</Text>
        <Text style={styles.diaryEntry}>📝 <Text style={styles.bold}>June 16:</Text> Watched our favorite movie 🎥🍿</Text>
      </View>

      {/* Love Note */}
      <TouchableOpacity style={styles.loveNoteButton}>
        <Text style={styles.loveNoteText}>💬 Leave a Love Note 💌</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF8F0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
  },
  addTaskButton: {
    backgroundColor: '#FFCDD2',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  addTaskText: {
    fontWeight: '600',
    color: '#B71C1C',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
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
    color: '#D81B60',
  },
  taskItem: {
    fontSize: 15,
    paddingVertical: 4,
  },
  taskMeta: {
    fontSize: 14,
    color: '#999',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: 15,
    color: '#7B1FA2',
    marginTop: 4,
  },
  moodRow: {
    fontSize: 24,
    textAlign: 'center',
  },
  loveNoteButton: {
    backgroundColor: '#E1BEE7',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  loveNoteText: {
    color: '#4A148C',
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
  eventItem: {
    fontSize: 15,
    marginBottom: 4,
  },
  coupon: {
    backgroundColor: '#F8BBD0',
    padding: 8,
    borderRadius: 8,
    marginBottom: 6,
    textAlign: 'center',
    fontWeight: '500',
    color: '#880E4F',
  },
  diaryEntry: {
    fontSize: 15,
    marginBottom: 4,
  },
  bubble: {
    backgroundColor: '#FFF0F3',
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
  },
});