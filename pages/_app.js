import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { AddifyProvider } from '../context/context'
require('@solana/wallet-adapter-react-ui/styles.css')

const WalletConnectionProvider = dynamic(
  () => import('../context/WalletConnectionProvider'),
  {
    ssr: false,
  },
)

function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectionProvider>
      <AddifyProvider>
        <Component {...pageProps} />
      </AddifyProvider>
    </WalletConnectionProvider>
  )
}

export default MyApp
