import { gelasio, headingRaleway, openSans, subHeadingRaleway } from "@/styles/fonts";
import ColleaguesMeetingImage from 'public/images/colleague-meeting.jpg';
import FormalPortraitImage from 'public/images/formal-portrait.jpg';
import LadiesMeetingImage from 'public/images/ladies-meeting.jpg';
import TeamWorkImage from 'public/images/team-work.jpg';
import TeamPlanningImage from 'public/images/team-planning.jpg';
import OpenSignImage from 'public/images/open-sign.jpg';
import { Button } from "../common";

type InsightCardType = {
  image: {
    src: string;
    alt: string;
  };
  details: string;
  title: string;
}

type InsightColumnType = {
  name: string;
  cards: InsightCardType[];
  cta?: string;
}

const InsightCard: React.FC<{ cardData: InsightCardType }> = ({ cardData }) => {
  const { image, details, title } = cardData;
  return (
    <div className='insight-card flex flex-col mb-8'>
      <img className='mb-4' src={image.src} alt={image.alt} />
      <div className={`${openSans.className} text-base text-black mb-4`}>
        {details}
      </div>
      <div className={`${gelasio.className} text-xl md:text-3xl text-dark-blue`}>
        {title}
      </div>
    </div>
  )
}

const InsightColumn: React.FC<{ columnData: InsightColumnType }> = ({ columnData }) => {
  const { name, cards } = columnData;
  return (
    <div className='insight-column flex flex-col py-6 px-8 mb-4 rounded bg-white'>
      <div className={`${headingRaleway.className} text-xl md:text-2xl text-dark-blue mb-8`}>
        {name}
      </div>
      <div className='flex flex-col justify-between'>
        {cards.map((card, index) => (
          <InsightCard key={`${index}-${card.title}`} cardData={card} />
        ))}
      </div>
      {columnData.cta && (
        <span className={`${headingRaleway.className} text-base text-dark-blue md:my-8`}>
          {columnData.cta}
          <i className='fa-solid fa-arrow-right ml-2'></i>
        </span>
      )}
    </div>
  )
}

const Insights: React.FC = () => {
  const insightData: InsightColumnType[] = [
    {
      name: 'RECENTLY POSTED',
      cards: [
        {
          image: { src: ColleaguesMeetingImage.src, alt: 'Colleagues having a meeting' },
          details: 'BLOG | 2/27/2023',
          title: 'Grant Management Miniseries Part II',
        },
        {
          image: { src: FormalPortraitImage.src, alt: 'Profile of a person' },
          details: 'VIDEO | 2/27/2023',
          title: 'The Latest on Tariffs and Their Impact on Business Strategies [Video and Audio]',
        }
      ],
      cta: 'See All Recently Posted'
    },
    {
      name: 'TRENDING',
      cards: [
        {
          image: { src: LadiesMeetingImage.src, alt: 'Ladies having a meeting' },
          details: 'ARTICLE | 1/20/2023',
          title: 'A Costly Situation for Businesses: Section 174 Capitalization is Here',
        },
        {
          image: { src: TeamWorkImage.src, alt: 'Team working collectively' },
          details: 'ARTICLE | 11/29/2022',
          title: 'Employee Retention Credit: Warnings and Wisdom',
        }
      ],
    },
    {
      name: 'EVENTS',
      cards: [
        {
          image: { src: TeamPlanningImage.src, alt: 'Team planning' },
          details: 'EVENT | 3/1/2023',
          title: 'Nonprofits: Strengthen and Streamline Your Month-End Close',
        },
        {
          image: { src: OpenSignImage.src, alt: 'Open sign for a business' },
          details: 'EVENT | 2/26/2023 – 3/1/2023',
          title: 'International Franchise Association Annual Convention',
        }
      ],
      cta: 'See All Events'
    },
  ]

  return (
    <div className='w-full pt-8 pb-16 bg-off-white md:py-14'>
      <div className='mobile-container content-container mx-auto'>
        <div className={`pb-2 mb-6 border-b-4 border-border-colour ${subHeadingRaleway.className} text-3xl text-dark-blue`}>
          Insights
        </div>
        <div className='flex flex-wrap justify-between'>
          {insightData.map((insightCol, index) => (
            <InsightColumn key={`${index}-${insightCol.name}`} columnData={insightCol} />
          ))}
        </div>
        <div className='h-20 flex items-end justify-center'>
          <Button text='See All Insights' />
        </div>
      </div>
    </div>
  )
}

export default Insights;