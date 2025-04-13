import { baseApi } from "../baseApi";

interface SubscribeRequest {
  planType: string;
  billingOption: string;
  country: string;
  paymentMethodId: string;
  email: string;
  name: string;
}

export const subscribeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation<void, SubscribeRequest>({
        query: (data) => ({
            url: "/payment/stripe/subscribe",
            method: "POST",
            body: data,
        }),
    }),
  }),
});

export const { useSubscribeMutation, isLoading } = subscribeApi;
