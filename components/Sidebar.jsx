import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link';
import { docs_menu_options } from '../config';


function Sidebar() {

    const {colorMode} = useColorMode();
    
    const router = useRouter();

  return (
    <div className="sidebar__main" style={{borderRight: `1px solid ${colorMode === 'light' ? '#92B4EC80' : '#2C3639'}`}}>
        
        {
          docs_menu_options.map((val, idx) => {
            return(
              <Link key={idx} href={`/${val.name}`}>       
                <a>
                  <button onFocus={(e) => {e.target.style.backgroundColor = '#9CB4CC70'}} onBlur={(e) => { e.target.style.backgroundColor = ''}} className={"sidebar__button" + (router.asPath === ('/' + val.name) ? " active_sidebar__button" : "")}>{val.title}</button>
                </a>
              </Link>
            )
          })
        }
        
        {/* <button className={"sidebar__button" + " active_sidebar__button"}>Welcome</button>
        <Link href="/about">       
          <button className="sidebar__button">About</button>
        </Link>
        <button className="sidebar__button">Terms & Conditions</button>
        <button className="sidebar__button">Privacy & Policy</button> */}
        

    </div>
  )
}

export default Sidebar