import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value, id } = e.currentTarget;
    this.setState({
      [name]: value,
      id,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.contactForm}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
