import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
      </>
    );
  }
}

export default App;
