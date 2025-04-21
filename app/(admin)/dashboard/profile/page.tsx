"use client";
import { LucideSquareUserRound } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editField, setEditField] = useState("");
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const handleEdit = (field) => {
    setEditField(field);
    setShowOtpScreen(false);
    setFormData({
      ...formData,
      [field]: field === "name" ? "name" : "", // Pre-fill name, but not password
    });
    setIsModalOpen(true);
  };
  const handleSendOtp = (e) => {
    e.preventDefault();
    setShowOtpScreen(true);
    // Add your OTP sending logic here
  };
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Add your OTP verification logic here
    // console.log(data);("OTP verified:", otpValues.join(""));
    setIsModalOpen(false);
    setShowOtpScreen(false);
    setOtpValues(["", "", "", "", "", ""]);
  };
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple digits

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(
        `input[name='otp-${index + 1}']`
      ) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  };
  return (
    <div className="max-w-[850px] mx-auto text-[14px] font-medium">
      <div className="border-b pb-2">
        <h1 className="text-[24px] text-gray-800">Profile</h1>
        <p className="text-gray-400 mt-1 text-[12px]">
          Update your profile image , password , etc.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <LucideSquareUserRound size={80} color="gray" />
        <div>
          <h1 className="text-[12px] text-zinc-700 ">Profile Name</h1>
          <p className="bg-white w-[200px] px-2 py-1 mt-2 rounded">Your Name</p>
        </div>
      </div>
      <p className="text-gray-500 mt-10 border-b pb-2">Account Security</p>
      <div className="mt-6">
        <p className="text-gray-700">Email</p>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-gray-500">youremail@gmail.com</h1>
          {/* <div
            className="rounded px-3 p-1 border-2 text-gray-600 font-medium flex items-center justify-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleEdit("email")}
          >
            <p className="">Change Email</p>
          </div> */}
        </div>
      </div>{" "}
      <div className="mt-6">
        <p className="text-gray-700 ">Password</p>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-gray-500">
            Change your password to login to your account.
          </h1>
          <div
            className="rounded px-3 p-1 border-2 text-gray-600 font-medium flex items-center justify-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleEdit("password")}
          >
            <p className="">Change password</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#0000008c] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-[430px]">
            {!showOtpScreen ? (
              <>
                <h2 className=" font-medium mb-4 text-[20px]">
                  Change{" "}
                  {editField.charAt(0).toUpperCase() + editField.slice(1)}
                </h2>
                <form onSubmit={handleSendOtp}>
                  <p className="text-sm text-gray-500 mb-4">
                    Are you sure you want to change the password? We'll send an
                    OTP to your email to proceed...
                  </p>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#24a4ff] text-white rounded hover:opacity-90 cursor-pointer"
                    >
                      Send OTP
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h2 className="font-medium mb-4 text-[20px]">Enter OTP</h2>
                <form onSubmit={handleVerifyOtp}>
                  <p className="text-sm text-gray-500 mb-4">
                    Enter the OTP we've sent to your email youremail@gmail.com
                    to reset your password.
                  </p>
                  <div className="flex items-center gap-2 justify-center mb-4">
                    {otpValues.map((value, index) => (
                      <React.Fragment key={index}>
                        <input
                          type="text"
                          name={`otp-${index}`}
                          value={value}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Backspace" && !value && index > 0) {
                              const prevInput = document.querySelector(
                                `input[name='otp-${index - 1}']`
                              ) as HTMLInputElement;
                              if (prevInput) prevInput.focus();
                            }
                          }}
                          className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold"
                          maxLength={1}
                          inputMode="numeric"
                          pattern="[0-9]"
                          required
                        />
                        {index === 2 && (
                          <span className="text-3xl mb-4 font-medium text-gray-400">
                            .
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#24a4ff] text-white rounded hover:opacity-90 cursor-pointer"
                    >
                      Verify OTP
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
