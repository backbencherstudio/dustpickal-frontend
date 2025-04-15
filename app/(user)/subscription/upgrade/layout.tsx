"use client";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function UpgradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const stripePromise = loadStripe(
    "pk_test_51R38ZfC4aiT9yFQNU2nbo9gUpuJFzdx4H52vy9NZakwjjw3pXv6DMiD0jBX6ufVV93BbpKzkpQm4J3C1QtZSM1CL00wNfANGMT"
  );

  return (
    <div>
      <Elements stripe={stripePromise}>{children}</Elements>
    </div>
  );
}
