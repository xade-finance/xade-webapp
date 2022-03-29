// import './App.css'
// import Navbar from './Components/Navbar.js'
// import Titlebar from './Components/Titlebar.js'
// import React from 'react'
// import { useMediaQuery } from 'react-responsive'

// function App() {
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' })
//   console.log(isTabletOrMobile)
//   return (
//      <section>
//        <Navbar />
//        {isTabletOrMobile && <Titlebar />}
//      </section>
//   );
// }

// export default App;

import React from 'react'

import { SupportedChainId } from '@deusfinance/synchronizer-sdk'
import { hooks, Muon } from './Synchronizer.js'

/*
 * Internal data is updated once every 60 secondes. If you want access to the
 * latest information - for instance a real-time oracle quote - you could
 * call forceRefresh.
 */
export default function App() {
  // const list = hooks.useRegistrars(SupportedChainId.FANTOM)
  // const forceRefresh = hooks.useForceRefreshCallback()

  // const getSignatures = async () => {
  //   const result = await Muon.getSignatures(
  //     '0x082e19213683E1CD3E80634761283e99542c9198',
  //     'buy',
  //     SupportedChainId.FANTOM
  //   )
  //   console.log(result)
  // }

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        margin: '50px 10%',
        justifyContent: 'center',
      }}
    >
      <div
        // onClick={forceRefresh}
        style={{
          margin: '50px auto',
        }}
      >
        Click to force a refresh (check the console for feedback)
      </div>
      <div
        // onClick={getSignatures}
        style={{
          margin: '50px auto',
        }}
      >
        Click to receive signatures. Only use this feature to gather contract calldata.
      </div>
      <table>
        <thead>
          <tr>
            <td>ticker</td>
            <td>name</td>
            <td>type</td>
            <td>sector</td>
            <td>fee</td>
            <td>price</td>
            <td>state</td>
            <td>contract</td>
            <td>sibling</td>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}

