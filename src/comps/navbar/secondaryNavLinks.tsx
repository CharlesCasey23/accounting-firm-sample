import { normalRaleway } from "@/styles/fonts"


const SecondaryNavLink: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={`${normalRaleway.className} px-4 text-base cursor-pointer`}>{title}</div>
  )
}

const SecondaryNavLinks: React.FC = () => {
  return (
    <div className='flex flex-row pt-6 justify-end'>
      <SecondaryNavLink title='Contact Us' />
      <SecondaryNavLink title='Events' />
      <SecondaryNavLink title='Locations' />
      <SecondaryNavLink title='Client Login' />
      <select className='w-48 px-2 py-1 rounded border border-slate-400 text-black bg-white'>
        <option>Select Language</option>
      </select>
    </div>
  )
}

export default SecondaryNavLinks;