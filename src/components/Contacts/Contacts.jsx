import css from './Contacts.module.css';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <ul className={css.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contacts_item} key={id}>
          {name}: {number}
          <button
            className={css.contacts_btn}
            onClick={() => {
              onClick(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
