import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Rule {
  id: number;
  name: string;
  description: string;
  type: 'predefined' | 'custom';
}

interface RulesContextType {
  selectedRules: Rule[];
  addRule: (rule: Rule) => void;
  removeRule: (ruleId: number) => void;
  isRuleSelected: (ruleId: number) => boolean;
}

const RulesContext = createContext<RulesContextType | undefined>(undefined);

export function RulesProvider({ children }: { children: ReactNode }) {
  const [selectedRules, setSelectedRules] = useState<Rule[]>([]);

  const addRule = (rule: Rule) => {
    setSelectedRules((prev) => {
      // Check if rule already exists
      if (prev.some((r) => r.id === rule.id)) {
        return prev;
      }
      return [...prev, rule];
    });
  };

  const removeRule = (ruleId: number) => {
    setSelectedRules((prev) => prev.filter((rule) => rule.id !== ruleId));
  };

  const isRuleSelected = (ruleId: number) => {
    return selectedRules.some((rule) => rule.id === ruleId);
  };

  return (
    <RulesContext.Provider
      value={{
        selectedRules,
        addRule,
        removeRule,
        isRuleSelected,
      }}
    >
      {children}
    </RulesContext.Provider>
  );
}

export function useRules() {
  const context = useContext(RulesContext);
  if (context === undefined) {
    throw new Error('useRules must be used within a RulesProvider');
  }
  return context;
} 