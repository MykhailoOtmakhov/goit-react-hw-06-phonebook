import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
export default class App extends Component {
  static defaultProps = {}
  state = {
    contacts: [],
    filter: '',
  }
  componentDidMount(){
    const savedContacts = localStorage.getItem('contacts');
    if(savedContacts){
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !==this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact=({name, number})=>{
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    if (this.state.contacts.find((item)=>item.name===name)) { 
      alert(`${name} is already in a contact`);
   }else{
    this.setState(prevState=>({
      contacts: [contact, ...prevState.contacts],
  }));
};
   }
    

  removeContact=contactId=>{
    this.setState(prevState=>{
      return{
          contacts: prevState.contacts.filter(({id})=>
          id !== contactId),
      }
    })      
  }

  changeFilter=e=>{
    this.setState({filter: e.currentTarget.value})
  }

  formSubmitHandler=data=>{
    console.log(data);
  };

  getVisibleContacts=()=>{
    const{filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact=>
      contact.name.toLowerCase().includes(normalizedFilter),
      );
  };

  render() {
    const {contacts, filter}=this.state;
    const visibleContacts = this.getVisibleContacts();
    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        {/* <p>Find contacts by name:</p> */}
        <Filter 
          value={filter}
          onChange={this.changeFilter}
        />
        {contacts.length > 0 && 
          <Contacts 
            contacts={visibleContacts}
            onRemoveContact={this.removeContact} 
        /> }       
      </div>
    )
  }
}
