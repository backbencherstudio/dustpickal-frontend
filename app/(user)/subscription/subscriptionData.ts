interface PlanFeatures {
  token: string;
  ruleApply: string | number;
  validation: string;
  benefits: string;
  integrations: boolean;
  customRule: boolean;
  support: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice?: number;
  tokenAmount: string;
  description: string;
  annualDiscount?: {
    percentage: number;
    amount: number;
  };
  isRecommended?: boolean;
  features: PlanFeatures;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'pay-as-you-go',
    name: 'Pay-As-You-Go',
    monthlyPrice: 0.50,
    tokenAmount: '15k',
    description: 'One document of 5 page',
    features: {
      token: '15k',
      ruleApply: 1,
      validation: 'One Time Use',
      benefits: 'Basic Features',
      integrations: false,
      customRule: false,
      support: 'Via Website'
    }
  },
  {
    id: 'basic',
    name: 'Basic Plan',
    monthlyPrice: 10,
    tokenAmount: '250k',
    description: '1 month of validation',
    annualDiscount: {
      percentage: 20,
      amount: 96
    },
    features: {
      token: '250k',
      ruleApply: 5,
      validation: '1 Month',
      benefits: 'Essential Features',
      integrations: false,
      customRule: true,
      support: 'Via Website'
    }
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    monthlyPrice: 37.5,
    tokenAmount: '1M',
    description: '1 month of validation',
    isRecommended: true,
    annualDiscount: {
      percentage: 20,
      amount: 336
    },
    features: {
      token: '1M',
      ruleApply: 15,
      validation: '1 Month',
      benefits: 'Custom Features',
      integrations: true,
      customRule: true,
      support: 'Priority Customer Support (faster responses)'
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    monthlyPrice: 75,
    tokenAmount: '2.5M',
    description: '1 month of validation',
    annualDiscount: {
      percentage: 20,
      amount: 576
    },
    features: {
      token: '2.5M',
      ruleApply: 'Unlimited',
      validation: '1 Month',
      benefits: 'Premium Features',
      integrations: true,
      customRule: true,
      support: 'Dedicated Account Manager'
    }
  }
]; 