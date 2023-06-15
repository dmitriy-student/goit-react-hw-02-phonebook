import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter_label}>
      Filter contacs by name
      <input
        className={css.filter_input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
