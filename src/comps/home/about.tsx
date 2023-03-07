import { gelasio, headingRaleway, normalRaleway } from '@/styles/fonts';
import WorkImage from 'public/images/accountant-working.jpg';
import { Button } from '../common';

const About: React.FC = () => {
  return (
    <div className='relative my-10 md:my-16'>
      <div className='content-container flex flex-col md:flex-row-reverse md:justify-between md:mx-auto'>
        <img className='about-image' src={WorkImage.src} />
        <div className='feature-accent bg-accent-green'></div>
        <div className='mobile-container mx-auto pt-12 flex flex-col justify-center text-center md:text-start md:pt-0'>
          <div className='flex justify-center md:justify-start'>
            <div className={`${headingRaleway.className} w-fit text-sm text-dark-blue pb-2 mb-6 border-b-4 border-b-accent-dark-green md:text-base`}>
              OPPORTUNITY OVERFLOWS
            </div>
          </div>
          <div className={`${gelasio.className} text-3xl text-dark-blue md:text-4xl`}>Our passion is aiding you.</div>
          <div className={`${normalRaleway.className} mt-6 text-base text-slate-800 md:text-2xl`}>
            For our customers, our employees, and our communities, we are dedicated to providing possibilities.
            Together, as one family, we&apos;re trying to make those chances available.
          </div>
          <span className='mt-10'>
            <Button text='Why Choose Us?' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default About;