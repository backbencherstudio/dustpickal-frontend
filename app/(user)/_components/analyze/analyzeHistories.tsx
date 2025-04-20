import { useState } from "react";
import { useAnalyzeHistoryQuery } from "@/app/store/api/analyzeApi";

interface Analysis {
  ruleId: string;
  ruleTitle: string;
  ruleDescription: string;
  result: string;
  matched: boolean;
}

interface Document {
  id: string;
  fileName: string;
  type: string;
  analyzedAt: string;
}

interface AnalysisItem {
  document: Document;
  analyses: Analysis[];
}

interface AnalyzeHistoryResponse {
  success: boolean;
  message: string;
  data: {
    todayData: AnalysisItem[];
    yesterday: AnalysisItem[];
    last7days: AnalysisItem[];
  };
}

export default function AnalyzeHistories({ searchQuery }: { searchQuery: string }) {
  const [isPredefinedOpen, setIsPredefinedOpen] = useState(true);
  const [isCustomOpen, setIsCustomOpen] = useState(true);
  const [isLast7DaysOpen, setIsLast7DaysOpen] = useState(true);

  const { data: analyzeHistory } = useAnalyzeHistoryQuery(searchQuery) as { data: AnalyzeHistoryResponse | undefined };

  const textLimiter = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  }

  return (
    <div className="pt-3 pb-10 w-full flex flex-col gap-4">
      <div className="">
        <button
          className="w-full mb-4 flex justify-between items-center py-2 border-b border-[#D2D2D5]"
          onClick={() => setIsPredefinedOpen(!isPredefinedOpen)}
        >
          <p className="font-medium text-[#1D1F2C]">Today</p>
          <span className={`flex items-center transition-transform duration-300 ${isPredefinedOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isPredefinedOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4">
            {analyzeHistory?.data?.todayData?.map((item) => (
              <div key={item.document.id} className="flex flex-col gap-2">
                <h3 className="text-[#1D1F2C]">{textLimiter(item.document.fileName, 25)}</h3>
                {/* {item.analyses.map((analysis, index) => (
                  <div key={index} className="pl-4">
                    <p className="text-sm text-gray-600">{textLimiter(analysis.ruleTitle, 30)}</p>
                  </div>
                ))} */}
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
          <p className="font-medium text-[#1D1F2C]">Yesterday</p>
          <span className={`flex items-center transition-transform duration-300 ${isCustomOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isCustomOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4">
            {analyzeHistory?.data?.yesterday?.map((item) => (
              <div key={item.document.id} className="flex flex-col gap-2">
                <h3 className="text-[#1D1F2C]">{textLimiter(item.document.fileName, 25)}</h3>
                {/* {item.analyses.map((analysis, index) => (
                  <div key={index} className="pl-4">
                    <p className="text-sm text-gray-600">{textLimiter(analysis.ruleTitle, 30)}</p>
                  </div>
                ))} */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          className="w-full mb-4 flex justify-between items-center py-2 border-b border-[#D2D2D5]"
          onClick={() => setIsLast7DaysOpen(!isLast7DaysOpen)}
        >
          <p className="font-medium text-[#1D1F2C]">Last 7 days</p>
          <span className={`flex items-center transition-transform duration-300 ${isLast7DaysOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isLast7DaysOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4">
            {analyzeHistory?.data?.last7days?.map((item) => (
              <div key={item.document.id} className="flex flex-col gap-2">
                <h3 className="text-[#1D1F2C]">{textLimiter(item.document.fileName, 25)}</h3>
                {/* {item.analyses.map((analysis, index) => (
                  <div key={index} className="pl-4">
                    <p className="text-sm text-gray-600">{textLimiter(analysis.ruleTitle, 30)}</p>
                  </div>
                ))} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
