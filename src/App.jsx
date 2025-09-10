import "./App.css";

import { useState } from "react";

import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox.jsx";

function App() {
  
  const [contact, setContact] = useState({
                                           name: "",
                                           phone: "",
                                         });
  
  const [searchedPerson, setSearchedPerson] = useState("");
  
  const handleAddContact = (value) => {
    //! name: value.name
    //! phone: value.phone
    setContact(value);
  };
  
  const handleSearchChange = (value) => {
    setSearchedPerson(value);
  };
  
  
  //TODO => Do not forget to delete console.log
  console.log(contact);
  console.log(searchedPerson);
  
  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />
        <SearchBox
            handleSearchChange={handleSearchChange}
        />
      
      
      </div>
  );
}

export default App;