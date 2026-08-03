import { createContext, ReactNode, useContext, useState } from "react";

interface TechnicalUserContext {
  isTechnicalUser: boolean;
  toggleTechUser: () => void;
}

const TechinalUserContext = createContext<TechnicalUserContext | undefined>(
  undefined,
);

export function TechinalUserProvider({ children }: { children: ReactNode }) {
  const [isTechnicalUser, setIsTechnicalUser] = useState(false);

  const toggleTechUser = () => {
    setIsTechnicalUser((prev) => !prev);
  };

  return (
    <TechinalUserContext.Provider value={{ isTechnicalUser, toggleTechUser }}>
      {children}
    </TechinalUserContext.Provider>
  );
}

export function useTechincalUserContext() {
  const context = useContext(TechinalUserContext);
  if (!context) {
    throw new Error("useSharedState must be used within a MyStateProvider");
  }
  return context;
}
