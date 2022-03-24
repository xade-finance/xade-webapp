import './../Style/Titlebar.css'
import { Component } from 'react'

class Titlebar extends Component {
    render() {
        return (
      <div className = "nav-bar">
            <div className = "middle-aligned">
                <p className = 'nav-home'><img className = 'svg-adjust rest-adjust' src = {process.env.PUBLIC_URL + '/images/home.svg'} /></p>
            <p className = 'nav-deposit'><img className = 'nav-deposit-img ' src = {process.env.PUBLIC_URL + '/images/plus.svg'} /></p>
                <p className = 'nav-investments'><img className = 'svg-adjust rest-adjust' src = {process.env.PUBLIC_URL + '/images/stonks.svg'} /></p>
                
            </div>
        </div>
        )
    }
}

export default Titlebar