import { StaticImageData } from 'next/image';
import TeamGetTogether from 'public/images/team-get-together.jpg'
import FinancialPlanning from 'public/images/financial-planning.jpg'
import Outdoors from 'public/images/outdoors.jpg'
import { subHeadingRaleway } from '@/styles/fonts';

export type MainLinkDropdownDataType = {
  cta: {
    image: StaticImageData;
    text: string;
    label: string;
  };
  tabs: {
    [index: string]: string[];
  };
}

export type MainLinkDataType = {
  title: string;
  active: boolean;
  dropDownData?: MainLinkDropdownDataType;
}

type MainNavLinkProps = {
  title: string;
  chevron?: boolean;
  active?: boolean;
  onSelect: () => void;
};

type MainNavLinksProps = {
  linkData: MainLinkDataType[],
  searchIsOpen: boolean;
  onSelect: (index: number) => void;
  onSearch: () => void;
};

export const mainLinkData: MainLinkDataType[] = [
  {
    title: 'Who We Serve',
    active: false,
    dropDownData: {
      cta: {
        image: TeamGetTogether,
        text: "Riches without Health doesn't Create Wealth: Assess Your Business's Financial Health",
        label: 'Learn More'
      },
      tabs: {
        ['All Industries']: [
          'Agribusiness, Food, and Beverage',
          'Construction',
          'Education',
          'Financial Services and Private Capital',
          'Government',
          'Health Care and Life Sciences',
          'Manufacturing, Transportation, and Logistics',
          'Nonprofits',
          'Professional Services',
          'Real Estate',
          'Retail and Hospitality',
          'Technology',
          'Telecommunications',
        ],
        ['Our Clients']: [
          'Employee Benefit Plan Sponsors',
          'Global',
          'Government Contractors',
          'Governmental Entities',
          'Individuals',
          'Large Enterprises',
          'Nonprofits',
          'Private Business Owners',
          'Startup Businesses',
        ]
      }
    }
  },
  {
    title: 'What We Do',
    active: false,
    dropDownData: {
      cta: {
        image: FinancialPlanning,
        text: "Market Trends That Could Change Your Path to Financial Freedom",
        label: 'Learn More',
      },
      tabs: {
        ['All Services']: [
          'Audit',
          'Consulting and Outsourcing',
          'Digital',
          'Tax',
          'Wealth Advisory',
        ]
      },
    }
  },
  {
    title: 'Who We Are',
    active: false,
    dropDownData: {
      cta: {
        image: Outdoors,
        text: 'Video: The Seamless Experience',
        label: 'Watch Now',
      },
      tabs: {
        ['Who We Are']: [
          'Our Leadership',
          'Community Impact',
          'Diversity, Equity, and Inclusion',
          'Directory',
          'International Reach',
          'Inspired Careers',
          'Sustainability and ESG',
        ]
      },
    }
  },
  { title: 'Insights', active: false },
  { title: 'Careers', active: false },
]

const MainNavLink: React.FC<MainNavLinkProps> = ({ title, onSelect, chevron = false, active = false }) => {
  return (
    <div
      className={`main-nav-link ${active ? 'active-nav-link' : ''} w-fit cursor-pointer`}
      onClick={onSelect}
    >
      <div className='main-nav-link-text'>
        <span className={`${subHeadingRaleway.className} text-xl`}>{title}</span>
        {chevron && <i className='fa-solid fa-chevron-down ml-2 text-sm'></i>}
      </div>
      <div className='nav-link-stripe hidden p-1 bg-main-pink'></div>
    </div>
  )
}

const MainNavLinks: React.FC<MainNavLinksProps> = ({ linkData, searchIsOpen, onSelect, onSearch }) => {
  return (
    <div className='flex flex-row justify-between'>
      {linkData && linkData.map(({ title, active, dropDownData }, index) => (
        <MainNavLink
          key={`${index}-${title}`}
          title={title}
          active={active}
          chevron={!!dropDownData}
          onSelect={() => onSelect(index)} />
      ))}
      <div
        className={`w-6 pb-4 ${subHeadingRaleway.className} text-2xl text-center`}
        onClick={onSearch}
      >
        {searchIsOpen ? (
          <i className='fa-solid fa-xmark'></i>
        ) : (
          <i className='fa-solid fa-magnifying-glass'></i>
        )}
      </div>
    </div>
  )
}

export default MainNavLinks;