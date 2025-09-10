import "./App.css";

import { useState } from "react";
import { customAlphabet } from "nanoid";

import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList";
import Contact from "./components/contact/Contact";

function App() {
  
  const [contact, setContact] = useState(Contact);
  
  const [searchedPerson, setSearchedPerson] = useState("");
  
  const handleAddContact = (value) => {
    const existContact = Contact.find((person) => person.name.toLowerCase() === value.name.toLowerCase());
    
    if (existContact) {
      alert(`${value.name} has already been saved in the phonebook and cannot be saved again`);
    } else {
      const alphabet = "0123456789";
      const nanoid = customAlphabet(alphabet,
                                    3);
      const id = nanoid();
      
      value.id = `id-${id}`;
      setContact([...contact,
                  value]);
    }
    
  };
  
  const handleDeleteContact = (id) => {
    setContact(contact.filter((person) => person.id !== id));
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
            searchedPerson={searchedPerson}
            handleDeleteContact={handleDeleteContact}
        />
      
      
      </div>
  );
}

export default App;