import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { Container, Title } from './App.styled'
import ContactForm from './Form'
import Filter from "./Filter";
import ContactList from "./ContactList";

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid()
    }
    setContacts(prevState => ([...prevState, contact]))
  }

  const deleteContact = (id) => {
    setContacts((prevState) => { return prevState.filter(contact => contact.id !== id) })
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const normalizedFilter = filter.toLowerCase()
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

  return (
    <Container className="Container">
      <Title>Phonebook</Title>
      <ContactForm
        contacts={contacts}
        onSubmit={addContact}
      />
      <div>
        <Title>Contacts</Title>
      </div>
      <Filter
        value={filter}
        onChange={changeFilter}
      />
      <ContactList contacts={visibleContacts}
        onDeleteContact={deleteContact} />

    </Container>
  )
};



