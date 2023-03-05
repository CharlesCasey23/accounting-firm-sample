import { headingRaleway } from '@/styles/fonts';

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