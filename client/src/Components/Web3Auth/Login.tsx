import "./styles/App.css";
import { useState } from "react";
import { WEB3AUTH_NETWORK_TYPE } from "./config/web3AuthNetwork";
import { CHAIN_CONFIG_TYPE } from "./config/chainConfig";
import { Web3AuthProvider } from "./services/web3auth"
import Setting from "./components/Setting";
import Main from './components/Main'

let styles = require('./styles/Home.module.css')

function Login() {
  const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("polygon");

  return (
    <div className={styles.container}>
      <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
        <h1 className={styles.title}>
          XADE
        </h1>
        <Main />
      </Web3AuthProvider>
      <br/>
      <Setting setNetwork={setWeb3AuthNetwork} setChain={setChain} />
    </div>
  );
}

export default Login;



