import { gelasio, normalRaleway } from '@/styles/fonts';
import HeroImage from 'public/images/accountant-stock.jpg'

const Hero: React.FC = () => {
  return (
    <div className='relative hero'>
      <img className='hero' src={HeroImage.src} alt='Accountant looking at stock prices' />
      <div className='w-full absolute bottom-0 h-1/2 bg-pink-transparent'>
        <div className='container content-container mx-auto h-full flex flex-col text-center text-white pt-5'>
          <div className={`${gelasio.className} text-3xl md:text-5xl`}>It takes consistency.</div>
          <div className={`${normalRaleway.className} text-xl md:text-3xl mt-4 md:mt-5`}>
            Make opportunities from challenges. We'll get you where need to be.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;