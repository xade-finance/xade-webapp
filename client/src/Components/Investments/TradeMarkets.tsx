import  React  from 'react'

import { SupportedChainId, Registrar } from '@deusfinance/synchronizer-sdk'
import { hooks, Muon } from '../../DEUS/Synchronizer'
// import Chart from './LineChart'
import {    SymbolOverview } from "react-ts-tradingview-widgets";
import './TradeMarkets.css'
import { useParams } from 'react-router-dom'
import { TextField } from '@material-ui/core'

const SUPPORTED_CHAIN_ID = SupportedChainId.FANTOM

const Trade = () => {
    const [market, setMarket] = React.useState('');
    const [currency, setCurrency] = React.useState('');


    let { id } = useParams() || '0x399aeb2FF88cD66564ee1BCc03185Ca5d712572B';
    const list = hooks.useRegistrarByContract(id, SUPPORTED_CHAIN_ID) || {
        'ticker': 'AAPL', 
        'name': 'Apple',
        'direction': 'LONG',
        'sibling': '0x399aeb2FF88cD66564ee1BCc03185Ca5d712572B',
        'open': false,
        'price': '0',
    }
    

    const handleChangeCurrency = (event:any): void => {
        event.preventDefault();
        let input = event.target.value;
        if( !input || (input[input.length-1].match('[0-9]') && input[0].match('[1-9]')))
            setCurrency(input)

    }

    
    const handleChangeMarket = (event:any): void => {
      console.log(market)
      event.preventDefault();
      let input = event.target.value ;
      if( !input || ( input[input.length-1].match('[0-9]') && input[0].match('[1-9]')) )
        setMarket(input)

    if(list.open === true)
    {
        console.log('hi')
        setCurrency((parseInt(list.price) * parseInt(input)).toString())
    }
    }

    console.log(list)
    return (
    <div className="trade-markets-center">
        
       <div className = 'trade-markets'> 
       <br /> 
       <SymbolOverview colorTheme="light"
            width = '50vw'
            symbols = {[[list.name, list.ticker]]}
            downColor="#800080"
            borderDownColor="#800080"
            wickDownColor="#800080"
            // lineColor = "#1E5128"
            topColor = '#BFFFF0'
            bottomColor = "#EFFFFD"
            autosize
            chartType="area"
            scaleMode ="normal"

        /> 
        <br /> <br />
        <div className = 'chart-market'>
        </div>
        <div className = 'trade-market-data'>
        <div className = 'investment-direction'>
      <div className = {`long-direction ${list.direction === 'LONG'? 'direction-selected': ""}`}><a href = {list.direction == 'SHORT'?`/trade/${list.sibling}`:''}>LONG</a></div>
      <div className = {`short-direction ${list.direction === 'SHORT'? 'direction-selected': ""}`}><a href = {list.direction == 'LONG'?`/trade/${list.sibling}`:''}>SHORT</a></div>
        </div>
        <div className = 'conversion-dollar'>
        <td className = "investments-body-image investments-ticker botm"><img alt = '' src = {`${process.env.PUBLIC_URL}/images/tickers/usd.svg`}/></td>
        <TextField 
            onChange = {handleChangeCurrency}
            type = 'text'
            id="input-with-sx" 
            label={`Enter amount in $`} 
            variant="standard" 
            value = {currency}
        />

        </div>
        <div className = 'conversion-dollar'>
        <td className = "investments-body-image investments-ticker botm"><img alt = '' src = {`${process.env.PUBLIC_URL}/images/tickers/${list.ticker}.png`}/></td>
        <TextField 
            onChange={handleChangeMarket}
            type="text"
            label={`Enter amount in ${list.ticker}`} 
            variant="standard" 
            value = {market}
        />
        </div>
        
        </div>
        </div>
    </div>
    
    )
}

export default Trade;
