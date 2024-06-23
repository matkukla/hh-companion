import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function ChecklistScreen({ route }) {
    const { room, chores } = route.params;
    const [choreList, setChoreList] = useState(chores);
  
    const toggleChore = (id) => {
      setChoreList((prevChores) =>
        prevChores.map((chore) =>
          chore.id === id ? { ...chore, completed: !chore.completed } : chore
        )
      );
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{room} Checklist</Text>
        <FlatList
          data={choreList}
          renderItem={({ item }) => (
            <View style={styles.choreItem}>
              <Checkbox value={item.completed} onValueChange={() => toggleChore(item.id)} />
              <Text style={styles.choreText}>{item.task}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  choreText: {
    marginLeft: 10,
  },
});