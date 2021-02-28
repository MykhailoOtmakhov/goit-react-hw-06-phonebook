import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import { CSSTransition } from 'react-transition-group'
import './App.css'
import Header from './components/Header/Header.js';
import { connect } from 'react-redux';

class App extends Component {  
  render() {
    return(
      <div>
        <Header />
        <ContactForm />
        <CSSTransition 
          in={this.props.contacts.length>1}
          timeout={250}
          classNames="container"
          unmountOnExit>
            <Filter/>
        </CSSTransition>
        <CSSTransition 
          in={this.props.contacts.length>0}
          timeout={250}
          classNames="container"
          unmountOnExit>
            <Contacts />
        </CSSTransition>       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
})

export default connect(mapStateToProps, null)(App)
