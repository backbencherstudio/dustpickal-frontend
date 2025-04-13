import { createContext, useContext, ReactNode } from "react";
import { RulesProvider, useRules } from "./RulesContext";
import { AnalysisProvider, useAnalysis } from "./AnalysisContext";

// Define the type for the MainContext
interface MainContextType {
  // We'll include methods to access other contexts
  useRules: typeof useRules;
  useAnalysis: typeof useAnalysis;
}

// Create the context with a default value
export const MainContext = createContext<MainContextType>({
  useRules: () => {
    throw new Error("useRules must be used within a MainProvider");
  },
  useAnalysis: () => {
    throw new Error("useAnalysis must be used within a MainProvider");
  },
});

// Create a hook to use the MainContext
export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain must be used within a MainProvider");
  }
  return context;
};

// MainProvider component that wraps all other providers
export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MainContext.Provider
      value={{
        useRules,
        useAnalysis,
      }}
    >
      <RulesProvider>
        <AnalysisProvider>
          {children}
        </AnalysisProvider>
      </RulesProvider>
    </MainContext.Provider>
  );
};
