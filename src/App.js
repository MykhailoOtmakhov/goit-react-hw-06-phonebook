import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import { CSSTransition } from 'react-transition-group'
import './App.css'
import Header from './components/Header/Header.js';
import Notification from './components/Notification/Notification'
import PropTypes from 'prop-types'


class App extends Component {
  // static defaultProps = {}
  
  state = {
    showNoty: false,
  }

  // componentDidMount(){
  //   const savedContacts = localStorage.getItem('contacts');
  //   if(savedContacts){
  //     this.setState({
  //       contacts: JSON.parse(savedContacts),
  //     })
  //   }
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.contacts !==this.state.contacts){
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact=({name, number})=>{
  //   const contact = {
  //     id: uuidv4(),
  //     name: name,
  //     number: number,
  //   };

  //   if (this.state.contacts.find((item)=>item.name===name)) {
  //     this.setState({showNoty: true})
  //       setTimeout(() => this.setState({showNoty: false}), 3000)      
  //   } else {
  //     this.setState(prevState=>({
  //       contacts: [contact, ...prevState.contacts],
  //     }))
  //   }
  // }    

  // removeContact=contactId=>{
  //   this.setState(prevState=>{
  //     return{
  //         contacts: prevState.contacts.filter(({id})=>id !== contactId),
  //         filter: '',
  //     }
  //   })      
  // }

  // changeFilter=e=>{
  //   this.setState({filter: e.currentTarget.value})
  // }

  formSubmitHandler=data=>{
    console.log(data);
  }

  // getVisibleContacts=()=>{
  //   const{filter, contacts} = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact=>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   )
  // }

  render() {
    const {showNoty}=this.state;
    // const visibleContacts = this.getVisibleContacts();
    return(
      <div>
        {/* <CSSTransition
          in={showNoty} 
          timeout={250}
          classNames="notification"
          unmountOnExit>
            <Notification />
        </CSSTransition> */}
        <Header />
        <ContactForm 
          // onSubmit={this.addContact}
        />
        {/* <CSSTransition 
          in={contacts.length>1}
          timeout={250}
          classNames="container"
          unmountOnExit> */}
            <Filter 
              // value={filter}
              // onChange={this.changeFilter}
            />
        {/* </CSSTransition> */}
        {/* <CSSTransition 
          in={contacts.length>0}
          timeout={250}
          classNames="container"
          unmountOnExit> */}
            <Contacts 
              // contacts={visibleContacts}
              // onRemoveContact={this.removeContact} 
            />
        {/* </CSSTransition>        */}
      </div>
    )
  }
}

App.propTypes={
  contacts:PropTypes.array,
  filter:PropTypes.string,
  showNoty:PropTypes.bool,
}

App.defaultProps = {
  contacts: [],
  filter: '',
  showNoty: false,
}

export default App
