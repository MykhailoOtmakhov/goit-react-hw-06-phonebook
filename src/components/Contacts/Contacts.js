import React from 'react';
import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types'

function Contacts ({contacts,onRemoveContact}){
    return(
        <div>
            <ul>
                {contacts.map(({id,name,number})=>(
                    <ContactsItem 
                        key={id}
                        name={name}
                        number={number}
                        onRemove={()=>onRemoveContact(id)}
                    />
                ))}
            </ul>                
        </div>
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
