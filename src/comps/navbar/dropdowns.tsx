import { useMobileMenu } from "@/context";
import { headingRaleway, normalRaleway, subHeadingRaleway } from "@/styles/fonts";
import { useEffect, useState } from "react";
import { MainLinkDataType, MainLinkDropdownDataType } from "./mainNavLinks";

type DesktopDropdownControlButtonProps = {
  title: string;
  active?: boolean;
  onTabSelect: () => void;
}

type MainMobileDropdownlinkProps = {
  title: string;
  chevron: boolean;
  onSelect: () => void;
}

type SecondLevelDropdownProps = {
  tabs: {
    [index: string]: string[];
  };
  onSelect: (index: number) => void;
}

const DesktopDropdownControlButton: React.FC<DesktopDropdownControlButtonProps> = ({ title, onTabSelect, active = false }) => {
  return (
    <div
      className={`p-3 mb-1 cursor-pointer ${subHeadingRaleway.className} text-lg text-dark-blue border-l-8 ${active ? 'border-main-pink' : 'border-off-white'} bg-gray-200`}
      onClick={onTabSelect}
    >
      {title}
    </div>
  )
}

export const DesktopDropdown: React.FC<{ dropdownData: MainLinkDropdownDataType }> = ({ dropdownData }) => {
  const dropdownTabs = Object.keys(dropdownData.tabs);
  const [currentTab, setCurrentTab] = useState(dropdownTabs[0]);
  const currentTabData = dropdownData.tabs[currentTab];
  const currentCta = dropdownData.cta;
  const afterTabContentStyle = 'after:content-[""] after:absolute after:top-0 after:h-full after:w-full after:-right-full after:bg-gray-200';

  const onTabSelect = (tab: string) => {
    setCurrentTab(tab);
  }

  useEffect(() => setCurrentTab(dropdownTabs[0]), [dropdownData])

  return (
    <div className={`fixed z-10 top-0 bottom-0 w-full dropdown flex-col bg-black-transparent`}>
      <div className='bg-off-white'>
        <div className='content-container flex mx-auto'>
          <div className='dropdown-controls my-6'>
            {dropdownTabs.map((title, index) => (
              <DesktopDropdownControlButton
                key={`${index}-${title}`}
                title={title}
                active={currentTab == title}
                onTabSelect={() => onTabSelect(title)}
              />
            ))}
          </div>
          <div className={`flex-grow py-6 pl-4 bg-gray-200 relative ${afterTabContentStyle}`}>
            <div className='flex justify-between'>
              <div className='dropdown-items'>
                <div className={`${headingRaleway.className} text-xl text-dark-blue`}>
                  {currentTab}
                </div>
                <div className={`mt-6 ${currentTabData && currentTabData.length > 5 ? 'columns-2' : ''}`}>
                  {currentTabData && currentTabData.map((link, index) => (
                    <div
                      key={`${index}-${link}`}
                      className={`cursor-pointer my-3 break-words break-inside-avoid ${subHeadingRaleway.className} text-lg text-dark-blue`}
                      onClick={() => console.log({ message: 'Clicked!' })}
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
              <div className='dropdown-cta flex-grow-0'>
                <img src={currentCta.image.src} className='w-full h-36' />
                <div className={`mt-3 ${normalRaleway.className} text-slate-700`}>{currentCta.text}</div>
                <div
                  className={`cursor-pointer mt-2 ${headingRaleway.className} text-dark-blue`}
                  onClick={() => console.log({ message: 'Clicked!' })}
                >
                  {currentCta.label}
                  <i className='fa-solid fa-arrow-right ml-2 text-dark-blue'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MainMobileDropdownlink: React.FC<MainMobileDropdownlinkProps> = ({ title, chevron, onSelect }) => {
  const textStyle = `${subHeadingRaleway.className} text-xl text-dark-blue`
  const borderStyle = 'border-b border-gray-300'
  const linkStyle = `flex flex-row px-4 py-3 items-center cursor-pointer ${textStyle} ${borderStyle}`;
  return (
    <div
      onClick={onSelect}
      className={linkStyle}
    >
      <div className='flex-grow'>{title}</div>
      {chevron && <i className='fa-solid fa-chevron-right'></i>}
    </div>
  )
}

const SecondaryMobileDropdownLink: React.FC<{ title: string; }> = ({ title }) => {
  return (
    <div className={`px-4 py-3 cursor-pointer ${normalRaleway.className} text-base text-dark-blue`}>
      {title}
    </div>
  )
}

const SecondLevelSection: React.FC<{ tabData: { title: string, links: string[] } }> = ({ tabData }) => {
  const { title, links } = tabData;
  return (
    <div>
      <div className={`p-4 bg-dark-blue text-white ${subHeadingRaleway.className} text-xl`}>
        {title}
      </div>
      {links.map((link, index) => (
        <div
          key={`${index}-${link}`}
          className={`p-4 text-dark-blue ${subHeadingRaleway.className} text-base`}
        >
          {link}
        </div>
      ))}
    </div>
  )
}

const SecondLevelDropdown: React.FC<SecondLevelDropdownProps> = ({ tabs, onSelect }) => {
  const tabKeys = Object.keys(tabs);
  return (
    <div className='second-level-dropdown absolute top-0 pt-16 pb-1 w-full bg-off-white'>
      <div className='p-4 bg-main-pink text-white'>
        <span
        className={`${subHeadingRaleway.className} text-xl`}
        onClick={() => onSelect(-1)}
        >
          <i className='fa-solid fa-chevron-left mr-2'></i>
          Back
        </span>
      </div>
      {tabKeys.map((tab, index) => (
        <SecondLevelSection
          key={`${index}-${tab}`}
          tabData={{ title: tab, links: tabs[`${tab}`] }}
        />
      ))}
    </div>
  )
}

export const MobileDropdown: React.FC<{ mainLinks: MainLinkDataType[]; }> = ({ mainLinks }) => {
  const { isOpen } = useMobileMenu();
  const [activeIndex, setActiveIndex] = useState(-1);
  const activeDropdownData = mainLinks[activeIndex]?.dropDownData;
  const openSecondLevel = activeIndex > -1 && activeDropdownData ? true : false;

  const onSelect = (index: number) => {
    setActiveIndex(index);
  }

  return (
    <>
      <div className={`absolute h-full w-full z-10 pt-16 ${!isOpen || openSecondLevel ? 'hidden' : ''} flex-col md:hidden bg-off-white`}>
        <div className='h-full w-full'>
          {mainLinks.map(({ title, dropDownData }, index) => (
            <MainMobileDropdownlink
              title={title}
              chevron={!!dropDownData}
              onSelect={() => onSelect(index)}
            />
          ))}
          <SecondaryMobileDropdownLink title='Contact Us' />
          <SecondaryMobileDropdownLink title='Events' />
          <SecondaryMobileDropdownLink title='Locations' />
          <SecondaryMobileDropdownLink title='Client Login' />
          <div className='p-4'>
            <select className='w-full px-2 py-2 rounded border border-slate-400 text-black bg-white'>
              <option>Select Language</option>
            </select>
          </div>
        </div>
      </div>
      {openSecondLevel &&
        activeDropdownData &&
        activeDropdownData.tabs && (
          <SecondLevelDropdown onSelect={onSelect} tabs={activeDropdownData.tabs} />
        )}
    </>

  )
}
