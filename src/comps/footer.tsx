import Link from 'next/link';
import { subHeadingRaleway } from '@/styles/fonts';
import { useAppState } from '@/context';

const SocialLink: React.FC<{ href: string; icon: string; }> = ({ href, icon }) => {
  return (
    <Link href={href}>
      <div className={`text-2xl mx-5`}>
        <i className={`fa-brands fa-${icon} fa-lg hover:text-accent-pink`}></i>
      </div>
    </Link>
  )
}

const Footer: React.FC = () => {
  const { isOpen } = useAppState();
  const year = new Date().getFullYear();
  return (
    <div className={`${isOpen ? 'hidden' : ''} flex flex-col text-white`}>
      <div className='py-4 md:py-9 bg-light-blue'>
        <div className='w-full flex justify-center mobile-container content-container mx-auto'>
          <SocialLink href='/' icon='linkedin' />
          <SocialLink href='/' icon='square-twitter' />
          <SocialLink href='/' icon='square-facebook' />
          <SocialLink href='/' icon='youtube' />
          <SocialLink href='/' icon='instagram' />
        </div>
      </div>
      <div className='py-6 md:py-14 bg-dark-blue'>
        <div className='flex flex-col mobile-container content-container mx-auto'>
          <div className='footer-content-container mx-auto'>
            <div className='flex flex-row flex-wrap md:flex-nowrap'>
              <div className='flex flex-col flex-grow mr-8 md:w-48 md:flex-grow-0'>
                <div className={`mb-4 ${subHeadingRaleway.className} text-lg font-semibold`}>
                  Get to Know Us
                </div>
                <ul>
                  <li className='mb-2'>Contact Us</li>
                  <li className='mb-2'>Locations</li>
                  <li className='mb-2'>Directory</li>
                  <li className='mb-2'>About</li>
                  <li className='mb-2'>Careers</li>
                  <li className='mb-2'>Speakers Bureau</li>
                  <li className='mb-2'>Global Affiliation</li>
                  <li className='mb-2'>Logos</li>
                </ul>
              </div>
              <div className='flex flex-col flex-grow mr-8 md:w-48 md:flex-grow-0'>
                <div className={`mb-4 ${subHeadingRaleway.className} text-lg font-semibold`}>
                  Get Started
                </div>
                <ul>
                  <li className='mb-2'>Client Login</li>
                  <li className='mb-2'>Pay Bill Online</li>
                  <li className='mb-2'>Email Subscriptions</li>
                  <li className='mb-2'>Industries</li>
                  <li className='mb-2'>Services</li>
                  <li className='mb-2'>Resources</li>
                  <li className='mb-2'>Blogs</li>
                  <li className='mb-2'>Webinars</li>
                  <li className='mb-2'>Media</li>
                </ul>
              </div>
              <div className='flex-grow flex flex-col w-fit mt-4 md:mt-0'>
                <div className={`mb-4 ${subHeadingRaleway.className} text-lg font-semibold`}>
                  Call us on 000-000-0000
                </div>
                <ul>
                  <li className='mb-2'>Privacy policy</li>
                  <li className='mb-2'>Terms of use and disclaimers</li>
                  <li className='mb-2'>Sample Company Wealth Advisors, LLC disclaimers</li>
                  <li className='mb-2'>
                    &#169; {year} Copyright Sample Company. All rights reserved.
                    &quot;Sample Company&quot; refer to Sample Company LLP.
                  </li>
                  <li className='mb-2'>
                    Investment advisory services are offered through Sample Company  Wealth Advisors,
                    LLC, a registered investment advisor.
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-fit pt-11'>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto vitae,
                vel necessitatibus ad est blanditiis voluptas explicabo mollitia suscipit beatae
                enim dolores unde tempore, dicta, iure aliquam eligendi quo?
              </div>
              <br />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto vitae,
                vel necessitatibus ad est blanditiis voluptas explicabo mollitia suscipit beatae
                enim dolores unde tempore, dicta, iure aliquam eligendi quo?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto vitae,
                vel necessitatibus ad est blanditiis voluptas explicabo mollitia suscipit beatae
                enim dolores unde tempore, dicta, iure aliquam eligendi quo?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto vitae,
                vel necessitatibus ad est blanditiis voluptas explicabo mollitia suscipit beatae
                enim dolores unde tempore, dicta, iure aliquam eligendi quo?
              </div>
              <br />
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;