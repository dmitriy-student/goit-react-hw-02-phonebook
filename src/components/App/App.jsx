// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './App.module.css';
import { Section } from 'components/Section/Section';
import { FormPhonebook } from 'components/FormPhonebook/FormPhonebook';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // static propTypes = {};

  formSubmit = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <FormPhonebook formSubmit={this.formSubmit}></FormPhonebook>
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
