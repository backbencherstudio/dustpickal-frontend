"use client"
import Image from "next/image"
import paypalImg from "@/public/assets/client/paypal.svg"
import BillingTable from "../_components/billing/billingTable"
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Download } from "lucide-react";

export default function Billing() {
    const router = useRouter();

    const billingHistoryData = [
        {
            paymentInvoice: "INV-1234567890",
            amount: 100,
            plan: "Basic",
            method: "Credit Card",
            date: "2023-01-01",
            status: "Paid",
        },
        {
            paymentInvoice: "INV-1234567891",
            amount: 200,
            plan: "Basic",
            method: "Credit Card",
            date: "2023-01-01",
            status: "Paid",
        },
        {
            paymentInvoice: "INV-1234567892",
            amount: 300,
            plan: "Basic",
            method: "Credit Card",
            date: "2023-01-01",
            status: "Paid",
        },
        {
            paymentInvoice: "INV-1234567893",
            amount: 400,
            plan: "Basic",
            method: "Credit Card",
            date: "2023-01-01",
            status: "Paid",
        },
        {
            paymentInvoice: "INV-1234567893",
            amount: 400,
            plan: "Basic",
            method: "Credit Card",
            date: "2023-01-01",
            status: "Paid",
        },
        {
            paymentInvoice: "INV-1234567893",
            amount: 400,
            plan: "Basic",
            method: "Credit Card",
            date: "2023-01-01",
            status: "Paid",
        },
    ];

    const columns = [
        { label: "Payment Invoice", accessor: "paymentInvoice" },
        { label: "Amount", accessor: "amount" },
        { label: "Plan", accessor: "plan" },
        { label: "Method", accessor: "method" },
        { label: "Date", accessor: "date" },
        { label: "Status", accessor: "status" },
        {
          label: "Action",
          accessor: "action",
          customCell: (row) => (
            <div className="flex gap-2">
              <button
                onClick={() => router.push(`/rule-management/${row.sl}`)}
                className=" hover:bg-gray-200 rounded-xl p-2"
              >
                <Download size={16} className="text-black" />
              </button>
            </div>
          ),
        },
      ];
    return (
        <div className="flex flex-col gap-6 mt-6">
            <div className="flex flex-col gap-3">
                <h1 className="text-[#777980] font-medium">My Plan</h1>
                <div className="w-full flex flex-col xl:flex-row gap-3">
                    <div className="w-full border border-[#E9E9EA] rounded-xl p-3">
                        <div className="flex flex-row items-center gap-10">
                            <h6 className="font-medium">Basic</h6>
                            <p className="p-1 border border-[#8C52FF] rounded text-sm text-[#1D1F2C]">Billed Yearly</p>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-semibold">$120</p>
                            <button className="bg-[#0D86FF] text-white px-2 py-1 rounded" onClick={() => router.push("/subscription")}>Upgrade</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center gap-3 border border-[#E9E9EA] rounded-xl p-3">
                        <Image src={paypalImg} alt="" />
                        <div className="flex flex-col justify-between gap-[18px]">
                            <p className="text-sm">accountemail@gmail.com</p>
                            <p className="text-sm">*******2585</p>
                        </div>
                        <div className="w-full h-full flex justify-end items-end">
                            <button className="bg-[#1D1F2C] text-white px-2 py-1 rounded" onClick={() => router.push("/payment-method")}>Change</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-[#777980] font-medium">Summary</h1>
                <div className="w-full border border-[#E9E9EA] rounded-xl p-3 flex flex-col md:flex-row gap-10 lg:gap-[97px]">
                    <div className="flex flex-col gap-10">
                        <h6 className="text-[#A5A5AB] font-medium">Next Payment</h6>
                        <p className="text-[#1D1F2C] font-medium">07/09/2023</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <h6 className="text-[#A5A5AB] font-medium">Amount</h6>
                        <p className="text-[#1D1F2C] font-medium">$10</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <h6 className="text-[#A5A5AB] font-medium">Payment Method</h6>
                        <p className="text-[#1D1F2C] font-medium flex gap-2">Card ending <span>4844</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <BillingTable
                    title="History"
                    type="billing"
                    columns={columns}
                    data={billingHistoryData}
                    filter={false}
                    itemsPerPage={10}
                />
            </div>
        </div>
    )
}
