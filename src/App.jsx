import "./App.css";

import { useState } from "react";
import { useEffect } from "react";
import { customAlphabet } from "nanoid";

import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox.jsx";
import ContactList from "./components/contactList/ContactList";
import Contact from "./components/contact/Contact";

function App() {
  
  const nanoid = customAlphabet("0123456789",
                                3);
  
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
        ? JSON.parse(savedContacts)
        : Contact;
  });
  
  useEffect(() => {
              localStorage.setItem("contacts",
                                   JSON.stringify(contacts));
            },
            [contacts]);
  
  const [searchedPerson, setSearchedPerson] = useState("");
  
  const handleAddContact = (value) => {
    const existContact = Contact.find((person) => person.name.toLowerCase() === value.name.toLowerCase());
    
    if (existContact) {
      alert(`${value.name} has already been saved in the phonebook and cannot be saved again`);
    } else {
      
      const newContact = {
        id: `id-${nanoid()}`,
        name: value.name,
        number: value.number,
      };
      setContacts([...contacts,
                   newContact]);
    }
    
  };
  
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((person) => person.id !== id));
  };
  
  const handleSearchChange = (value) => {
    setSearchedPerson(value.toLowerCase());
  };
  
  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />
        <SearchBox
            handleSearchChange={handleSearchChange}
        />
        <ContactList
            contacts={contacts}
            searchedPerson={searchedPerson}
            handleDeleteContact={handleDeleteContact}
        />
      
      
      </div>
  );
}

export default App;