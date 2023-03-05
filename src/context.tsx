import { createContext, ReactNode, useContext, useState } from "react";

type MobileMenuContextType = { 
  isOpen: boolean; 
  toggleMenu: () => void; 
};

const MobileMenuContext = createContext<MobileMenuContextType>({ isOpen: false, toggleMenu: () => {} });

export const MobileMenuContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MobileMenuContext.Provider value={{isOpen, toggleMenu}}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export const useMobileMenu = () => useContext(MobileMenuContext);