import "./search-box.styles.css";
const SearchBox = ({ placeholder, className, onChangeHandler }) => (
  <input
    type="search"
    placeholder={placeholder}
    className={`search-box ${className}`}
    onChange={onChangeHandler}
  />
);
export default SearchBox;
