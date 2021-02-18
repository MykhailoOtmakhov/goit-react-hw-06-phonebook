import React from 'react'
import styles from './Notification.module.css';

const Notification = () => (
    <div className={styles.notificationContainer}>
        <p className={styles.text}>This contact is already exist!</p>
    </div>
)

export default Notification