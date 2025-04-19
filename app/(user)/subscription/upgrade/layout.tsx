"use client";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer } from "react-toastify";

export default function UpgradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const stripePromise = loadStripe(
    "pk_test_51Q3t1UBQe0eFeUhhb0Ok0NvNF7pwpbgL4kA9XPtaWjKNwt4Y5rVehBoOtM3NJL3dJaqY2wyEWbPM0ebN99YrO51L0013c6Momj"
  );

  return (
    <div>
      <ToastContainer />
      <Elements stripe={stripePromise}>{children}</Elements>
    </div>
  );
}
