import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = data => {
    console.log(data);
    // this.setState({ ...this.state.contacts, data });
    // console.log(this.state.contacts);
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
