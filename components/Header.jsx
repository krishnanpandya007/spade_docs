import React from 'react'
import Image from 'next/image'
import { useColorMode } from '@chakra-ui/color-mode';
// import { color } from '@chakra-ui/styled-system';
import {HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import theme from '../theme_colors'

import { IconButton } from '@chakra-ui/button';
function Header({handleToggleSidebar}) {

    const {colorMode, toggleColorMode} = useColorMode();

  return (
    <header style={{borderBottom: `1px solid ${colorMode === 'light' ? '#92B4EC80' : '#2C3639'}` }}>
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '1rem'}}>
            <Image src="/spade_icon.svg" height="25" width="25" />
            <p style={{color: colorMode === 'light' ? theme.colors.black : theme.colors.white, fontSize: '0.7rem', fontWeight: '500', letterSpacing: '1px'}}>DOCS</p>
        </div>
        <div>
          <IconButton marginRight="1rem" onClick={toggleColorMode} aria-label='Toggle Theme' icon={colorMode === 'light' ? <MoonIcon color="#14279B" />: <SunIcon color="#FFC300" />}/>
          <IconButton marginRight="-1rem" onClick={handleToggleSidebar} icon={<HamburgerIcon />} />
        </div>    
    </header>
  )
}

export default Header