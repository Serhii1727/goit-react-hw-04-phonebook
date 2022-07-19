import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FormContact, Name, Input, Button } from "./Form.styled";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }


    handleChange = (e) => {
        const { name, value } = e.currentTarget
        this.setState({
            [name]: value,
        })
    }

    contactСheck = () => {


    }

    handleSubmit = e => {
        e.preventDefault()

        const nameContacts = this.props.contacts.map(contact => contact.name)

        if (nameContacts.includes(this.state.name)) {
            alert(`${this.state.name} is already in contacts`)
        } else {
            this.props.onSubmit(this.state.name, this.state.number)
        }

        this.reset()
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }
    render() {
        return (
            <FormContact className="Form" onSubmit={this.handleSubmit}>
                <label htmlFor=''>
                    <Name>Name</Name>
                    <Input className="Input"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">
                    <Name>Number</Name>
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                <Button className="Button" type="submit">Add name</Button>
            </FormContact>
        )
    }
}


export default ContactForm;

ContactForm.propTypes = {
    contacts: PropTypes.array(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    onSubmit: PropTypes.func.isRequired
}