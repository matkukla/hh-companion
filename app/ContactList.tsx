import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  };

  const handleSave = async () => {
    if (editingContact) {
      // Update an existing contact
      try {
        await axios.put(`http://localhost:3000/contacts/${editingContact.id}`, { name, phone, email });
        setEditingContact(null);
      } catch (error) {
        console.error('Failed to update contact:', error);
      }
    } else {
      // Create a new contact
      try {
        await axios.post('http://localhost:3000/contacts', { name, phone, email });
      } catch (error) {
        console.error('Failed to create contact:', error);
      }
    }
    setName('');
    setPhone('');
    setEmail('');
    fetchContacts();
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address Book</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title={editingContact ? "Update Contact" : "Add Contact"} onPress={handleSave} />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <Text style={styles.contactText}>{item.name}</Text>
            <Text style={styles.contactText}>{item.phone}</Text>
            <Text style={styles.contactText}>{item.email}</Text>
            <Button title="Edit" onPress={() => handleEdit(item)} />
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        )}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  contact: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  contactText: {
    fontSize: 16,
  },
});
