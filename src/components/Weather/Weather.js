import React from 'react'
import Styles from "./Weather.module.scss"

let options = { weekday: 'long', month: 'long', day: 'numeric' };


const Weather = props => (

            <div className={Styles.outputs}>

            <div className={Styles.fontIcon}><i className={`owf owf-${props.id}`}></i></div>

                {props.city && props.country && <h2 className={Styles.outputCity}>{props.city}, {props.country}</h2>}
                {props.main && props.description && <div className={Styles.outputDesc}>{props.main}/{props.description}</div>}


                <div className={Styles.outputDatas}>
                    <div className={Styles.outputData}>{props.temperature && <div className={Styles.outputTitle}>Temperature<p className={Styles.outputResult}>{props.temperature}°C</p> </div>}</div>  

                    <div className={Styles.outputData}>{props.humidity && <div className={Styles.outputTitle}>Humidity<p className={Styles.outputResult}>{props.humidity}%</p></div>}</div>
                    <div className={Styles.outputData}>{props.wind && <div className={Styles.outputTitle}>Wind<p className={Styles.outputResult}>{props.wind} m/s</p></div>}</div>
                </div>

                <div className={Styles.forecasts}>
                
                    <div className={Styles.forecast}>{props.forecast1 && <div className={Styles.nextTemp}><p><i className={`owf owf-${props.tomorrowIcon}`}></i></p><p>{props.tomorrow.toLocaleString('en-US', options)}</p><p>{props.forecast1} °C</p></div>}</div>

                    <div className={Styles.forecast}>{props.forecast2 && <div className={Styles.nextTemp}><i className={`owf owf-${props.afterTomorrowIcon}`}></i><p>{props.afterTomorrow.toLocaleString('en-US', options)}</p><p>{props.forecast2} °C</p></div>}</div>

                    <div className={Styles.forecast}>{props.forecast3 && <div className={Styles.nextTemp}><i className={`owf owf-${props.afterAfterTomorrowIcon}`}></i><p>{props.afterAfterTomorrow.toLocaleString('en-US', options)}</p><p>{props.forecast3} °C</p></div>}</div>
                
                </div>
                
                
            </div>
)
export default Weather