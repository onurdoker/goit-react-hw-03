import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

import styles from "./ContactList.module.css";

// import Contact from "../contact/Contact";

const ContactList = ({
                       contacts,
                       searchedPerson,
                       handleDeleteContact,
                     }) => {
  
  
  let modifiedContacts = [];
  
  if (searchedPerson) {
    modifiedContacts = contacts.filter((person) => person.name.toLowerCase()
                                                         .startsWith(searchedPerson));
  } else {
    modifiedContacts = contacts.sort((a,
                                      b) => a.name.localeCompare(b.name));
  }
  
  
  return (
      <div className={styles.body}>
        <ul>
          {modifiedContacts.map((person) => (
              <div
                  className={styles.card}
                  key={person.id}
              >
                <li>
                  <FaPhone /> {person.name} <br />
                  <IoPersonSharp /> {person.number}
                </li>
                <button
                    className={styles.btn}
                    type="button"
                    onClick={() => handleDeleteContact(person.id)}
                >Delete
                </button>
              </div>
          ))}
        </ul>
      </div>
  );
};
export default ContactList;