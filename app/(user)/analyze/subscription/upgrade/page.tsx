'use client';
import { useState, useEffect } from "react";
import { ArrowLeft, CreditCard } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import visa from '@/public/assets/client/icons/visa.svg';
import bank from '@/public/assets/client/icons/bank.svg';
import cardCvc from '@/public/assets/client/icons/card-cvc.svg';
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
export default function UpgradePage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [countries, setCountries] = useState([]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
    const [selectedBillingOption, setSelectedBillingOption] = useState('monthly');
    const [selectedCountry, setSelectedCountry] = useState('United States');

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data.sort((a: any, b: any) => a.name.common.localeCompare(b.name.common)));
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    }

    // console.log(countries);

    const onSubmit = (data: any) => {
        // console.log(data);
        const payload = {
            ...data,
            paymentMethod: selectedPaymentMethod,
            billingOption: selectedBillingOption,
            country: selectedCountry,
        }
        console.log(payload);
    }

    const handleBillingOptionChange = (value: string) => {
        setSelectedBillingOption(value);
    }

    const handlePaymentMethodChange = (value: string) => {
        setSelectedPaymentMethod(value);
    }

    const handleCountryChange = (value: string) => {
        setSelectedCountry(value);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-start gap-5 lg:gap-0">
            <div className="col-span-2">
                <button className="flex flex-row gap-2 items-center text-sm text-[#1D1F2C] cursor-pointer" onClick={() => router.push('/analyze/subscription')}>
                    <ArrowLeft className="w-4 h-4" /> <p className="text-sm font-medium">Back</p>
                </button>
            </div>
            <div className="col-span-12 md:col-span-9">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1 border-b border-[#E9E9EA] pb-2">
                        <h1 className="text-xl font-medium text-[#1D1F2C]">Upgrade to Pro</h1>
                        <p className="text-sm text-[#777980]">Get more access to analyze documents, more tokens, etc.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-8 flex flex-col gap-5">
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-base font-medium text-[#777980]">Billed to</h4>
                                    <div className="flex flex-col gap-2">
                                        <input type="text" className="w-full border border-[#A5A5AB] rounded py-2 px-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Full name" {...register("fullName", { required: true })} />
                                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message as string}</p>}
                                        <input type="text" className="w-full border border-[#A5A5AB] rounded py-2 px-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Email" {...register("email", { required: true })} />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-medium text-[#777980]">Payment Method</h4>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2">
                                        <div className={`w-full flex flex-col gap-1 border border-[#0D86FF] rounded-xl px-3 py-2 cursor-pointer ${selectedPaymentMethod === 'card' ? 'border-[#0D86FF]' : 'border-[#A5A5AB]'}`} onClick={() => handlePaymentMethodChange('card')}>
                                            <div className="flex flex-row gap-2 justify-between items-center">
                                                <CreditCard className="w-5 h-5" />
                                                <Image src={visa} alt="visa" width={34} height={20} />
                                            </div>
                                            <div className="flex flex-row gap-2 justify-between items-center">
                                                <p className="text-sm text-[#1D1F2C] font-medium">Card</p>
                                                <p className="text-sm text-[#1D1F2C] font-medium">*******1234</p>
                                            </div>
                                        </div>
                                        <div className={`w-full flex flex-col gap-1 border border-[#0D86FF] rounded-xl px-3 py-2 cursor-pointer ${selectedPaymentMethod === 'bank' ? 'border-[#0D86FF]' : 'border-[#A5A5AB]'}`} onClick={() => handlePaymentMethodChange('bank')}>
                                            <div className="flex flex-row gap-2 justify-between items-center">
                                                <Image src={bank} alt="bank" width={20} height={20} />
                                            </div>
                                            <div className="flex flex-row gap-2 justify-between items-center">
                                                <p className="text-sm text-[#1D1F2C] font-medium">Bank</p>
                                                <p className="text-sm text-[#1D1F2C] font-medium">55******6655</p>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="text" className="w-full border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Card Number" {...register("cardNumber", { required: true })} />
                                    {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message as string}</p>}
                                    <div className="flex flex-row gap-2">
                                        <input type="month" className="w-full border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Expiration" {...register("expiration", { required: true })} />
                                        {errors.expiration && <p className="text-red-500 text-sm">{errors.expiration.message as string}</p>}
                                        <div className="relative w-full flex flex-row gap-2">
                                            <input type="number" className="w-full border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="CVV" {...register("cvv", { required: true })} />
                                            <div className="absolute right-2 top-0 bottom-0 flex flex-row gap-2 items-center">
                                                <Image src={cardCvc} alt="cardCvc" width={20} height={20} />
                                            </div>
                                            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message as string}</p>}
                                        </div>
                                    </div>
                                    {/* country dropdown */}
                                    <Select>
                                        <SelectTrigger className="w-full border border-[#A5A5AB] rounded py-5 text-sm text-[#777980] placeholder:text-[#A5A5AB]">
                                            <SelectValue placeholder="Country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map((country: any) => (
                                                <SelectItem key={country.name.common} value={country.name.common} onClick={() => handleCountryChange(country.name.common)}>{country.name.common}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {/* dropdown end */}
                                    <input type="number" className="w-full border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] placeholder:text-[#A5A5AB]" placeholder="Zip" />
                                </div>
                            </div>
                            <p className="text-sm text-[#A5A5AB] font-medium">By entering your card details, you authorize Trust Scan to charge your card for future payments as per their terms.</p>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                                <h4 className="text-base font-medium text-[#777980]">Billing options</h4>
                                <div className="flex flex-col gap-2">
                                    <div className={`w-full flex flex-row gap-3 items-start border rounded-xl px-3 py-2 cursor-pointer ${selectedBillingOption === 'monthly' ? 'border-[#0D86FF]' : 'border-[#A5A5AB]'}`} onClick={() => handleBillingOptionChange('monthly')}>
                                        <div className="flex flex-row gap-2 items-center pt-1">
                                            <input type="radio" name="payMonthly" id="payMonthly" defaultChecked={selectedBillingOption === 'monthly'} />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm text-[#1D1F2C] font-medium">Pay Monthly</p>
                                            <p className="text-sm text-[#777980]">$ 10 /month</p>
                                        </div>
                                    </div>
                                    <div className={`w-full flex flex-row gap-3 items-start border rounded-xl px-3 py-2 cursor-pointer ${selectedBillingOption === 'yearly' ? 'border-[#0D86FF]' : 'border-[#A5A5AB]'}`} onClick={() => handleBillingOptionChange('yearly')}>
                                        <div className="flex flex-row gap-2 items-center pt-1">
                                            <input type="radio" name="payYearly" id="payYearly" defaultChecked={selectedBillingOption === 'yearly'} />
                                        </div>
                                        <div className="flex flex-col gap-1 justify-between items-start w-full">
                                            <div className="flex flex-row gap-2 justify-between items-start w-full">
                                                <p className="text-sm text-[#1D1F2C] font-medium">Pay Yearly</p>
                                                <p className="bg-[#22CAAD] text-xs text-white rounded px-2 py-[2px] font-medium">Save 20%</p>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <p className="text-sm text-[#777980] flex flex-row gap-3">$ 8/ month <span className="flex flex-row gap-2"><span className="line-through">$ 96</span> <span>$ 120</span></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-xl text-[#1D1F2C] font-medium">$10</p>
                                <button className="w-full border bg-[#0D86FF] rounded py-2 text-sm text-white font-medium">Upgrade</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-span-1">
                {/* <h1>Upgrade Page</h1> */}
            </div>
        </div>
    );
}
