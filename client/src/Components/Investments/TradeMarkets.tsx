import  React  from 'react'
import { SupportedChainId, Registrar } from '@deusfinance/synchronizer-sdk'
import { hooks, Muon } from '../../DEUS/Synchronizer'
// import Chart from './LineChart'
import {    SymbolOverview } from "react-ts-tradingview-widgets";
import './TradeMarkets.css'
import { useParams } from 'react-router-dom'
const SUPPORTED_CHAIN_ID = SupportedChainId.FANTOM

const Trade = () => {
    let { id } = useParams() || '0x399aeb2FF88cD66564ee1BCc03185Ca5d712572B';
    const list = hooks.useRegistrarByContract(id, SUPPORTED_CHAIN_ID) || {
        'ticker': 'AAPL', 
        'name': 'Apple',
        'direction': 'LONG'
    }

    // console.log(list)
    return (
    <div className="trade-markets-center">
       <div className = 'trade-markets'> 
        <div className = 'chart-market'>
            <SymbolOverview colorTheme="light"
            width = '50vw'
            symbols = {[[list.name, list.ticker]]}
            downColor="#800080"
            borderDownColor="#800080"
            wickDownColor="#800080" /> 
        </div>
        <div className = 'trade-market-data'>
        <div className = 'investment-direction'>
            <div className = {`long-direction ${list.direction === 'LONG'? 'direction-selected': ""}`}>LONG</div>
            <div className = {`short-direction ${list.direction === 'SHORT'? 'direction-selected': ""}`}>SHORT</div>
        </div>
        <div className = 'conversion-dollar'><p className = 'conversion-dollar-amount'>Enter amount in</p><input className = 'conversion-dollar-form'type = 'number' placeholder = '$'></input></div>
        <div className = 'conversion-dollar'><p className = 'conversion-dollar-amount'>Enter amount in</p></div>
        
        </div>
        </div>
    </div>
    
    )
}

export default Trade;
