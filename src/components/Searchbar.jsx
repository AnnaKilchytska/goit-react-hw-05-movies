import PropTypes from 'prop-types';
import { StyledSearchBar } from './App.styled';

function Searchbar({ onFormSubmit }) {
  const handleFormSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;
    // console.log(query);
    if (!query) alert('Plese, enter your request!');
    onFormSubmit(query);
    e.target.reset();
  };
  return (
    <StyledSearchBar onSubmit={handleFormSubmit}>
      <label>
        <input type="text" name="query" />
      </label>
      <button type="submit">Search</button>
    </StyledSearchBar>
  );
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
