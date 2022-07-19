import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { Container, Title } from './App.styled'
import ContactForm from './Form'
import Filter from "./Filter";
import ContactList from "./ContactList";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid()
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    })
    )
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(c => c.id !== id),
      };
    });
  }



  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }


  render() {
    const normalizedFilter = this.state.filter.toLowerCase()
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <Container className="Container">
        <Title>Phonebook</Title>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.addContact}
        />
        <div>
          <Title>Contacts</Title>
        </div>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList contacts={visibleContacts}
          onDeleteContact={this.deleteContact} />
      </Container>
    )
  }

};
