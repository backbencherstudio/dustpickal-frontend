import { useState } from 'react';
import { useRules } from '@/app/context/RulesContext';

export default function AllRules() {
  const [activeTab, setActiveTab] = useState('predefined');
  const [isPredefinedOpen, setIsPredefinedOpen] = useState(true);
  const [isCustomOpen, setIsCustomOpen] = useState(true);
  const { selectedRules, addRule, removeRule, isRuleSelected } = useRules();

  const rules = {
    predefined: [
      {
        id: 1,
        name: "Basic Authentication dfsa dfdshbfsgsa df",
        description: "Authenticate users with username and password",
        type: "predefined"
      },
      {
        id: 2,
        name: "Rate Limiting dfsg fdasfgdsfadf rewtgrgfwergwrdgsdfg",
        description: "Limit number of requests per time window",
        type: "predefined"
      }
    ],
    custom: [
      {
        id: 3,
        name: "IP Whitelist dfsg fdasfgdsfadf rewtgrgfwergwrdgsdfg",
        description: "Allow requests only from specific IP addresses",
        type: "custom"
      },
      {
        id: 4,
        name: "Custom Header Check dfsg fdasfgdsfadf rewtgrgfwergwrdgsdfg",
        description: "Validate custom headers in requests",
        type: "custom"
      }
    ]
  };
  
  const textLimiter = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }

  const handleRuleToggle = (rule: any) => {
    if (isRuleSelected(rule.id)) {
      removeRule(rule.id);
    } else {
      addRule(rule);
    }
  };

  return (
    <div className="pt-3 pb-10 w-full">
      <div className="mb-8">
        <button
          className="w-full mb-4 flex justify-between items-center py-2 border-b border-[#D2D2D5]"
          onClick={() => setIsPredefinedOpen(!isPredefinedOpen)}
        >
          <p className="font-medium text-[#1D1F2C]">Predefined Rules</p>
          <span className={`flex items-center transition-transform duration-300 ${isPredefinedOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isPredefinedOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4">
            {rules.predefined.map(rule => (
              <div key={rule.id} className="flex flex-row gap-2">
                <input 
                  type="checkbox" 
                  checked={isRuleSelected(rule.id)}
                  onChange={() => handleRuleToggle(rule)}
                />
                <h3 className="text-[#1D1F2C]">{textLimiter(rule.name, 25)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          className="w-full mb-4 flex justify-between items-center py-2 border-b border-[#D2D2D5]"
          onClick={() => setIsCustomOpen(!isCustomOpen)}
        >
          <p className="font-medium text-[#1D1F2C]">Custom Rules</p>
          <span className={`flex items-center transition-transform duration-300 ${isCustomOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isCustomOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4">
            {rules.custom.map(rule => (
              <div key={rule.id} className="flex flex-row gap-2">
                <input 
                  type="checkbox" 
                  checked={isRuleSelected(rule.id)}
                  onChange={() => handleRuleToggle(rule)}
                />
                <h3 className="text-[#1D1F2C]">{textLimiter(rule.name, 25)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}