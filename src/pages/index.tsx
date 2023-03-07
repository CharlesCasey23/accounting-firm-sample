import Head from 'next/head'
import { useAppState } from '@/context';
import Hero from '@/comps/home/hero';
import Services from '@/comps/home/services';
import About from '@/comps/home/about';
import GetStarted from '@/comps/home/getStarted';
import Insights from '@/comps/home/insights';
import GetToKnowUs from '@/comps/home/getToKnowUs';
import Newsletter from '@/comps/home/newsletter';
import { NewUserModal } from '@/comps/common';

const Home: React.FC = () => {
  const { isFirstTimeUser, isOpen } = useAppState();
  const mobileMenuDisplay = isOpen ? 'hidden' : '';

  return (
    <>
      <Head>
        <title>Accounting Firm Website Sample</title>
        <meta name="description" content="Accounting Firm Website Sample" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${mobileMenuDisplay} w-full pt-16 main-content-padding`}>
        <Hero />
        <Services />
        <About />
        <GetStarted />
        <Insights />
        <GetToKnowUs />
        <Newsletter />
      </main>
      {isFirstTimeUser && <NewUserModal />}
    </>
  )
}

export default Home;
