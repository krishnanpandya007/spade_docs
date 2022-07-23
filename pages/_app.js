import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/modal'

import theme from './theme';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import Header from '../components/Header';

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {

  const [openSidebar, setOpenSidebar] = useState(true);
  const isMobileTab = false;

  return (
    <>
    <ChakraProvider theme={theme}>
      <Header isMobileTab={isMobileTab} />
      <div style={{display: 'flex'}}>
      {openSidebar && <Sidebar />}

        <Component {...pageProps} />
      </div>
      <footer></footer>
    </ChakraProvider>
    </>
  )
}

export default MyApp;