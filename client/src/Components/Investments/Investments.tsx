import React from 'react'
import { useState, useEffect } from 'react'
// import list from './functions'
import './Investments.css'
import { SupportedChainId, Registrar } from '@deusfinance/synchronizer-sdk'
import { hooks, Muon } from '../../DEUS/Synchronizer'
let date = new Date().toISOString().slice(0, 10)

const DateModule = () => {
  return <h1 className = 'date-investment'>{date.toLocaleString()}</h1>
}

/*
 * Internal data is updated once every 60 secondes. If you want access to the
 * latest information - for instance a real-time oracle quote - you could
 * call forceRefresh.
 */


export default function Investments() {
  const [query, setQuery] = useState('');
  let list = hooks.useRegistrars(SupportedChainId.FANTOM)
  console.log(list)
  let [newList, setNewList] = useState(list);
  // useEffect(() => {
  //   setList(hooks.useRegistrars(SupportedChainId.FANTOM))
  // })
    
    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
      setQuery(e.currentTarget.value)
      e.preventDefault();
      if(e.currentTarget.value == '')
      {
        setNewList(list)
        return;
      }
      setNewList(list.filter((registrar: Registrar, index: number) => (registrar.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()) || registrar.ticker.toLowerCase().includes(e.currentTarget.value.toLowerCase()))))
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
      <div className = 'search-bar-center'>
        <form className = 'search-bar' onSubmit = {(e: React.SyntheticEvent) => e.preventDefault()} >
          <input type="text" onChange = {handleChange} className = 'input-text-investments' placeholder='Search for Crypto, Stocks, Commodities, Forex' />
          <button type="submit" className = 'input-submit-investments' value = ""><img className = 'search-adjust-investments' src = {process.env.PUBLIC_URL + '/images/search.svg'}/></button>
          </form>
    </div>
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
          {((((newList.length > 0 && query != '')) ? newList:list)).map((registrar: Registrar, index: number) => (
            <>
            <tr key={index}>
              <td className = "investments-body-items investments-ticker"><img alt = '' src = {`${process.env.PUBLIC_URL}/images/tickers/${registrar.ticker}.png`}/></td>
              <td className = "investments-body-items">{registrar.ticker}</td>
              <td className = "investments-body-items">{registrar.name}</td>
              <td className = "investments-body-items">{registrar.open ? parseFloat(registrar.price).toFixed(2).toString() : <img className = 'closed-adjust' alt = 'closed' src = {process.env.PUBLIC_URL + '/images/closed.png'}/>}</td>
              
            </tr>
            <br />
           </>
          )) }
        </tbody>
      </table>
    </div>
    </>
  )
}
