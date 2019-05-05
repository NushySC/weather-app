import React from 'react'
import Styles from "./Weather.module.scss"

const Weather = props => (

            <div className={Styles.outputs}>

            <div className={Styles.fontIcon}><i className={`owf owf-${props.id}`}></i></div>

                {props.city && props.country && <h2 className={Styles.outputCity}>{props.city}, {props.country}</h2>}

                {props.main && props.description && <div className={Styles.outputDesc}>{props.main}/{props.description}</div>}

                {/* {props.forecast && <div className={Styles.outputTitle}>{props.forecast}hola</div>} */}


                <div className={Styles.outputDatas}>

                    <div className={Styles.outputData}>{props.temperature && <div className={Styles.outputTitle}>Temperature<p className={Styles.outputResult}>{props.temperature}°C</p> </div>}</div>  

                    <div className={Styles.outputData}>{props.humidity && <div className={Styles.outputTitle}>Humidity<p className={Styles.outputResult}>{props.humidity}%</p></div>}</div>
                    <div className={Styles.outputData}>{props.wind && <div className={Styles.outputTitle}>Wind<p className={Styles.outputResult}>{props.wind} meters/sec</p></div>}</div>
                </div>
                
                
            </div>
)
export default Weather