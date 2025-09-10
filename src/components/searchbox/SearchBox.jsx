import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ handleSearchChange }) => {
  
  const handleSearchSubmit = (event) => {
    handleSearchChange(event.currentTarget.value);
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
      </div>
  );
};

export default SearchBox;