
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <ChakraProvider>
      <Layout childcomponent={<Component {...pageProps} />} />
    </ChakraProvider></Provider>
}

export default MyApp