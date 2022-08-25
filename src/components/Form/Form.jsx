import { useState } from "react";
import PropTypes from 'prop-types';
import { FormContact, Name, Input, Button } from "./Form.styled";

function ContactForm({ contacts, onSubmit }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        const { name } = e.currentTarget;
        if (name === "name") {
            setName(e.currentTarget.value);
        }
        if (name === 'number') {
            setNumber(e.currentTarget.value);
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        const nameContacts = contacts.map(contact => contact.name)

        if (nameContacts.includes(name)) {
            alert(`${name} is already in contacts`)
        } else {
            onSubmit(name, number)
        }

        setName('')
        setNumber('')
    }

    return (
        <FormContact className="Form" onSubmit={handleSubmit}>
            <label htmlFor=''>
                <Name>Name</Name>
                <Input className="Input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
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
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <Button className="Button" type="submit">Add name</Button>
        </FormContact>
    )
}


export default ContactForm;

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    onSubmit: PropTypes.func.isRequired
}

