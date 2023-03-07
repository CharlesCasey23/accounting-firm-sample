import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type AppContextType = { 
  isFirstTimeUser: boolean;
  isOpen: boolean;
  toggleMenu: () => void; 
};

type HasVisitedType = {
  date: Date;
  hasVisited: boolean;
}

const AppContext = createContext<AppContextType>({ isFirstTimeUser: false, isOpen: false, toggleMenu: () => {} });

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const checkIfUserHasVisited = () => {
    const hasVisited = JSON.stringify({ date: new Date(), hasVisited: true });
    const locallyStored = localStorage.getItem('has-visited-before');
    const storedValue: HasVisitedType = locallyStored ? JSON.parse(locallyStored) : '';
    const isDayOld = storedValue && new Date(storedValue.date).getTime() > new Date().getTime() + 24*60*60*1000;

    if (new Date(storedValue.date).getTime() == new Date().getTime()) return;

    if (!storedValue || isDayOld) {
      localStorage.setItem('has-visited-before', hasVisited)
      setIsFirstTimeUser(true);
    } else {
      setIsFirstTimeUser(false);
    }
  }

  useEffect(() => {
    console.log({ isFirstTimeUser })
    checkIfUserHasVisited();
  }, [isFirstTimeUser])

  return (
    <AppContext.Provider value={{isFirstTimeUser, isOpen, toggleMenu}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppState = () => useContext(AppContext);