import { Formik} from 'formik';
import * as Yup from 'yup';
import { Field, Form, ErrorMessage, Label, Button } from './ContactForm.styled'
import { useDispatch, useSelector } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { selectContacts, selectIsLoading } from '../../redux/selectors';
import { addNewContact } from '../../redux/operations';

const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    number: Yup.string().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/, "It must be min 5 numbers (1234567 or 123-45-67)").required('Required'),
});

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);

    const onAdd = newContact => {
        if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
            Report.warning(`${newContact.name} is already in contacts.`);
            return
        }
        dispatch(addNewContact(newContact));
    }
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
        >

            <Form autoComplete="off">
                <Label>
                    Name
                        <Field type="text" name="name" placeholder="New contact"/>
                        <ErrorMessage name="name" component="p"/>
                </Label>
                <Label>
                    Number
                        <Field type="tel" name="number" placeholder="Enter a number"/>
                        <ErrorMessage name="number" component="p"/>
                </Label>
                <Button type="submit" disabled={isLoading}>Add contact</Button>
            </Form>
        </Formik>
    )
}