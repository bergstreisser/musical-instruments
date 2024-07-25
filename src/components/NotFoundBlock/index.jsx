import React from 'react'
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1 >Nichts gefunden... 😞</h1>
            <p>Leider existiert die gesuchte Seite nichht in unserem Shop</p>
        </div>
    )
}
