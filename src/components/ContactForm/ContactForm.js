import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }


    nameInputId = uuidv4();
    numberInputId = uuidv4();

    handleInputChange=evt=>{
      const {name, value}= evt.currentTarget;
      this.setState({
        [name]: value,
      })
    }

    handleSubmit=evt=>{
        evt.preventDefault();
        console.log(this.state);
        this.props.onAddContact(this.state);
        this.reset()
    }

    reset=()=>{
        this.setState({name: '', number: '',});
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                  <label 
                    className={styles.label}
                    htmlFor={this.nameInputId}>
                        Name
                    <input 
                      className={styles.input}
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      id={this.nameInputId}
                    />
                  </label>
                  <label 
                  className={styles.label}
                  htmlFor={this.numberInputId}>
                      Number
                    <input 
                      className={styles.input}
                      type="tel"
                      name="number"
                      value={this.state.number}
                      onChange={this.handleInputChange}
                      id={this.numberInputId}
                    />
                  </label>
                  <button 
                    className={styles.button}
                    type="submit" 
                    onClick={this.handleSubmit}
                  >
                    Add contact
                  </button>
                </form>
            </div>
        )
    }
}

