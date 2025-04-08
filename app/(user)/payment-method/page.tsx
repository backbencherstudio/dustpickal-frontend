"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { ArrowLeft, Trash2 } from "lucide-react";
import CustomTable from "../_components/CustomTable";
import shieldLock from "@/public/assets/client/icons/shield-lock.svg"
import Image from "next/image";
import visa from "@/public/assets/client/icons/visa.svg";
import bank from "@/public/assets/client/icons/bank.svg";
import CustomModal from "../_components/CustomModal";

const page = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Current payment method data
  const currentMethod = {
    type: 'card',
    provider: 'visa',
    icon: visa,
    number: '******6615',
    isSelected: true
  };

  // Cards data
  const cards = [
    {
      id: 1,
      type: 'card',
      provider: 'visa',
      icon: visa,
      number: '******6615',
      isSelected: true
    },
    {
      id: 2,
      type: 'card',
      provider: 'mastercard',
      isMastercard: true,
      number: '******8855',
      isSelected: false
    }
  ];

  // Bank accounts data
  const bankAccounts = [
    {
      id: 1,
      type: 'bank',
      name: 'Bangor Savings Bank',
      icon: bank,
      country: 'United States',
      number: '55******6655',
      isSelected: true
    },
    {
      id: 2,
      type: 'bank',
      name: 'Bangor Savings Bank',
      icon: bank,
      country: 'United States',
      number: '55******8855',
      isSelected: false
    }
  ];

  // Handle payment method selection
  const handlePaymentSelection = (type: string, id: number) => {
    setIsOpen(true);
    // Logic to handle payment selection
    console.log(`Selected ${type} with id ${id}`);
  };

  // Handle payment method deletion
  const handleDelete = (type: string, id: number) => {
    // Logic to handle deletion
    console.log(`Deleting ${type} with id ${id}`);
  };

  return (
    <div className="mt-6">
      {/* Current Method */}
      <div className="flex flex-col md:flex-row gap-5 pb-3 border-b border-[#E9E9EA]">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row justify-between items-center gap-2">
            <h3 className="text-[#777980] font-medium">Current Method</h3>
            <Image src={shieldLock} alt="shield lock" width={24} height={24} />
          </div>
          <p className="text-sm font-medium text-[#777980]">You're paying through this method</p>
        </div>
        <div className="border border-[#0D86FF] rounded-xl p-4 w-full">
          <div className="flex flex-col gap-2 justify-between">
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  className="accent-[#0D86FF]"
                  checked={currentMethod.isSelected}
                  onChange={() => handlePaymentSelection('current', 0)}
                />
                <Image src={currentMethod.icon} alt={currentMethod.provider} width={40} height={25} />
              </div>
              <button
                className="text-[#FF4747]"
                onClick={() => handleDelete('current', 0)}
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="flex flex-row justify-between items-center gap-2">
              <span className="text-sm font-medium">Card</span>
              <span className="text-sm font-medium">{currentMethod.number}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="pt-3 pb-3 border-b border-[#E9E9EA] flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-[#777980] font-medium">Cards</h3>
          <p className="text-sm font-medium text-[#777980]">Your saved cards</p>
        </div>
        <div className="space-y-3 w-full">
          {cards.map((card) => (
            <div key={card.id} className={`border ${card.isSelected ? 'border-[#0D86FF]' : 'border-[#E9E9EA]'} rounded-xl p-4 w-full`}>
              <div className="flex flex-col gap-2 justify-between">
                <div className="flex flex-row justify-between items-center gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-[#0D86FF]"
                      checked={card.isSelected}
                      onChange={() => handlePaymentSelection('card', card.id)}
                    />
                    {card.isMastercard ? (
                      <div className="w-[40px] h-[25px] bg-[#FF4D4F] rounded flex items-center justify-center">
                        <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="11" cy="9" r="9" fill="#EB001B" />
                          <circle cx="19" cy="9" r="9" fill="#F79E1B" />
                        </svg>
                      </div>
                    ) : (
                      <Image src={card.icon} alt={card.provider} width={40} height={25} />
                    )}
                  </div>
                  <button
                    className="text-[#FF4747]"
                    onClick={() => handleDelete('card', card.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="flex flex-row justify-between items-center gap-2">
                  <span className="text-sm font-medium">Card</span>
                  <span className="text-sm font-medium">{card.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bank Account */}
      <div className="pt-3 pb-3 flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-[#777980] font-medium">Bank Account</h3>
          <p className="text-sm font-medium text-[#777980]">Your saved bank accounts</p>
        </div>
        <div className="space-y-3 w-full">
          {bankAccounts.map((account) => (
            <div key={account.id} className={`border ${account.isSelected ? 'border-[#0D86FF]' : 'border-[#E9E9EA]'} rounded-xl p-4 w-full`}>
              <div className="flex flex-col gap-2 justify-between">
                <div className="flex flex-row justify-between items-center gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-[#0D86FF]"
                      checked={account.isSelected}
                      onChange={() => handlePaymentSelection('bank', account.id)}
                    />
                    <Image src={account.icon} alt="bank" width={24} height={24} />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{account.name}</span>
                      <span className="text-xs text-[#777980]">{account.country}</span>
                    </div>
                  </div>
                  <button
                    className="text-[#FF4747]"
                    onClick={() => handleDelete('bank', account.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="flex flex-row justify-between items-center gap-2">
                  <span className="text-sm font-medium">{account.number}</span>
                </div>
              </div>
            </div>
          ))}

          <button
            className="w-full py-2 text-base font-medium border border-[#1D1F2C] rounded hover:bg-gray-50 transition-colors mt-12 cursor-pointer"
          >
            Add New Method
          </button>
        </div>
      </div>


      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
        title="Add New Method"
        type="paymentMethod"
      />
    </div>
  );
};

export default page;
