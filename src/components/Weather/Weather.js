import React from 'react'
import Styles from "./Weather.module.css"



const Weather = props => (
            <div className={Styles.outputs}>
                {props.city && props.country && <h2 className={Styles.outputTitle}>{props.city}, {props.country}</h2>}

                <div className={Styles.outputResult}>{props.main}</div>
                <div className={Styles.outputResult}>{props.description}</div>

                <div className={Styles.outputData}>{props.icon && <div className={Styles.outputTitle}><p className={Styles.outputResult}><img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather-icon"/></p> </div>}</div>
                

                <div className={Styles.outputDatas}>

                    <div className={Styles.outputData}>{props.temperature && <div className={Styles.outputTitle}>Temperature: <p className={Styles.outputResult}>{props.temperature}°C</p> </div>}</div>  

                    <div className={Styles.outputData}>{props.humidity && <div className={Styles.outputTitle}>Humidity: <p className={Styles.outputResult}>{props.humidity}%</p></div>}</div>
                    <div className={Styles.outputData}>{props.wind && <div className={Styles.outputTitle}>Wind: <p className={Styles.outputResult}>{props.wind} meters/sec</p></div>}</div>
                </div>
                
                
            </div>
)
export default Weather