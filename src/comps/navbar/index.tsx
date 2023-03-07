import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppState } from '@/context';
import { DesktopDropdown, MobileDropdown } from './dropdowns';
import MainNavLinks, { mainLinkData, MainLinkDataType } from './mainNavLinks'
import SecondaryNavLinks from './secondaryNavLinks';
import Logo from 'public/logo.png';
import { Searchbar } from '../common';

export const Navbar: React.FC = () => {
  const { isOpen, toggleMenu } = useAppState();
  const [activeLinkIndex, setActiveLinkIndex] = useState(-1);
  const [mainLinks, setMainLinks] = useState<MainLinkDataType[]>(mainLinkData);
  const [openSearchbar, setOpenSearchbar] = useState(false);
  const currentDropdownData = mainLinks[activeLinkIndex]?.dropDownData;
  const openDropDown = activeLinkIndex > -1 && currentDropdownData ? true : false;

  const onSelect = (index: number) => {
    const updatedLinks = mainLinks.map((link, linkIndex) => {
      if (link.active && index !== linkIndex) link.active = false;
      if (index === linkIndex) link.active = true;
      return link;
    })

    if (activeLinkIndex === index) {
      updatedLinks[index].active = false;
      setActiveLinkIndex(-1)
    } else {
      setActiveLinkIndex(index);
    }
    setMainLinks(updatedLinks)
  }

  const onSearch = () => {
    console.log('Clicked')
    if (!openDropDown) setOpenSearchbar(!openSearchbar);
  }

  return (
    <>
      <div className='navbar flex flex-row p-1 fixed w-full h-16 z-20 drop-shadow-lg bg-white md:p-0'>
        <div className='navbar-icons flex px-3 justify-center items-center text-dark-blue md:hidden' onClick={toggleMenu}>
          {isOpen ? (
            <i className='fa-solid fa-xmark fa-2x'></i>
          ) : (
            <i className='fa-solid fa-bars fa-2x'></i>
          )}
        </div>
        <div className='content-container flex flex-grow justify-center items-center md:flex-grow-0 md:mx-auto md:justify-between'>
          <div>
            <Link href='/'>
              <img className='md:h-20 md:w-20' src={Logo.src} height={50} width={50} alt='logo' />
            </Link>
          </div>
          <div className='hidden text-dark-blue md:flex md:flex-col md:h-full md:w-8/12 md:justify-between'>
            <SecondaryNavLinks />
            <MainNavLinks linkData={mainLinks} searchIsOpen={openSearchbar} onSelect={onSelect} onSearch={onSearch} />
          </div>
        </div>
        <div
          className='navbar-icons flex px-3 justify-center items-center text-dark-blue md:hidden'
          onClick={onSearch}
        >
          {openSearchbar ? (
            <i className='fa-solid fa-xmark fa-2x'></i>
          ) : (
            <i className='fa-solid fa-magnifying-glass fa-2x'></i>
          )}
        </div>
      </div>
      <MobileDropdown mainLinks={mainLinks} />
      {openDropDown && currentDropdownData && <DesktopDropdown dropdownData={currentDropdownData} />}
      {openSearchbar && <Searchbar />}
    </>
  )
}

export default Navbar;