import { useMemo } from 'react'
import { Direction, SupportedChainId } from './Synchronizer'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { Web3Provider } from '@ethersproject/providers'

import { hooks } from './Synchronizer'

export const FALLBACK_CHAIN_ID = SupportedChainId.FANTOM

function useWeb3React(): Web3ReactContextInterface<Web3Provider> & {
  chainId?: SupportedChainId
} {
  const context = useWeb3ReactCore<Web3Provider>()
  const contextNetwork = useWeb3ReactCore<Web3Provider>('NETWORK')

  return context.active ? context : contextNetwork
}

const {
  useRegistrars: _useRegistrars,
  useRegistrarPairs: _useRegistrarPairs,
  useRegistrarByContract: _useRegistrarByContract,
  useRegistrarTokens: _useRegistrarTokens,
  useRegistrarTokenMap: _useRegistrarTokenMap,
  useTotalFeeCallback,
  usePlatformFeeCallback,
  usePartnerFeeCallback,
  useForceRefreshCallback,
} = hooks

export { useTotalFeeCallback, usePlatformFeeCallback, usePartnerFeeCallback, useForceRefreshCallback }

export function useRegistrars(targetChainId?: number) {
  const { chainId } = useWeb3React()
  return _useRegistrars(targetChainId ?? chainId ?? FALLBACK_CHAIN_ID)
}

export function useRegistrarPairs(targetChainId?: number) {
  const { chainId } = useWeb3React()
  return _useRegistrarPairs(targetChainId ?? chainId ?? FALLBACK_CHAIN_ID)
}

export function useRegistrarByContract(contract: string, targetChainId?: number) {
  const { chainId } = useWeb3React()
  return _useRegistrarByContract(contract, targetChainId ?? chainId ?? FALLBACK_CHAIN_ID)
}

export function useRegistrarTokens(targetChainId?: number) {
  const { chainId } = useWeb3React()
  return _useRegistrarTokens(targetChainId ?? chainId ?? FALLBACK_CHAIN_ID)
}

export function useRegistrarTokenMap(targetChainId?: number) {
  const { chainId } = useWeb3React()
  return _useRegistrarTokenMap(targetChainId ?? chainId ?? FALLBACK_CHAIN_ID)
}

export function useLongRegistrars(targetChainId?: number) {
  const registrars = useRegistrars(targetChainId)
  return useMemo(() => registrars.filter((registrar) => registrar.direction === Direction.LONG), [registrars])
}

export function useRegistrarContractMap(targetChainId?: number) {
  const registrars = useRegistrars(targetChainId)
  return useMemo(() => registrars.map((registrar) => registrar.contract), [registrars])
}