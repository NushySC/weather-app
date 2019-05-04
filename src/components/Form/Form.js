import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Enter your city" />
                <button>Get the forecast!</button>
      </form>
        )
    }
}

export default Form 