import PropTypes from 'prop-types';
import { ItemList, Button } from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div>
            <ul>

                {contacts.map(({ name, number, id }) => (
                    <ItemList className="ContactList-item" key={id} id={id} >
                        <p>{name}</p>
                        <p>{number}</p>
                        <Button onClick={() => onDeleteContact(id)} type="button" >Delete</Button>
                    </ItemList>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }))
}