import React, { useState } from 'react';
import { useAnalysis } from '@/app/context/AnalysisContext';
import RichTextEditor from '@/app/components/RichTextEditor';
import { useAnalyzeDocumentDownloadMutation } from '@/app/store/api/analyzeApi';
import mammoth from 'mammoth';

interface AnalysisDocumentDownloadResponse {
    success: boolean;
    message: string;
    data: {
        fileName: string;
        mimeType: string;
        base64: string;
    };
}

export default function AnalysisResults() {
    const { analysisResults, selectedDocument, setAnalysisResults } = useAnalysis();
    const [showMenu, setShowMenu] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedResults, setEditedResults] = useState<any>(null);
    const [download, { isLoading }] = useAnalyzeDocumentDownloadMutation();
    const [documentContent, setDocumentContent] = useState<string>('');

    const currentDocResults = analysisResults.find(result => result.fileName === selectedDocument);

    console.log('analysisResults', analysisResults);

    if (!currentDocResults) {
        return null;
    }

    const handleEdit = () => {
        setEditedResults(JSON.parse(JSON.stringify(currentDocResults)));
        setIsEditing(true);
        setShowMenu(false);
    };

    const handleSave = () => {
        setAnalysisResults(prev =>
            prev.map(result =>
                result.fileName === selectedDocument ? editedResults : result
            )
        );
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedResults(null);
        setIsEditing(false);
    };

    const handleResultChange = (index: number, field: 'ruleTitle' | 'analysis' | 'matched', content: any) => {
        setEditedResults(prev => ({
            ...prev,
            analyses: prev.analyses.map((result: any, i: number) =>
                i === index ? { ...result, [field]: content } : result
            )
        }));
    };

    const handleDownload = async () => {
        try {
            const response = await download(currentDocResults.documentId);
            if ('data' in response && response.data) {
                const downloadResponse = response as unknown as AnalysisDocumentDownloadResponse;
                const base64Data = downloadResponse.data.base64;
                
                // Convert base64 to binary
                const binaryString = atob(base64Data);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }

                // Create blob from binary data
                const blob = new Blob([bytes], {
                    type: downloadResponse.data.mimeType || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                });

                // Create download link
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = downloadResponse.data.fileName || `${currentDocResults.fileName}.docx`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);

                // Try to convert to HTML for display
                try {
                    const arrayBuffer = await blob.arrayBuffer();
                    const result = await mammoth.convertToHtml({ arrayBuffer });
                    const html = result.value;
                    setDocumentContent(html);
                } catch (conversionError) {
                    console.error('Conversion error:', conversionError);
                    setDocumentContent('<p>Error converting document to readable format.</p>');
                }
            }
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    return (
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Full Document</h2>
                <div className="relative">
                    {isEditing ? (
                        <div className="flex gap-2">
                            <button
                                onClick={handleCancel}
                                className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-3 py-1 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded"
                            >
                                Save
                            </button>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => setShowMenu(!showMenu)}
                                className="p-1 hover:bg-gray-100 rounded-full"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {showMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 py-2">
                                    <button
                                        onClick={handleEdit}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2" onClick={handleDownload}>
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Download
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <div className="bg-white rounded-lg p-4">
                <div className="flex justify-end items-center gap-2 mb-4">
                    <div className="flex justify-end items-center gap-2 mb-4 bg-white p-2 rounded-lg border">
                        <div className="p-2 bg-[#1D1F2C] rounded">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <span className="text-lg font-medium">{currentDocResults.fileName}</span>
                    </div>
                </div>

                {/* Display converted document content */}
                {documentContent && (
                    <div className="mt-4 p-4 border rounded-lg">
                        <div dangerouslySetInnerHTML={{ __html: documentContent }} />
                    </div>
                )}

                <div className="space-y-4">
                    {(isEditing ? editedResults.analyses : currentDocResults.analyses).map((result: any, index: number) => (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                            <div className="flex items-start gap-2">
                                <button
                                    onClick={() => isEditing && handleResultChange(index, 'matched', !result.matched)}
                                    className={`mt-1 w-2 h-2 rounded-full ${result.matched ? 'bg-green-500' : 'bg-red-500'} ${isEditing ? 'cursor-pointer hover:scale-110' : ''}`}
                                />
                                <div className="flex-1">
                                    {isEditing ? (
                                        <>
                                            <RichTextEditor
                                                id={`rule-editor-${index}`}
                                                value={result.ruleTitle}
                                                onChange={(content) => handleResultChange(index, 'ruleTitle', content)}
                                                minHeight={100}
                                            />
                                            <div className="mt-2">
                                                <RichTextEditor
                                                    id={`message-editor-${index}`}
                                                    value={result.analysis}
                                                    onChange={(content) => handleResultChange(index, 'analysis', content)}
                                                    minHeight={100}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className={`text-sm font-medium ${result.matched ? 'text-[#292D32]' : 'text-red-500'}`}
                                                dangerouslySetInnerHTML={{ __html: result.ruleTitle }}
                                            />
                                            <div
                                                className={`text-sm mt-1 ${result.matched ? 'text-[#4A4C56]' : 'text-red-500'}`}
                                                dangerouslySetInnerHTML={{ __html: result.analysis }}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 