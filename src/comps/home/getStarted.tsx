import { gelasio, headingRaleway, normalRaleway } from '@/styles/fonts';
import PortraitImage from 'public/images/accountant-portrait.jpg';
import { Button } from '../common';

const GetStarted: React.FC = () => {
  return (
    <div className='get-started relative bg-accent-light-green'>
      <div className='get-started content-container flex flex-col md:flex-row md:justify-between md:mx-auto'>
        <div>
          <img className='content-image' src={PortraitImage.src} />
          <div className='feature-accent-right bg-green-transparent'></div>
        </div>
        <div className='content flex flex-col justify-center text-center pt-7 pb-12 mx-auto md:mx-0 md:text-start'>
          <div className='flex justify-center md:justify-start'>
            <div className={`${headingRaleway.className} w-fit text-sm text-dark-blue pb-2 mb-6 border-b-4 border-b-accent-dark-green md:text-base`}>
              YOU ARE THE FOCUS
            </div>
          </div>
          <div className={`${gelasio.className} text-3xl text-dark-blue md:text-4xl`}>What's your goals?</div>
          <div className={`${normalRaleway.className} mt-6 text-base text-slate-800 md:text-2xl`}>
            To help you get where you want to go by bring equilibrium.
          </div>
          <span className='mt-10'>
            <Button text='Get Started' inverted />
          </span>
        </div>
      </div>
    </div>
  )
}

export default GetStarted;