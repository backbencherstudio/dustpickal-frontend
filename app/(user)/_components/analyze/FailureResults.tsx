import React from 'react';
import { useAnalysis } from '@/app/context/AnalysisContext';

export default function FailureResults() {
    const { analysisResults, selectedDocument } = useAnalysis();

    const currentDocResults = analysisResults.find(result => result.fileName === selectedDocument);

    if (!currentDocResults) {
        return null;
    }

    const failures = currentDocResults.results.filter(result => !result.matched);

    if (failures.length === 0) {
        return (
            <div className="flex flex-col gap-4 mt-4">
                <h2 className="text-lg font-medium">Failures</h2>
                <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-500">No failures found</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-lg font-medium">Failures</h2>
            <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-[#1D1F2C] rounded">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <span className="text-lg font-medium">{currentDocResults.fileName}</span>
                </div>

                <div className="space-y-4">
                    {failures.map((failure, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                            <div className="flex items-start gap-2">
                                <div className="mt-1 w-2 h-2 rounded-full bg-red-500" />
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-red-500">
                                        {failure.rule}
                                    </h3>
                                    <p className="text-sm mt-1 text-red-500">
                                        {failure.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 