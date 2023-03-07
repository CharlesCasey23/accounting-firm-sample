import { AppContextProvider } from '@/context';
import { ReactNode } from 'react';
import Footer from './footer';
import { Navbar } from './navbar';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppContextProvider>
      <div className='flex flex-col h-full'>
        <Navbar />
        <div className='flex flex-grow'>{children}</div>
        <Footer />
      </div>
    </AppContextProvider>
  )
}

export default Layout;