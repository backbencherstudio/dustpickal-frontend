import { baseApi } from "../baseApi";

interface SubscribeRequest {
  fullName: string;
  email: string;
  billingOption: string;
  country: string;
  paymentMethodId: string;
  planType: string;
}

interface SubscribeResponse {
  success: boolean;
  message: string;
  data: {
    clientSecret: string;
  };
}

interface CancelSubscriptionResponse {
  success: boolean;
  message: string;
}

interface CancelSubscriptionRequest {
  subscriptionId: string;
}

export const subscribeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation<SubscribeResponse, SubscribeRequest>({
        query: (data) => ({
            url: "/payment/stripe/subscribe",
            method: "POST",
            body: data,
        }),
    }),
    cancelSubscription: builder.mutation<CancelSubscriptionResponse, CancelSubscriptionRequest>({
      query: (data) => ({
        url: "/payment/stripe/cancel-subscription",
        method: "POST",
        body: data,
      }),
    }), 
  }),
});

export const { useSubscribeMutation, useCancelSubscriptionMutation } = subscribeApi;
