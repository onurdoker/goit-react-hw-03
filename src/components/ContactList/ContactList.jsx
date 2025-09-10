import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

import styles from "./ContactList.module.css";

import Contact from "../contact/Contact";

const ContactList = () => {
  
  
  return (
      <div className={styles.body}>
        <ul>
          {Contact.map((person) => (
              <div className={styles.card}>
                <li key={person.id}>
                  <FaPhone /> {person.name} <br />
                  <IoPersonSharp /> {person.number}
                </li>
                <button
                    className={styles.btn}
                    type="button"
                >Delete
                </button>
              </div>
          ))}
        </ul>
      </div>
  );
};
export default ContactList;