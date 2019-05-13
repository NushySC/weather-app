import React from 'react'
import Styles from './Toggle.module.scss'


class Toggle extends React.Component {
      
render() {
    return (

<label className={Styles.switchWrap}>
<input 
    type="checkbox"/>
<div className={Styles.switch}></div>
</label>
    )
  
  }
}

  export default Toggle