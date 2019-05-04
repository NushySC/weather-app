import React from 'react'

import Styles from './Header.module.css'

const Header = () =>  (
            <div className={Styles.header}>
                <h1 className={Styles.title}>Weather App</h1>
                <h2 className={Styles.subtitle}>Find out the weather in your city</h2>
            </div>
        )

export default Header