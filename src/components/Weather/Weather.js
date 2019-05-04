import React, { Component } from 'react'

class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country && <h2>{this.props.city}, {this.props.country}</h2>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}     
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
     
                <p>{this.props.description}</p>
                

            </div>
        )
    }
}

export default Weather