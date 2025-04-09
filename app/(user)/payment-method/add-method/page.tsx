"use client";
import CustomModal from "@/app/(admin)/_components/CustomModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import shieldLock from "@/public/assets/client/icons/shield-lock.svg"
import visa from "@/public/assets/client/icons/visa.svg";
import bank from "@/public/assets/client/icons/bank.svg";
import cardCvc from "@/public/assets/client/icons/card-cvc.svg";
import { Eye, EyeOff, CreditCardIcon, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
type FormValues = {
  fullName: string;
  cardNumber?: string;
  expiryDate?: string;
  cvc?: string;
  accountNumber?: string;
  bankName?: string;
  routingNumber?: string;
  country: string;
  zip: string;
};

const AddPaymentMethod = () => {
  const router = useRouter();
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = React.useState(false);
  const [paymentType, setPaymentType] = useState<'card' | 'bank'>('card');
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      accountNumber: '',
      bankName: '',
      routingNumber: '',
      country: '',
      zip: ''
    }
  });

  const handleAdd = () => {
    setIsAddModalOpen(false);
  };
  const handleDraft = () => {
    setIsDraftModalOpen(false);
  };
  const handleSuccess = () => {
    setIsSuccessModalOpen(false);
    router.push('/payment-method'); // Redirect to payment methods page
  };

  const onSubmit = async (data: FormValues) => {
    try {
      // Handle form submission
      console.log({
        paymentType,
        ...data
      });
      // Reset form after successful submission
      reset();
      // Show success modal
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between items-start gap-5">
          <div className="flex flex-col justify-between w-1/2 gap-2">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-[#777980] font-medium">Payment Method</h3>
              <Image src={shieldLock} alt="shield lock" width={24} height={24} />
            </div>
            <p className="text-sm text-[#777980]">Submit {paymentType === 'card' ? 'card' : 'account'} information to save method</p>
          </div>
          {/* methods */}
          <div className="flex flex-col justify-between w-full gap-2">
            <div className="flex flex-row gap-4 w-full pb-3 border-b border-[#E9E9EA]">
              <button
                type="button"
                className={cn(
                  "flex flex-col justify-between gap-2 px-3 py-2 rounded-xl border transition-colors w-full cursor-pointer",
                  paymentType === 'card' ? 'border-[#0D86FF]' : 'border-[#E9E9EA] hover:border-[#0D86FF]/50'
                )}
                onClick={() => setPaymentType('card')}
              >
                <div className="flex flex-row justify-between items-center gap-2">
                  <RadioGroup
                    value={paymentType}
                    onValueChange={(value) => setPaymentType(value as 'card' | 'bank')}
                  >
                    <RadioGroupItem value="card" id="card" className={`w-4 h-4 border-[1.5px] ${paymentType === 'card' ? 'border-[#0D86FF]' : 'border-gray-300'}`} />
                  </RadioGroup>
                  <CreditCardIcon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-end">Card</span>
              </button>
              <button
                type="button"
                className={cn(
                  "flex flex-col justify-between gap-2 px-3 py-2 rounded-xl border transition-colors w-full cursor-pointer",
                  paymentType === 'bank' ? 'border-[#0D86FF]' : 'border-[#E9E9EA] hover:border-[#0D86FF]/50'
                )}
                onClick={() => setPaymentType('bank')}
              >
                <div className="flex flex-row justify-between items-center gap-2">
                  <RadioGroup
                    value={paymentType}
                    onValueChange={(value) => setPaymentType(value as 'card' | 'bank')}
                  >
                    <RadioGroupItem value="bank" id="bank" className={`w-4 h-4 border-[1.5px] ${paymentType === 'bank' ? 'border-[#0D86FF]' : 'border-gray-300'}`} />
                  </RadioGroup>
                  <Image src={bank} alt="bank" width={24} height={24} />
                </div>
                <span className="text-sm font-medium text-end">Bank Account</span>
              </button>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-1">
              <div>
                <Input
                  placeholder="Full Name"
                  className="h-12"
                  {...register("fullName", { required: "Full name is required" })}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              {paymentType === 'card' ? (
                <>
                  <div className="relative">
                    <Input
                      placeholder="Card Number"
                      type={showCardNumber ? "text" : "password"}
                      className="h-12"
                      {...register("cardNumber", {
                        required: "Card number is required",
                        pattern: {
                          value: /^[0-9]{16}$/,
                          message: "Please enter a valid 16-digit card number"
                        }
                      })}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      onClick={() => setShowCardNumber(!showCardNumber)}
                    >
                      {showCardNumber ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {errors.cardNumber && (
                      <p className="mt-1 text-sm text-red-500">{errors.cardNumber.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Expiration (MM/YY)"
                        className="h-12"
                        {...register("expiryDate", {
                          required: "Expiry date is required",
                        })}
                      />
                      {errors.expiryDate && (
                        <p className="mt-1 text-sm text-red-500">{errors.expiryDate.message}</p>
                      )}
                    </div>
                    <div className="relative">
                      <Input
                        placeholder="CVC"
                        className="h-12"
                        {...register("cvc", {
                          required: "CVC is required",
                          pattern: {
                            value: /^[0-9]{3,4}$/,
                            message: "Please enter a valid CVC"
                          }
                        })}
                      />
                      <Image
                        src={cardCvc}
                        alt="CVC"
                        width={24}
                        height={24}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      />
                      {errors.cvc && (
                        <p className="mt-1 text-sm text-red-500">{errors.cvc.message}</p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Input
                      placeholder="Account Number"
                      className="h-12"
                      {...register("accountNumber", {
                        required: "Account number is required"
                      })}
                    />
                    {errors.accountNumber && (
                      <p className="mt-1 text-sm text-red-500">{errors.accountNumber.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Bank Name"
                      className="h-12"
                      {...register("bankName", {
                        required: "Bank name is required"
                      })}
                    />
                    {errors.bankName && (
                      <p className="mt-1 text-sm text-red-500">{errors.bankName.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Routing Number"
                      className="h-12"
                      {...register("routingNumber", {
                        required: "Routing number is required",
                        pattern: {
                          value: /^[0-9]{9}$/,
                          message: "Please enter a valid 9-digit routing number"
                        }
                      })}
                    />
                    {errors.routingNumber && (
                      <p className="mt-1 text-sm text-red-500">{errors.routingNumber.message}</p>
                    )}
                  </div>
                </>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Controller
                    name="country"
                    control={control}
                    rules={{ required: "Country is required" }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="h-12 w-full">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          {/* Add more countries as needed */}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.country && (
                    <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="ZIP"
                    className="h-12"
                    {...register("zip", {
                      required: "ZIP code is required",
                      pattern: {
                        value: /^[0-9]{5}(-[0-9]{4})?$/,
                        message: "Please enter a valid ZIP code"
                      }
                    })}
                  />
                  {errors.zip && (
                    <p className="mt-1 text-sm text-red-500">{errors.zip.message}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="h-12 px-6 cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex flex-row justify-center items-center gap-2 h-12 px-3 py-2 bg-transparent border border-[#1D1F2C] rounded hover:bg-[#1D1F2C]/10 text-[#1D1F2C] cursor-pointer"
                  disabled={isSubmitting}
                >
                  <Plus className="w-4 h-4" />
                  {isSubmitting ? 'Adding...' : `Add ${paymentType === 'card' ? 'card' : 'bank account'}`}
                </Button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <CustomModal
        type="add"
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onConfirm={handleAdd}
        title="Are you sure you want to add this rule?"
      />
      
      <CustomModal
        type="success"
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        onConfirm={handleSuccess}
        title="Payment method added successfully!"
      />
    </div>
  );
};

export default AddPaymentMethod;
