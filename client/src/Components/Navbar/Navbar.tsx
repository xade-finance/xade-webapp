import './../../Style/Navbar.css'
import { React, Link } from './../../module-manager'

class Navbar extends React.Component {
    render() {
        return (
            <div className = "title-bar">
                <div className = "left-aligned">
                    <p className = 'logo'>Xade</p>
                    <a className = 'click-home' href="/">
                        Home
                    </a>
                    <a className = 'click-investments' href="/investments">Investments</a>
                    <a className = 'click-deposit' href="/Deposit">Deposit / Withdraw</a>
                    <a className = 'click-offers' href="/Offers">Offers</a>
    
                    
                </div>
                <div className  = "right-aligned">
                    <button className = 'click-settings'><img className = 'settings-logo svg-adjust' src = {process.env.PUBLIC_URL + '/images/settings.svg'} /></button>
                </div>
            </div>
            )
}
}

export default Navbar