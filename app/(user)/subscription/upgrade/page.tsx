'use client';
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import visa from '@/public/assets/client/icons/visa.svg';
import bank from '@/public/assets/client/icons/bank.svg';
import cardCvc from '@/public/assets/client/icons/card-cvc.svg';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function UpgradePage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [countries, setCountries] = useState([]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
    const [selectedBillingOption, setSelectedBillingOption] = useState('monthly');
    const [selectedCountry, setSelectedCountry] = useState('United States');

    const stripe = useStripe();
    const elements = useElements();

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

    const onSubmit = async (data: any) => {
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement!,
            billing_details: {
                name: data.fullName,
                email: data.email,
            },
        });

        if (error) {
            console.error(error.message);
            return;
        }

        const payload = {
            ...data,
            paymentMethodId: paymentMethod.id,
            billingOption: selectedBillingOption,
            country: selectedCountry,
        };

        console.log("Payload to backend:", payload);
        // TODO: Send payload to backend
    };

    const handleBillingOptionChange = (value: string) => {
        setSelectedBillingOption(value);
    };

    const handlePaymentMethodChange = (value: string) => {
        setSelectedPaymentMethod(value);
    };

    const handleCountryChange = (value: string) => {
        setSelectedCountry(value);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-start gap-5 lg:gap-0">
            <div className="col-span-2">
                <button className="flex flex-row gap-2 items-center text-sm text-[#1D1F2C] cursor-pointer" onClick={() => router.push('/subscription')}>
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
                            {/* Billing Info */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-base font-medium text-[#777980]">Billed to</h4>
                                <div className="flex flex-col gap-2">
                                    <input type="text" className="w-full border border-[#A5A5AB] rounded py-2 px-3 text-sm" placeholder="Full name" {...register("fullName", { required: true })} />
                                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message as string}</p>}
                                    <input type="text" className="w-full border border-[#A5A5AB] rounded py-2 px-3 text-sm" placeholder="Email" {...register("email", { required: true })} />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-medium text-[#777980]">Payment Method</h4>
                                <div className="flex flex-row gap-2">
                                    <div className={`w-full border rounded-xl px-3 py-2 cursor-pointer ${selectedPaymentMethod === 'card' ? 'border-[#0D86FF]' : 'border-[#A5A5AB]'}`} onClick={() => handlePaymentMethodChange('card')}>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-medium">Card</p>
                                            <Image src={visa} alt="visa" width={34} height={20} />
                                        </div>
                                    </div>
                                    <div className={`w-full border rounded-xl px-3 py-2 cursor-pointer ${selectedPaymentMethod === 'bank' ? 'border-[#0D86FF]' : 'border-[#A5A5AB]'}`} onClick={() => handlePaymentMethodChange('bank')}>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-medium">Bank</p>
                                            <Image src={bank} alt="bank" width={20} height={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Stripe Card Element */}
                                <div className="border border-[#A5A5AB] rounded p-3 text-sm text-[#777980] bg-white">
                                    <CardElement
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '16px',
                                                    color: '#1D1F2C',
                                                    '::placeholder': { color: '#A5A5AB' },
                                                },
                                                invalid: { color: '#9e2146' },
                                            },
                                        }}
                                    />
                                </div>

                                {/* Country */}
                                <Select>
                                    <SelectTrigger className="w-full border border-[#A5A5AB] rounded py-3 text-sm">
                                        <SelectValue placeholder="Country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countries.map((country: any) => (
                                            <SelectItem key={country.name.common} value={country.name.common} onClick={() => handleCountryChange(country.name.common)}>
                                                {country.name.common}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <input type="number" className="w-full border border-[#A5A5AB] rounded p-3 text-sm" placeholder="Zip" />
                            </div>

                            <p className="text-sm text-[#A5A5AB]">By entering your card details, you authorize Trust Scan to charge your card for future payments as per their terms.</p>
                        </div>

                        {/* Billing Options */}
                        <div className="col-span-12 md:col-span-4 flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                                <h4 className="text-base font-medium text-[#777980]">Billing options</h4>
                                <div className="flex flex-col gap-2">
                                    <div className={`w-full border rounded-xl px-3 py-2 cursor-pointer ${selectedBillingOption === 'monthly' ? 'border-[#0D86FF]' : 'border-[#A5A5AB]'}`} onClick={() => handleBillingOptionChange('monthly')}>
                                        <input type="radio" checked={selectedBillingOption === 'monthly'} readOnly />
                                        <p className="text-sm font-medium">Pay Monthly — $10/month</p>
                                    </div>
                                    <div className={`w-full border rounded-xl px-3 py-2 cursor-pointer ${selectedBillingOption === 'yearly' ? 'border-[#0D86FF]' : 'border-[#A5A5AB]'}`} onClick={() => handleBillingOptionChange('yearly')}>
                                        <input type="radio" checked={selectedBillingOption === 'yearly'} readOnly />
                                        <div className="flex flex-col">
                                            <p className="text-sm font-medium">Pay Yearly</p>
                                            <p className="text-sm text-[#777980]">$96 billed annually <span className="line-through ml-2">$120</span> <span className="ml-1 text-[#22CAAD] font-semibold">Save 20%</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-xl text-[#1D1F2C] font-medium">$10</p>
                                <button type="submit" className="w-full bg-[#0D86FF] text-white rounded py-2 text-sm font-medium">Upgrade</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}