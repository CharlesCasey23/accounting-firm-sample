import { headingRaleway } from '@/styles/fonts';
import { FormEvent } from 'react';

export const Button: React.FC<{ text: string, inverted?: boolean }> = ({ text, inverted = false }) => {
  const invertedButtonStyle = 'bg-transparent text-dark-blue';
  const buttonStyle = !inverted ? 'bg-dark-blue text-white' : invertedButtonStyle;
  const hoverButtonStyle = 'md:hover:bg-transparent md:hover:border-2 md:hover:border-dark-blue md:hover:text-dark-blue';
  return (
    <button
      className={`w-full py-2 px-6 rounded text-lg md:text-xl ${headingRaleway.className} border-2 border-dark-blue ${buttonStyle} md:w-fit ${hoverButtonStyle}`}
      onClick={() => console.log({ message: 'Button clicked!' })}
    >
      {text}
    </button>
  )
}

export const Searchbar = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submited!')
  }

  return (
    <div className='searchbar-container fixed z-10 top-0 w-full p-4 mt-16 bg-black-transparent'>
      <form className='content mx-auto flex justify-center' onSubmit={onSubmit}>
        <input
          type='text'
          name='search-text'
          placeholder='Search'
          className='p-2 border border-slate-400 mx-2 md:w-3/4 outline-none'
        />
        <button
          type='submit'
          className={`py-2 px-6 rounded text-lg ${headingRaleway.className} border-2 border-dark-blue bg-dark-blue text-white`}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export const NewUserModal = () => {
  return (
    <div className='fixed top-0 z-30 flex justify-center items-center h-screen w-screen bg-black-transparent'>
      <div className='p-4 bg-white'>
        TEST
      </div>
    </div>
  )
}