import { IoSearch } from 'react-icons/io5';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit, setSearchParams }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit();
    const form = evt.currentTarget;
    setSearchParams({ params: form.elements.searchBar.value });
    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchBar"
          autoComplete="off"
          autoFocus
          placeholder="Search video ... "
        />
        <button className={css.btn} type="submit">
          <IoSearch size={20} color="wheat" />
        </button>
      </form>
    </div>
  );
};
