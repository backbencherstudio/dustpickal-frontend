'use client';
import { ArrowLeft, CreditCard } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import visa from '@/public/assets/client/icons/visa.svg';
import bank from '@/public/assets/client/icons/bank.svg';
import cardCvc from '@/public/assets/client/icons/card-cvc.svg';

export default function UpgradePage() {
    const router = useRouter();
    return (
        <div className="grid grid-cols-12 justify-between items-start">
            <div className="col-span-2">
                <button className="flex flex-row gap-2 items-center text-sm text-[#1D1F2C] cursor-pointer" onClick={() => router.push('/analyze/subscription')}>
                    <ArrowLeft className="w-4 h-4" /> <p className="text-sm font-medium">Back</p>
                </button>
            </div>
            <div className="col-span-9">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1 border-b border-[#E9E9EA] pb-2">
                        <h1 className="text-xl font-medium text-[#1D1F2C]">Upgrade to Pro</h1>
                        <p className="text-sm text-[#777980]">Get more access to analyze documents, more tokens, etc.</p>
                    </div>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-8 flex flex-col gap-5">
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-xl font-medium text-[#777980]">Billed to</h4>
                                    <div className="flex flex-col gap-2">
                                        <input type="text" className="w-full border border-[#A5A5AB] rounded py-2 px-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Full name" />
                                        <input type="text" className="w-full border border-[#A5A5AB] rounded py-2 px-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-medium text-[#777980]">Payment Method</h4>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2">
                                        <div className="w-full flex flex-col gap-1 border border-[#0D86FF] rounded-xl px-3 py-2">
                                            <div className="flex flex-row gap-2 justify-between items-center">
                                                <CreditCard className="w-5 h-5" />
                                                <Image src={visa} alt="visa" width={34} height={20} />
                                            </div>
                                            <div className="flex flex-row gap-2 justify-between items-center">
                                                <p className="text-sm text-[#1D1F2C] font-medium">Card</p>
                                                <p className="text-sm text-[#1D1F2C] font-medium">*******1234</p>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col gap-1 border border-[#0D86FF] rounded-xl px-3 py-2">
                                            <div className="flex flex-row gap-2 justify-between items-center">
                                                <Image src={bank} alt="bank" width={20} height={20} />
                                            </div>
                                            <div className="flex flex-row gap-2 justify-between items-center">
                                                <p className="text-sm text-[#1D1F2C] font-medium">Bank</p>
                                                <p className="text-sm text-[#1D1F2C] font-medium">55******6655</p>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="text" className="w-full border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Card Number" />
                                    <div className="flex flex-row gap-2">
                                        <input type="text" className="w-full border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Expiration" />
                                        <div className="relative w-full flex flex-row gap-2">
                                            <input type="text" className="w-full border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="CVV" />
                                            <div className="absolute right-2 top-0 bottom-0 flex flex-row gap-2 items-center">
                                                <Image src={cardCvc} alt="cardCvc" width={20} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* country dropdown */}
                                    {/* dropdown end */}
                                    <input type="text" className="w-full border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Zip" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-xl font-medium text-[#777980]">Billed to</h4>
                                    <div className="flex flex-col gap-2">
                                        <input type="text" className="w-full border border-[#A5A5AB] rounded py-2 px-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Full name" />
                                        <input type="text" className="w-full border border-[#A5A5AB] rounded py-2 px-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                {/* <h1>Upgrade Page</h1> */}
            </div>
        </div>
    );
}
