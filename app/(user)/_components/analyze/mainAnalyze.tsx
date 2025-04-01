import React, { useEffect } from 'react';
import Image from 'next/image';
import pdf from '@/public/assets/client/icons/pdf.svg';
import crossBg from "@/public/assets/client/icons/cross-icon.svg";

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
    const [selectedRules, setSelectedRules] = React.useState<string[]>([]);

    useEffect(() => {
        // Simulate upload progress for each file
        uploadedFiles.forEach(file => {
            if (file.status === 'uploading') {
                simulateFileUpload(file.name);
            }
        });
    }, []);

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

    return (
        <div className="p-6">
            <div className="flex flex-col gap-6">
                {/* Selected Rules Section */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-gray-800">Selected Rules</h2>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        {selectedRules.length === 0 ? (
                            <p className="text-gray-500">No rules selected</p>
                        ) : (
                            <div className="flex flex-wrap gap-2">
                                {selectedRules.map(rule => (
                                    <div key={rule} className="px-3 py-1 bg-white rounded-full border text-sm">
                                        {rule}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Uploaded Files List */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-gray-800">Uploaded Documents</h2>
                    <div className="flex items-center gap-2 overflow-y-auto pb-4">
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
                                        {/* <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                                                file.status === 'success' ? 'text-green-600 bg-green-200' :
                                                file.status === 'failed' ? 'text-red-600 bg-red-200' :
                                                'text-blue-600 bg-blue-200'
                                            }`}>
                                                {file.status}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold text-gray-600">{file.progress}%</span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                                        <div
                                            style={{ width: `${file.progress}%` }}
                                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                                                file.status === 'success' ? 'bg-green-500' :
                                                file.status === 'failed' ? 'bg-red-500' :
                                                'bg-blue-500'
                                            }`}
                                        />
                                    </div>
                                </div> */}
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
            </div>
        </div>
    );
}