"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function BillingLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 xl:gap-0">
            <div className="xl:col-span-1">
                <button className="flex flex-row gap-1 items-center text-sm text-[#1D1F2C]" onClick={() => router.back()}>
                    <ArrowLeft className="w-4 h-4" /> <p className="text-sm font-medium">Back</p>
                </button>
            </div>
            <div className="xl:col-span-10">
                <div className="flex flex-col gap-1 pb-2 border-b border-[#E9E9EA]">
                    <h3 className="text-xl text-[#1D1F2C] font-medium">Billing</h3>
                    <p className="text-sm font-medium text-[#777980]">View your billing details, payment methods, and download invoices.</p>
                </div>
                {children}
            </div>
            <div className="col-span-1"></div>
        </div>
    );
}
