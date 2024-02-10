import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const Form = ({ searchMovies }) => {
  const [_, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
    searchMovies(query.toLowerCase());
  };
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="Input"
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <button className="SubmitButton" type="submit">
        Search
      </button>
    </form>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;
