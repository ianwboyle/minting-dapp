import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import navLogo from '../public/assets/Logo.png';

const style = {
  wrapper: 'fixed w-full h-14 md:h-20 shadow-xl z-[100] ease-in-out duration-300',
  navbarContainer: 'flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#FFF] dark:bg-[#2A2E35] ease-in duration-300',
  navLogoContainer: 'md:p-4 lg:p-0',
  logoImg: 'hover:cursor-pointer',
  navbarLinkContainer: 'hidden md:flex  ',
  navbarLink: 'ml-10 text-md font-bold uppercase text-[#454E56] hover:cursor-pointer hover:text-[#12181B] dark:text-[#B2BECD] dark:hover:text-[#F8F8F8]',
}

export const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.navbarContainer}>
        <div className={style.navLogoContainer}>
          <Link href='/'>
            <Image
              className={style.logoImg} 
              src={navLogo} 
              alt="/" 
              width={50} 
              height={50} 
            />
          </Link>
        </div>
        <div>
            <ul className={style.navbarLinkContainer}>
              <Link href='/'>
                <li className={style.navbarLink}>{`Buy NFT`}</li>
              </Link>
              <Link href='#about'>
                <li className={style.navbarLink}>{`Roadmap`}</li>
              </Link>
              <Link href='#skills'>
                <li className={style.navbarLink}>{`Team`}</li>
              </Link>
              <Link href='#projects'>
                <li className={style.navbarLink}>{`Gallery`}</li>
              </Link>
              <Link href='#projects'>
                <li className={style.navbarLink}>{`FAQ`}</li>
              </Link>
            </ul>
        </div>
        <div className='flex flex-row'>
          <div className='flex justify-center p-4'>
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  )
}



