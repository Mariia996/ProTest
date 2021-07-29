
import PropTypes from 'prop-types';

import styles from './ContactsItem.module.scss'

function ContactsItem({ name, position,imageUrl, email }) {
    return (
        <li className={styles.contactCardItem}>
            <img src={imageUrl} alt=""/>  
            <div className={styles.contactCardFooter}>
                <h2 className={styles.contactName}>{name}</h2>
                <p className={styles.contactPosition}>{position}</p>
                <p className={styles.contactEmail}>{ email}</p>
            </div>
        </li>)
};

export default ContactsItem;

ContactsItem.defaultProps = {
    name: '',
    position: '',
    imageUrl: '',
    description:''

}

ContactsItem.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
}