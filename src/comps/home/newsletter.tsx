import { gelasio, headingRaleway, normalRaleway } from "@/styles/fonts";
import { Button } from "../common";


const Newsletter: React.FC = () => {
  return (
    <div className='content content-container flex my-9 justify-center mx-auto md:my-20'>
      <div className='content content-container flex flex-col text-center'>
        <div className={`${gelasio.className} flex justify-center w-full text-3xl text-dark-blue md:text-4xl`}>
          Reap the Benefits of Our Promises
        </div>
        <div className={`${normalRaleway.className} w-fit mt-2 text-base text-slate-800 md:text-2xl`}>
          Unique insights and information delivery to your inbox
        </div>
        <div className='flex flex-row mt-5 justify-center'>
          <input className='p-2 border border-slate-400 mx-2 md:w-3/4' type='email' placeholder='Email Address' />
          <button
            className={`w-full py-2 px-3 rounded text-lg md:text-xl ${headingRaleway.className} border-2 border-dark-blue bg-dark-blue text-white md:w-fit md:hover:bg-transparent md:hover:border-2 md:hover:border-dark-blue md:hover:text-dark-blue`}
            onClick={() => console.log({ message: 'Button clicked!' })}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}


export default Newsletter;