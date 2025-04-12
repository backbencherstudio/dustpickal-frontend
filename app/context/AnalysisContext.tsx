import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnalysisResult {
    fileName: string;
    results: {
        rule: string;
        matched: boolean;
        message: string;
    }[];
}

interface AnalysisContextType {
    analysisResults: AnalysisResult[];
    setAnalysisResults: React.Dispatch<React.SetStateAction<AnalysisResult[]>>;
    selectedDocument: string | null;
    setSelectedDocument: React.Dispatch<React.SetStateAction<string | null>>;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: ReactNode }) {
    const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
    const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

    return (
        <AnalysisContext.Provider value={{
            analysisResults,
            setAnalysisResults,
            selectedDocument,
            setSelectedDocument
        }}>
            {children}
        </AnalysisContext.Provider>
    );
}

export function useAnalysis() {
    const context = useContext(AnalysisContext);
    if (context === undefined) {
        throw new Error('useAnalysis must be used within an AnalysisProvider');
    }
    return context;
} 