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

   const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;



  };


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
        margin: '30px 10%',
        justifyContent: 'center',
        fontFamily: "Sora",
      }}
    >
      
      <div className = 'search-bar-center'>

      <DateModule />

        <form className = 'search-bar' onSubmit = {(e: React.SyntheticEvent) => e.preventDefault()} >
          <input value = {query} type="text" onChange = {handleChange} className = 'input-text-investments' placeholder='Search for Crypto, Stocks, Commodities, Forex' />
          <button type="submit" className = 'input-submit-investments' value = ""><img className = 'search-adjust-investments' src = {process.env.PUBLIC_URL + '/images/search.svg'}/></button>
          </form>
    </div>
      {/* <br /> <br /> <br /> <br />  */}

      <div className='table-main' >
      <table >
        <thead className = "investments-head">
          <tr>
            <td className = "investments-head-image"></td>
            <td className = "investments-head-symbol"><a href = '#'>Symbol</a></td>
            <td className = "investments-head-name"><a href = '#'>Name</a></td>
            <td className = "investments-head-price"><a href = '#'>Price</a></td>
          </tr>
        </thead>
          <br />
        <tbody>
          {((((newList.length > 0 && query != '')) ? newList:list)).map((registrar: Registrar, index: number) => (
           registrar.direction == 'LONG'? ( <>
                       
            <tr key={index}>

              <td className = "investments-body-image investments-ticker"><img alt = '' src = {`${process.env.PUBLIC_URL}/images/tickers/${registrar.ticker}.png`}/></td>
              <td className = "investments-body-symbol"><a href = {`/trade/${registrar.contract}`}>{registrar.ticker}</a></td>
              <td className = "investments-body-name"><a href = {`/trade/${registrar.contract}`}>{registrar.name}</a></td>
              <td className = "investments-body-price"><a href = {`/trade/${registrar.contract}`}>{registrar.open ? parseFloat(registrar.price).toFixed(2).toString() : <img className = 'closed-adjust' alt = 'closed' src = {process.env.PUBLIC_URL + '/images/closed.png'}/>}</a></td>
            </tr>
           <br />
         </>
          ):'')) }
        </tbody>
      </table>
      </div>
    </div>
    </>
  )
}
