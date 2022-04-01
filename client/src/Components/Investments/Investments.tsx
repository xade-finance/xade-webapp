import React from 'react'

import { SupportedChainId, Registrar } from '@deusfinance/synchronizer-sdk'
import { hooks, Muon } from '../../DEUS/Synchronizer'
import './Investments.css'

let date = new Date().toISOString().slice(0, 10)

const SearchBar = () => {
  return <div className = 'search-bar-center'>
        <form className = 'search-bar'>
          <input type="text" className = 'input-text-investments' placeholder='Search for Crypto, Stocks, Commodities, Forex' />
          <button type="submit" className = 'input-submit-investments' value = ""><img className = 'search-adjust-investments' src = {process.env.PUBLIC_URL + '/images/search.svg'}/></button>
          </form>
    </div>
}

const DateModule = () => {
  return <h1 className = 'date-investment'>{date.toLocaleString()}</h1>
}

/*
 * Internal data is updated once every 60 secondes. If you want access to the
 * latest information - for instance a real-time oracle quote - you could
 * call forceRefresh.
 */
export default function Investments() {
  const list = hooks.useRegistrars(SupportedChainId.FANTOM)
  console.log(list)
  const forceRefresh = hooks.useForceRefreshCallback()

  const getSignatures = async () => {
    const result = await Muon.getSignatures(
      '0x082e19213683E1CD3E80634761283e99542c9198',
      'buy',
      SupportedChainId.FANTOM
    )
    console.log(result)
  }

  return (
    <>
    <div className = "investments-background">

    </div>
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        margin: '50px 10%',
        justifyContent: 'center',
        fontFamily: "Sora",
      }}
    >
      


      <DateModule />
      <SearchBar />
      <br /> <br /> <br /> <br /> 
      <table>
        <thead className = "investments-head">
          <tr>
            <td className = "investments-head-items"></td>
            <td className = "investments-head-items">Symbol</td>
            <td className = "investments-head-items">Name</td>
            <td className = "investments-head-items">Price</td>
          </tr>
        </thead>
          <br />
        <tbody>
          {list.map((registrar: Registrar, index: number) => (
            <>
            <tr key={index}>
              <td className = "investments-body-items investments-ticker"><img alt = '' src = {`${process.env.PUBLIC_URL}/images/tickers/${registrar.ticker}.png`}/></td>
              <td className = "investments-body-items">{registrar.ticker}</td>
              <td className = "investments-body-items">{registrar.name}</td>
              <td className = "investments-body-items">{registrar.open ? parseFloat(registrar.price).toFixed(2).toString() : <img className = 'closed-adjust' alt = 'closed' src = {process.env.PUBLIC_URL + '/images/closed.png'}/>}</td>
              
            </tr>
            <br />
           </>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
