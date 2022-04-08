import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const CHAIN_CONFIG = {
  fantom: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "https://rpc.ftm.tools/",
    blockExplorer: "https://ftmscan.com/",
    chainId: "0xfa",
    displayName: "Fantom Opera",
    ticker: "FTM",
    tickerName: "FTM",
  } as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;