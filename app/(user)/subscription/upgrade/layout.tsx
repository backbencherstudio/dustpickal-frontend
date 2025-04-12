'use client';
import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function UpgradeLayout({ children }: { children: React.ReactNode }) {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

    return (
        <div>
            <Elements stripe={stripePromise}>
                {children}
            </Elements>
        </div>
    );
}