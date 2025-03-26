"use client";
import CustomModal from "@/app/(admin)/_components/CustomModal";
import React, { useState } from "react";

interface PlanFeature {
  token: string;
  ruleApply: string;
  validation: string;
  benefits: string;
  integration: boolean;
  customRules: boolean;
  support: string;
}

interface Plan {
  name: string;
  price: number;
  savePercentage: string;
  customPercentage: string;
  features: PlanFeature;
  isAnnualBilling: boolean;
  showOptions?: boolean;
  isEditing?: boolean;
}

const AddPlanPage = () => {
  const [plans, setPlans] = useState<Plan[]>([
    {
      name: "Pro Plan",
      price: 37.5,
      savePercentage: "20",
      customPercentage: "",
      isAnnualBilling: false,
      showOptions: false,
      isEditing: false,
      features: {
        token: "1M",
        ruleApply: "15",
        validation: "1 Month",
        benefits: "Custom Features",
        integration: false,
        customRules: false,
        support: "",
      },
    },
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [planToDeleteIndex, setPlanToDeleteIndex] = useState<number | null>(
    null
  );

  const handleAddPlan = () => {
    const newPlan: Plan = {
      name: "",
      price: 0,
      savePercentage: "20",
      customPercentage: "",
      isAnnualBilling: false,
      features: {
        token: "",
        ruleApply: "",
        validation: "",
        benefits: "",
        integration: false,
        customRules: false,
        support: "",
      },
    };
    setPlans([...plans, newPlan]);
  };

  const handleOptionsToggle = (index: number) => {
    const updatedPlans = plans.map((plan, i) => ({
      ...plan,
      showOptions: i === index ? !plan.showOptions : false,
    }));
    setPlans(updatedPlans);
  };

  const toggleEdit = (index: number) => {
    const updatedPlans = plans.map((plan, i) => ({
      ...plan,
      isEditing: i === index ? !plan.isEditing : plan.isEditing,
      showOptions: false,
    }));
    setPlans(updatedPlans);
  };

  const handleDelete = () => {
    if (planToDeleteIndex !== null) {
      const updatedPlans = plans.filter((_, i) => i !== planToDeleteIndex);
      setPlans(updatedPlans);
      setPlanToDeleteIndex(null);
      setIsDeleteModalOpen(false);
    }
  };

  const handleUpdate = () => {
    const updatedPlans = plans.map((plan) => ({
      ...plan,
      isEditing: false,
      showOptions: false,
    }));
    setPlans(updatedPlans);
    setIsUpdateModalOpen(false);
    // Here you would typically make an API call to save the changes
  };

  const shouldShowUpdateButton =
    plans.some((plan) => plan.isEditing) || plans.length > 1;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 pb-3 border-b">
        <h1 className="text-gray-500 text-[14px]">You can have max 4 plan</h1>
        <div className="relative group">
          <button
            onClick={handleAddPlan}
            disabled={plans.length === 4}
            className="bg-black text-white px-4 py-2 rounded-sm cursor-pointer hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
          >
            Add Plan
          </button>
          {plans.length === 4 && (
            <div className="absolute top-12 right-0 bg-red-200 text-red-600 text-xs px-2 py-1 rounded whitespace-nowrap hidden group-hover:block">
              Maximum 4 plans allowed
              <div className="absolute top-[-4px] right-5 w-2 h-2 bg-red-200 transform rotate-45"></div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 space-y-4"
          >
            <div className="flex justify-between items-center border-b pb-2 font-medium">
              <p className={` ${index === 0 && "text-purple-500 "}`}>
                {index === 0 ? "Recommended" : `Plan-${index + 1}`}
              </p>

              <div className="relative">
                <button
                  onClick={() => handleOptionsToggle(index)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                {plan.showOptions && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border p-2">
                    <div className="py-1">
                      <button
                        onClick={() => toggleEdit(index)}
                        className="block w-full text-left px-4 py-2 bg-[#e9e9ea] text-sm text-gray-800 hover:opacity-85 rounded-sm cursor-pointer"
                      >
                        {plan.isEditing ? "Save" : "Edit"}
                      </button>
                      <button
                        disabled={index === 0}
                        onClick={() => {
                          setPlanToDeleteIndex(index);
                          setIsDeleteModalOpen(true);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-white bg-[#ef6471] hover:opacity-85 rounded-sm cursor-pointer mt-2 disabled:text-red-300 disabled:cursor-not-allowed"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Plan Name</label>
                <div className="flex items-center relative">
                  <input
                    type="text"
                    value={plan.name}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].name = e.target.value;
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`text-[14px] w-full p-2 px-3 border rounded font-medium outline-none ${
                      plan.isEditing
                        ? "bg-white  "
                        : "bg-transparent cursor-not-allowed"
                    }`}
                    placeholder="Plan Name"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Price</label>
                <div className="flex items-center relative">
                  <span className="text-gray-500 absolute left-3">$</span>
                  <input
                    type="number"
                    value={plan.price}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].price = Number(e.target.value);
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border p-2 rounded pl-6 outline-none ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-transparent cursor-not-allowed"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2 border-b pb-4">
                <span className="text-sm text-gray-600">
                  Save in annually billing
                </span>
                <div className="flex items-center">
                  <input
                    type="radio"
                    checked={!!plan.customPercentage}
                    onChange={() => {
                      if (plan.isEditing) {
                        const updatedPlans = [...plans];
                        updatedPlans[index].customPercentage =
                          updatedPlans[index].savePercentage;
                        setPlans(updatedPlans);
                      }
                    }}
                    disabled={!plan.isEditing}
                    className={!plan.isEditing ? "cursor-not-allowed" : ""}
                  />
                  <input
                    type="number"
                    value={plan.customPercentage}
                    onChange={(e) => {
                      if (plan.isEditing) {
                        const updatedPlans = [...plans];
                        const value = Math.min(
                          100,
                          Math.max(0, Number(e.target.value))
                        );
                        updatedPlans[index].customPercentage = value.toString();
                        updatedPlans[index].savePercentage = value.toString();
                        setPlans(updatedPlans);
                      }
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border rounded p-2 ml-2 mt-2 ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                    placeholder="Custom %"
                  />
                  <span className="text-gray-600 ml-2">%</span>
                </div>
                <div className="flex items-center flex-wrap gap-4 mb-2">
                  {[10, 20, 30, 40].map((percentage) => (
                    <label
                      key={percentage}
                      className={`flex items-center ${
                        !plan.isEditing && "cursor-not-allowed"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={
                          plan.savePercentage === percentage.toString() &&
                          !plan.customPercentage
                        }
                        onChange={() => {
                          if (plan.isEditing) {
                            const updatedPlans = [...plans];
                            updatedPlans[index].savePercentage =
                              percentage.toString();
                            updatedPlans[index].customPercentage = "";
                            setPlans(updatedPlans);
                          }
                        }}
                        disabled={!plan.isEditing}
                        className={!plan.isEditing ? "cursor-not-allowed" : ""}
                      />
                      <span className="ml-1">{percentage}%</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-[14px] font-medium">Features</span>
                  {/* {plan.isEditing && (
                    <button className="text-blue-500 text-sm">
                      + Add Field
                    </button>
                  )} */}
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Token</label>
                  <input
                    type="text"
                    value={plan.features.token}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].features.token = e.target.value;
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border rounded p-2 ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                    placeholder="Token"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Rule Apply</label>
                  <input
                    type="text"
                    value={plan.features.ruleApply}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].features.ruleApply = e.target.value;
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border rounded p-2 ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                    placeholder="Rule Apply"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Validation</label>
                  <input
                    type="text"
                    value={plan.features.validation}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].features.validation = e.target.value;
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border rounded p-2 ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                    placeholder="Validation"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Benefits</label>
                  <input
                    type="text"
                    value={plan.features.benefits}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].features.benefits = e.target.value;
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border rounded p-2 ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                    placeholder="Benefits"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Integration</label>
                  <select
                    value={plan.features.integration ? "true" : "false"}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].features.integration =
                        e.target.value === "true";
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border rounded p-2 ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Custom Rules</label>
                  <select
                    value={plan.features.customRules ? "true" : "false"}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].features.customRules =
                        e.target.value === "true";
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border rounded p-2 ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-500">Support</label>
                  <input
                    type="text"
                    value={plan.features.support}
                    onChange={(e) => {
                      const updatedPlans = [...plans];
                      updatedPlans[index].features.support = e.target.value;
                      setPlans(updatedPlans);
                    }}
                    disabled={!plan.isEditing}
                    className={`w-full border rounded p-2 ${
                      plan.isEditing
                        ? "bg-white"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                    placeholder="Support"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {shouldShowUpdateButton && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setIsUpdateModalOpen(true)}
            className="bg-black text-white px-6 py-2 rounded-sm hover:opacity-90 transition-colors cursor-pointer"
          >
            Update Plans
          </button>
        </div>
      )}
      <CustomModal
        type="delete"
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setPlanToDeleteIndex(null);
        }}
        onConfirm={handleDelete}
        title="Are you sure you want to delete this plan?"
      />
      <CustomModal
        type="update"
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onConfirm={handleUpdate}
        title="Are you sure you want to update changes?"
      />
    </div>
  );
};

export default AddPlanPage;
