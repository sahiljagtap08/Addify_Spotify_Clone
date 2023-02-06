import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import addify from './addify.json'

export const SOLANA_HOST = clusterApiUrl('devnet')

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  '7zHfgj6ePjFV1oudh1P5GtWVuyFWPmhCu9m1HTyeyETu',
)

export const STABLE_POOL_IDL = addify
