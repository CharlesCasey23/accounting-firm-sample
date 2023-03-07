import { gelasio, headingRaleway, normalRaleway } from '@/styles/fonts';
import AccountantsMeetingImage from 'public/images/accountant-meeting.jpg';
import { Button } from '../common';


const GetToKnowUs: React.FC = () => {
  return (
    <div className='relative md:mb-14'>
      <div className='content-container flex flex-col md:flex-row md:justify-between md:mx-auto'>
        <div>
          <img className='content-image' src={AccountantsMeetingImage.src} alt='Accountants having a meeting' />
        </div>
        <div className='mobile-container flex flex-col justify-center mt-6 mb-12 text-center mx-auto md:justify-start md:text-start md:mx-0 md:my-16'>
          <div className='flex justify-center md:justify-start'>
            <div className={`${headingRaleway.className} w-fit text-sm text-dark-blue pb-2 mb-6 border-b-4 border-b-accent-dark-green md:text-base`}>
              CUSTOMER EXPERIENCE
            </div>
          </div>
          <div className={`${gelasio.className} text-3xl text-dark-blue md:text-4xl`}>Moving forward together</div>
          <div className={`${normalRaleway.className} mt-6 text-base text-slate-800 md:text-2xl`}>
            With a culture we foster to be inclusive and bring different beliefs, assembling a team with a
            broad persective you expect. We experience success with our clients by welcoming and respecting
            our customers and ourselves.
          </div>
          <span className='mt-10'>
            <Button text='Get To Know Us' />
          </span>
        </div>
      </div>
      <div className='feature-accent-right bg-pink-transparent'></div>
    </div>
  )
}

export default GetToKnowUs;