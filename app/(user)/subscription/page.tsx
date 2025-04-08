'use client'
import { ArrowLeft, Check, X } from "lucide-react";
import { useState } from "react";
import { subscriptionPlans } from "./subscriptionData";
import { useRouter } from "next/navigation";
export default function Subscription() {
    const [selected, setSelected] = useState<'monthly' | 'annual'>('monthly');
    const router = useRouter();

    const getButtonStyles = (plan: typeof subscriptionPlans[0]) => {
        if (plan.id === 'pro') {
            return "px-4 py-2 border-none text-white font-medium rounded-lg bg-[linear-gradient(159deg,#8C52FF_0%,#FF914D_99.16%)] cursor-pointer";
        }
        if (plan.id === 'enterprise') {
            return "px-4 py-2 border border-[#4A4C56] text-white font-medium rounded-lg bg-[#4A4C56] cursor-pointer";
        }
        return "px-4 py-2 border border-[#4A4C56] text-[#4A4C56] font-medium rounded-lg cursor-pointer";
    };

    const getCardStyles = (plan: typeof subscriptionPlans[0]) => {
        if (plan.id === 'pro') {
            return "relative flex flex-col gap-2 justify-between h-56 bg-white p-4 rounded-lg before:absolute before:inset-0 before:bg-[linear-gradient(159deg,rgba(140,82,255,0.5)_0%,rgba(255,145,77,0.5)_99.16%)] before:blur-[5px] before:-z-10";
        }
        return "flex flex-col gap-2 justify-between h-56 bg-white p-4 rounded-lg shadow-[0px_0px_40px_0px_rgba(171,171,171,0.15)]";
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 pb-2 border-b border-[#E9E9EA]">
                    <h1 className="text-xl font-medium text-black">Subscription</h1>
                    <p className="text-sm text-[#777980]">Purchase plan that best matches your needs.</p>
                </div>
                <button className="flex flex-row gap-1 items-center text-sm text-[#1D1F2C]">
                    <ArrowLeft className="w-4 h-4" /> <p className="text-sm font-medium">Back</p>
                </button>
                <div className="flex flex-col gap-6">
                    <h4 className="text-xl font-medium text-[#777980]">Current Plan</h4>
                    <div className="flex flex-col gap-1 bg-[#F8FAFB] px-4 pt-4 pb-[60px] rounded-[8px]">
                        <p className="text-base font-semibold text-[#4A4C56]">You don't have any Plan Now!</p>
                        <p className="text-sm font-medium text-[#777980]">You're using free plan 3 document/ month. Purchase plan for more access...</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-4 justify-between">
                    <div className="col-span-2"></div>
                    <div className="col-span-10 flex flex-col gap-7">
                        <div className="flex flex-row p-[2px] bg-[#E9E9EA] rounded w-fit">
                            <button 
                                className={`px-2 py-1 rounded-l cursor-pointer text-base font-medium ${selected === 'monthly' ? 'bg-white text-[#4A4C56] rounded' : 'text-[#777980]'}`} 
                                onClick={() => setSelected('monthly')}
                            >
                                Monthly Pricing
                            </button>
                            <button 
                                className={`px-2 py-1 rounded-r cursor-pointer text-base font-medium ${selected === 'annual' ? 'bg-white text-[#4A4C56] rounded' : 'text-[#777980]'}`} 
                                onClick={() => setSelected('annual')}
                            >
                                Annual Pricing
                            </button>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 w-full">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className={getCardStyles(plan)}>
                                    {plan.isRecommended && (
                                        <div className="absolute -top-3 left-4 px-1 py-[3px] border border-[#8C52FF] bg-white text-black text-xs font-medium rounded">
                                            Recommended
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-3">
                                        <p className="text-base font-medium text-[#1D1F2C]">{plan.name}</p>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base font-medium text-[#777980]">
                                                <span className="text-2xl font-semibold text-[#1D1F2C]">${plan.monthlyPrice}</span>
                                                <span className="text-xl font-medium text-[#777980]"> / </span>
                                                {plan.tokenAmount} Token
                                            </p>
                                            <p className="text-sm font-medium text-[#777980]">{plan.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {plan.annualDiscount && (
                                            <p className="text-xs font-medium text-[#777980]">
                                                Purchase annually and save <span className="text-[#22CAAD]">{plan.annualDiscount.percentage}% - ${plan.annualDiscount.amount}</span>
                                            </p>
                                        )}
                                        <button className={getButtonStyles(plan)} onClick={() => router.push('/subscription/upgrade')}>Get Started</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Features Table */}
                <div className="grid md:grid-cols-12 gap-4">
                    <div className="col-span-2">
                        <h3 className="text-base font-medium text-[#1D1F2C]">Feature</h3>
                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="text-center">
                                    <p className="text-base font-medium text-[#1D1F2C]">{plan.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Token */}
                <div className="grid md:grid-cols-12 gap-4 border-t border-[#E9E9EA] py-4">
                    <div className="col-span-2">
                        <p className="text-sm text-[#777980]">Token</p>
                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="text-center">
                                    <p className="text-sm text-[#1D1F2C]">{plan.features.token}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Rule Apply */}
                <div className="grid md:grid-cols-12 gap-4 border-t border-[#E9E9EA] py-4">
                    <div className="col-span-2">
                        <p className="text-sm text-[#777980]">Rule Apply</p>
                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="text-center">
                                    <p className="text-sm text-[#1D1F2C]">{plan.features.ruleApply}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Validation */}
                <div className="grid md:grid-cols-12 gap-4 border-t border-[#E9E9EA] py-4">
                    <div className="col-span-2">
                        <p className="text-sm text-[#777980]">Validation</p>
                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="text-center">
                                    <p className="text-sm text-[#1D1F2C]">{plan.features.validation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-12 gap-4 border-t border-[#E9E9EA] py-4">
                    <div className="col-span-2">
                        <p className="text-sm text-[#777980]">Benefits</p>
                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="text-center">
                                    <p className="text-sm text-[#1D1F2C]">{plan.features.benefits}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Integrations */}
                <div className="grid md:grid-cols-12 gap-4 border-t border-[#E9E9EA] py-4">
                    <div className="col-span-2">
                        <p className="text-sm text-[#777980]">Integrations</p>
                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="flex justify-center">
                                    {plan.features.integrations ? (
                                        <Check className="w-5 h-5 text-[#22CAAD] p-[2px] border border-[#22CAAD] rounded-full" />
                                    ) : (
                                        <X className="w-5 h-5 text-[#FF4D4D] p-[2px] border border-[#FF4D4D] rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Custom Rule */}
                <div className="grid grid-cols-12 gap-4 border-t border-[#E9E9EA] py-4">
                    <div className="col-span-2">
                        <p className="text-sm text-[#777980]">Custom Rule</p>
                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-4 gap-4">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="flex justify-center">
                                    {plan.features.customRule ? (
                                        <Check className="w-5 h-5 text-[#22CAAD] p-[2px] border border-[#22CAAD] rounded-full" />
                                    ) : (
                                        <X className="w-5 h-5 text-[#FF4D4D] p-[2px] border border-[#FF4D4D] rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support */}
                <div className="grid grid-cols-12 gap-4 border-t border-[#E9E9EA] py-4">
                    <div className="col-span-2">
                        <p className="text-sm text-[#777980]">Support</p>
                    </div>
                    <div className="col-span-10">
                        <div className="grid grid-cols-4 gap-4 justify-center">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="text-center">
                                    <p className="text-sm text-[#1D1F2C]">{plan.features.support}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}