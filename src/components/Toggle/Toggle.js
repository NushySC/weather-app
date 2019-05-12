import React from 'react'
import Styles from './Toggle.module.scss'


const Toggle = () => {

    return (

<label className={Styles.switchWrap}>
<input type="checkbox" />
<div className={Styles.switch}></div>
</label>
    )
  
  }
  

  export default Toggle