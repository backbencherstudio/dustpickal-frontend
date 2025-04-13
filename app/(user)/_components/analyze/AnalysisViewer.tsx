import React, { useState } from 'react';
import { useAnalysis } from '@/app/context/AnalysisContext';
import AnalysisResults from './AnalysisResults';
import FailureResults from './FailureResults';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

type ViewType = 'full' | 'failures';

export default function AnalysisViewer() {
    const [currentView, setCurrentView] = useState<ViewType>('full');
    const { analysisResults, selectedDocument } = useAnalysis();

    if (!selectedDocument || analysisResults.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col">
            <Select
                value={currentView}
                onValueChange={(value: ViewType) => setCurrentView(value)}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="full">Full Document</SelectItem>
                    <SelectItem value="failures">Failures</SelectItem>
                </SelectContent>
            </Select>

            {currentView === 'full' ? <AnalysisResults /> : <FailureResults />}
        </div>
    );
} 