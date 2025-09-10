import "./App.css";

import { useState } from "react";

import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList";

function App() {
  
  const [contact, setContact] = useState({
                                           name: "",
                                           phone: "",
                                         });
  
  const [searchedPerson, setSearchedPerson] = useState("");
  
  const handleAddContact = (value) => {
    setContact(value);
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
            contact={contact}
            searchedPerson={searchedPerson}
        />
      
      
      </div>
  );
}

export default App;