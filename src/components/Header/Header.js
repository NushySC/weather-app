import React from 'react'

import Styles from './Header.module.scss'

const Header = () =>  (
            <div className={Styles.header}>
                <h1 className={Styles.title}>WEATHER APP</h1>
                <h2 className={Styles.subtitle}>Find out the weather in your city</h2>
                <div className={Styles.logo}><i class="fas fa-temperature-low"></i></div>
            </div>
        )

export default Header