import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types'

const Filter =({value, onChange})=>{
    return(
        <label
            className={styles.label}
        >
        Find contacts by name:
            <input 
                className={styles.input}
                type="text"
                name="filter"
                value={value}   
                onChange={onChange} 
            />                    
        </label>
    ) 
}
Filter.propTypes={
    value: PropTypes.string,
}
Filter.defaultProps = {
    value:'',
}

export default Filter;
    

  
