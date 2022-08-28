import React, { useState } from "react";
import { nanoid } from 'nanoid'
import { Container, Title } from './App.styled'
import ContactForm from './Form'
import Filter from "./Filter";
import ContactList from "./ContactList";
import useLocalStorage from "./hooks/hooks";

export function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", [])

  const [filter, setFilter] = useState('');

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



