import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { RiDeleteBin6Fill } from "react-icons/ri"
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetail}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.contactDetail}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        <RiDeleteBin6Fill />
        <span>Delete</span>
      </button>
    </div>
  );
};

export default Contact;
