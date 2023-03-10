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
    <form onSubmit={handleFormSubmit}>
      <label>
        <input type="text" name="query" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchbar;
