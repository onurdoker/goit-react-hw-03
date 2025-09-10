import css from "./SearchBox.module.css";
import { useId } from "react";
import { useState } from "react";

const SearchBox = ({ handleSearchChange }) => {
  
  const [error, setError] = useState("");
  
  const handleSearchSubmit = (event) => {
    const value = event.currentTarget.value;
    if (value === "" || /^[A-Za-z\s]+$/.test(value)) {
      handleSearchChange(event.currentTarget.value);
      setError("");
    } else {
      setError("Search can only contain letters and spaces");
    }
    
  };
  
  const nameId = useId();
  
  return (
      <div className={css.search}>
        <label htmlFor={nameId}>
          Find contacts by name
        </label>
        <input
            type="text"
            name="search"
            onChange={handleSearchSubmit}
            id={nameId}
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
  );
};

export default SearchBox;