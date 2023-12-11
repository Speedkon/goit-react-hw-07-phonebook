import { selectContacts, selectError, selectFilter, selectVisibleContacts } from "../../redux/selectors";
import { AllContacts, Contact, Span, Button } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, getContacts } from "../../redux/operations";
import { useEffect } from "react";
import toast from 'react-hot-toast';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const visible = useSelector(selectVisibleContacts);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);


    const getVisibleContacts = () => {
    if (filter === "") {
        return contacts;
    }
    return visible;
    };

    const visibleContacts = getVisibleContacts();

    const onDelete = async (id) => {
            await dispatch(deleteContacts(id));
            error && toast.error('Error deleting contact.');
    }

    return (
        <AllContacts>
            {visibleContacts.map(contact => {
                const {id, name, number} = contact;

                    return (
                        <Contact key={id}>
                            <Span>{name}:</Span>
                            <Span>{number}</Span>
                            <Button type='button' onClick={() => onDelete(id)}>Delete</Button>
                        </Contact>
                    )
                })}
        </AllContacts>
    )
};