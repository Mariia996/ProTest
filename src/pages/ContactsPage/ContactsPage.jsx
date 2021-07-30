
import ContactsCardList from '../../client/Contacts/components/ContactsList'

import styles from './ContactsPage.module.scss'

const ContactsPage = () => {
    return (
        <div className={`${styles.contacts} ${styles.container}`}>
            <h1 className={ styles.contactsTitle}>Our team</h1>
            <ContactsCardList />           
        </div>
     );
}
 
export default ContactsPage;