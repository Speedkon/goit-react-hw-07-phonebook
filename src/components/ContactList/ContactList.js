import { deleteContact } from "../../redux/contactSlice";
import { AllContacts, Contact, Span, Button } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <AllContacts>
            {filterContacts.map(contact => {
                const {id, name, number} = contact;

                    return (
                        <Contact key={id}>
                            <Span>{name}:</Span>
                            <Span>{number}</Span>
                            <Button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                        </Contact>
                    )
                })}
        </AllContacts>
    )
};