import React from 'react';
import { contacts } from '../../../../assets/contacts'
import ContactsItem from '../ContactsItem'

import styles from './ContactsList.module.scss'

function ContactsList() {
    const contactsCardEl = contacts.map(({ id, ...contact }) => <ContactsItem key={id} {...contact} />)
    return (
        <ul className={styles.contactsList}>
            {contactsCardEl}
        </ul>)
};

export default ContactsList;
