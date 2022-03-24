import './../Style/Navbar.css'
import {Component} from 'react'

class Navbar extends Component {
    render() {
        return (
        <div className = "title-bar">
            <div className = "left-aligned">
                <p className = 'logo'>Xade</p>
                <p className = 'click-home'>Home</p>
                <p className = 'click-investments'>Investments</p>
                <p className = 'click-deposit'>Deposit / Withdraw</p>
                <p className = 'click-offers'>Offers</p>
            </div>
            <div className = "right-aligned">
                <button className = 'click-settings'><img className = 'settings-logo svg-adjust' src = {process.env.PUBLIC_URL + '/images/settings.svg'} /></button>
            
            </div>
        </div>
        )
    }
}

export default Navbar