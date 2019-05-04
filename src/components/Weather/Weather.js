import React from 'react'
import Styles from "./Weather.module.css"



const Weather = props => (
            <div className={Styles.outputs}>
                {props.city && props.country && <h2 className={Styles.outputTitle}>{props.city}, {props.country}</h2>}
                {props.temperature && <p className={Styles.outputTitle}>Temperature: <span className={Styles.outputResult}>{props.temperature}°C</span> </p>}     
                {props.humidity && <p className={Styles.outputTitle}>Humidity: <span className={Styles.outputResult}>{props.humidity}%</span></p>}
                {props.wind && <p className={Styles.outputTitle}>Wind: <span className={Styles.outputResult}>{props.wind} meters/sec</span></p>}
                <p className={Styles.outputResult}>{props.description}</p>
                
            </div>
)
export default Weather