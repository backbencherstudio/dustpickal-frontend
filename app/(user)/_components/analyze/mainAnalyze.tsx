import React, { useEffect } from 'react';
import Image from 'next/image';
import pdf from '@/public/assets/client/icons/pdf.svg';
import crossBg from "@/public/assets/client/icons/cross-icon.svg";
import ruleIcon from "@/public/assets/client/icons/rule-gray.svg";
import { useRules } from '@/app/context/RulesContext';
import { useAnalysis } from '@/app/context/AnalysisContext';
import { Plus, X } from 'lucide-react';
import { useAnalyzeMutation } from '@/app/store/api/analyzeApi';
import AnalysisViewer from './AnalysisViewer';

interface MainAnalyzeProps {
    uploadedFiles: {
        name: string;
        status: 'uploading' | 'failed' | 'success';
        progress: number;
        file: File;
    }[];
    setUploadedFiles: React.Dispatch<React.SetStateAction<{
        name: string;
        status: 'uploading' | 'failed' | 'success';
        progress: number;
        file: File;
    }[]>>;
}

export default function MainAnalyze({ uploadedFiles, setUploadedFiles }: MainAnalyzeProps) {
    const { selectedRules, removeRule } = useRules();
    const { setAnalysisResults, setSelectedDocument } = useAnalysis();
    const [analyze, { isLoading }] = useAnalyzeMutation();


    useEffect(() => {
        // Find files that are in 'uploading' state and haven't started progress simulation yet
        uploadedFiles.forEach(file => {
            if (file.status === 'uploading' && file.progress === 0) {
                simulateFileUpload(file.name);
            }
        });
    }, [uploadedFiles]); // Add uploadedFiles as a dependency to react to changes

    console.log(uploadedFiles);

    const simulateFileUpload = (fileName: string) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadedFiles(prev =>
                prev.map(file =>
                    file.name === fileName
                        ? {
                            ...file,
                            progress,
                            status: progress === 100 ? 'success' : progress < 100 ? 'uploading' : 'failed'
                        }
                        : file
                )
            );

            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 500);
    };

    const removeFile = (fileName: string) => {
        setUploadedFiles(prev => prev.filter(file => file.name !== fileName));
    };

    const getFileIcon = (fileName: string, status: string) => {
        const isPDF = fileName.toLowerCase().endsWith('.pdf');
        const isWord = fileName.toLowerCase().endsWith('.doc') || fileName.toLowerCase().endsWith('.docx');

        if (status === 'uploading') {
            return (
                <div className="relative p-6 bg-[#E9E9EA] rounded">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-[#4A4C56] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            );
        }

        if (isPDF) {
            return (
                <div className="relative p-3 bg-[#1D1F2C] rounded">
                    {/* <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> */}
                    <Image src={pdf} alt="PDF" width={24} height={24} />
                    {/* </svg> */}
                </div>
            );
        }

        if (isWord) {
            return (
                <div className="relative p-3 bg-[#1D1F2C] rounded">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
            );
        }

        return (
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        );
    };

    const addFiles = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                setUploadedFiles(prev => [...prev, { 
                    name: file.name, status: 'uploading', progress: 0, file: file 
                }]);
            }
        };
        input.click();
    };

    const analyzeFiles = async () => {
        const successFiles = uploadedFiles.filter(file => file.status === 'success');
        
        // Mock analysis results based on the rules and files
        const mockResults = successFiles.map(file => ({
            fileName: file.name,
            results: selectedRules.map(rule => {
                // Mock different scenarios based on the rules shown in the image
                if (rule.name.includes('Date of issue')) {
                    return {
                        rule: rule.name,
                        matched: false,
                        message: "The test report is issued on 12 Oct 2013. It's more than 3 years old."
                    };
                }
                if (rule.name.includes('Test Report Number')) {
                    return {
                        rule: rule.name,
                        matched: true,
                        message: "The Test Report Ref. No. 17027138 002 is consistent on every page."
                    };
                }
                if (rule.name.includes('CB certificate')) {
                    return {
                        rule: rule.name,
                        matched: true,
                        message: "The CB Test Certificate Ref. No. JPTUV-051322-M1 matches the main test report reference number 17027138 002."
                    };
                }
                if (rule.name.includes('Markings durability')) {
                    return {
                        rule: rule.name,
                        matched: false,
                        message: "There is no explicit mention of marking durability being tested in the report."
                    };
                }
                // Default case
                return {
                    rule: rule.name,
                    matched: Math.random() > 0.5, // Random match for other rules
                    message: `Rule check for ${rule.name} completed.`
                };
            })
        }));

        setAnalysisResults(mockResults);
        if (mockResults.length > 0) {
            setSelectedDocument(mockResults[0].fileName);
        }

        // Later this will be replaced with actual API call:
        // const analyzeFiles = {
        //     files: successFiles.map(file => file.file),
        //     rules: selectedRules.map(rule => rule.name)
        // }
        // const response = await analyze(analyzeFiles);
        // setAnalysisResults(response.data);
    };
    
    return (
        <div className="flex flex-col gap-6 justify-between h-full">
            {/* Analysis Results */}
            <AnalysisViewer />
            <div className="p-6 flex flex-col justify-end h-full">
                <div className="flex flex-col gap-6">
                    {/* Selected Rules Section */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-medium text-[#A5A5AB]">Selected Rules</h2>
                        <div className="py-4">
                            {selectedRules.length === 0 ? (
                                <p className="text-gray-500">No rules selected</p>
                            ) : (
                                <div className="flex flex-wrap gap-5">
                                    {selectedRules.map(rule => (
                                        <div key={rule.id} className="relative flex flex-row gap-3 px-3 py-2 bg-white rounded-lg border border-[#E9E9EA]">
                                            <Image src={ruleIcon} alt='' />
                                            <p className='text-sm text-[#4A4C56] text-ellipsis'>{rule.name}</p>
                                            <button className='cursor-pointer hover:scale-110 transition-all duration-300 absolute -right-3 -top-3 border border-[#A5A5AB] rounded-full p-0.5 bg-[#1D1F2C]' onClick={() => removeRule(rule.id)}>
                                                <X className='w-4 h-4 text-white' />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Uploaded Files List */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-medium text-[#A5A5AB]">Uploaded Documents</h2>
                        <div className="flex items-center gap-2 overflow-y-auto pb-4 custom-scrollbar">
                            {uploadedFiles.map((file) => (
                                <div key={file.name} className="bg-white p-2 rounded-lg border">
                                    <div className="w-96 h-auto flex items-center gap-2">
                                        {getFileIcon(file.name, file.status)}
                                        <div className='w-full flex flex-col gap-1'>
                                            <div className="flex justify-between items-start">
                                                <span className={`text-sm font-medium ${file.status === 'uploading' ? 'text-[#777980]' : 'text-[#292D32]'}`}>{file.name}</span>
                                                <button
                                                    onClick={() => removeFile(file.name)}
                                                    className="text-gray-400 hover:text-gray-600 w-6 h-6"
                                                >
                                                    <Image src={crossBg} alt="Close" className="hover:scale-110 transition-all duration-300 hover:rotate-12 cursor-pointer" />
                                                </button>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={`text-xs font-normal ${file.status === 'uploading' ? 'text-[#777980]' : 'text-[#4A4C56]'}`}>
                                                    {file.file.type === 'application/pdf' ? 'PDF' : 'Document'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-row justify-between gap-2 border border-[#E9E9EA] rounded-xl p-3'>
                        <button className='w-fit flex gap-2 items-center border-[2px] border-[#A5A5AB] rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300' onClick={() => addFiles()}>
                            <Plus className='w-9 h-9 text-[#A5A5AB] hover:text-gray-800 transition-all duration-300' />
                        </button>
                        <div className='flex flex-row gap-2 items-center'>
                            <button 
                                className='border border-[#A5A5AB] rounded-lg px-10 py-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer'
                                onClick={() => analyzeFiles()}
                                disabled={isLoading || uploadedFiles.length === 0 || selectedRules.length === 0}
                            >
                                <span className={`text-lg font-medium ${isLoading || uploadedFiles.length === 0 || selectedRules.length === 0 ? 'text-gray-400' : 'text-[#A5A5AB] hover:text-gray-800'} transition-all duration-300`}>
                                    {isLoading ? 'Analyzing...' : 'Analyze'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}