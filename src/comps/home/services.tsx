import { headingRaleway } from "@/styles/fonts";


const ServicesTile: React.FC<{ title: string; icon: string; }> = ({ title, icon }) => {
  return (
    <div className='services-tile flex flex-row my-1 rounded drop-shadow-lg bg-white md:flex-col-reverse md:w-52 md:h-48'>
      <div className='services-tile-stripe p-1 rounded-tl rounded-bl bg-light-pink md:rounded-none md:rounded-b md:hidden'></div>
      <div className='flex flex-col flex-grow px-6 py-4 md:items-center md:py-6'>
        <i className={`fa-solid fa-${icon} fa-4x hidden mb-5 text-dark-blue md:block`}></i>
        <div className={`flex items-center ${headingRaleway.className} text-xl text-dark-blue md:h-11 md:text-center`}>{title}</div>
      </div>
      <div className='flex justify-center items-center pr-5 rounded-tr rounded-br md:hidden'>
        <i className='fa-solid fa-chevron-right'></i>
      </div>
    </div>
  )
}

const Services: React.FC = () => {
  const servicesTiles = [
    { title: 'Wealth Advisory', icon: 'money-bill-trend-up' },
    { title: 'Digital', icon: 'desktop' },
    { title: 'Audit', icon: 'pen-clip' },
    { title: 'Tax', icon: 'scale-unbalanced' },
    { title: 'Consulting and Outsourcing', icon: 'clipboard' },
  ]
  return (
    <div className='relative -mt-8 md:-mt-12'>
      <div className='container content-container flex flex-col w-screen md:flex-row mx-auto md:justify-between'>
        {servicesTiles.map((serviceTile, index) => (
          <ServicesTile key={`${index}-${serviceTile.title}`} {...serviceTile} />
        ))}
      </div>
    </div>
  )
}

export default Services;