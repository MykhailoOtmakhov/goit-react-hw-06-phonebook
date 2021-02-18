import React from 'react';
import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Contacts.module.css'

const Contacts = ({contacts,onRemoveContact}) => {
    return(
        <TransitionGroup 
            component="ul" 
            className="ContactsList"
            >
                <h2>Contacts</h2>
                {contacts.map(({id,name,number})=>(
                    <CSSTransition 
                        key={id}
                        timeout={2500}
                        classNames={styles}
                        >
                        <ContactsItem 
                            id={id}
                            name={name}
                            number={number}
                            onRemove={()=>onRemoveContact(id)}
                        />
                    </CSSTransition>
                ))}
        </TransitionGroup>                       
    )
}
Contacts.propTypes={
    id:PropTypes.string,
    name:PropTypes.string,
    number:PropTypes.string,
}
Contacts.defaultProps = {
    id: '',
    name: '',
    number: '',
}
export default Contacts;
