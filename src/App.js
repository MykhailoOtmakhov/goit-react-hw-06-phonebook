import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import { CSSTransition } from 'react-transition-group'
import './App.css'
import Header from './components/Header/Header.js';
import Notification from './components/Notification/Notification'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


class App extends Component {
  // static defaultProps = {}
  
  state = {
    showNoty: false,
  }

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

  formSubmitHandler=data=>{
    console.log(data);
  }

  render() {
    const { showNoty }=this.state;
    return(
      <div>
        <CSSTransition
          in={showNoty} 
          timeout={250}
          classNames="notification"
          unmountOnExit>
            <Notification />
        </CSSTransition>
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

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
})

export default connect(mapStateToProps, null)(App)
