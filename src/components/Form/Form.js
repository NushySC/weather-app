import React from 'react'
import Styles from './Form.module.scss'

const Form = (props) => (
            <form onSubmit={props.getWeather}>
                <input className={Styles.inputBox}type="text" name="city" placeholder="Enter your city" />
                <br />
                <button> Get the forecast!</button>
      </form>
        )

export default Form 