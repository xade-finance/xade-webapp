import './../../Style/Titlebar.css'
import { Component } from 'react'

class Titlebar extends Component {
    render() {
        return (
      <div className = "nav-bar">
            <div className = "middle-aligned">
                <p className = 'nav-home'><a href="/" ><img className = 'svg-adjust rest-adjust' src = {process.env.PUBLIC_URL + '/images/home.svg'} /></a></p>
                <p className = 'nav-investments'><a href="/investments" ><img className = 'svg-adjust rest-adjust' src = {process.env.PUBLIC_URL + '/images/stonks.svg'} /></a></p>
                <p className = 'nav-deposit'><a href="/Deposit" ><img className = 'nav-deposit-img ' src = {process.env.PUBLIC_URL + '/images/plus.svg'} /></a></p>
                <p className = 'nav-wallet'><a><img style = {{width: '1.8rem'}} className = 'svg-adjust rest-adjust' src = {process.env.PUBLIC_URL + '/images/transaction.svg'} /></a></p>
                <p className = 'nav-payments'><a  ><img className = 'svg-adjust nav-payments-img rest-adjust' src = {process.env.PUBLIC_URL + '/images/wallet3.svg'} /></a></p>

                
            </div>
        </div>
        )
    }
}

export default Titlebar