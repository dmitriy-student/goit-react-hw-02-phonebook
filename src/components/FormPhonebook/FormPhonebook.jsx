import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class FormPhonebook extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      id: nanoid(),
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.formSubmit(this.state);
    this.resetForm();
    // this.state
  };

  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInput}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInput}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
