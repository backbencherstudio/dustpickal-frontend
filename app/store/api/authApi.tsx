import { baseApi } from "./baseApi";

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  authorization: {
    token: string;
  };
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      type: string;
    };
  };
}

interface RequestPasswordResetRequest {
  email: string;
}

interface ResetPasswordRequest {
  token: string;
  password: string;
}

interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}

interface CheckPasswordRequest {
  password: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),

    logout: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    // Get current user profile
    getMe: builder.mutation<AuthResponse["user"], void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),

    // Request password reset email
    requestPasswordReset: builder.mutation<
      { success: boolean; message: string },
      RequestPasswordResetRequest
    >({
      query: (data) => ({
        url: "/auth/request-email-change",
        method: "POST",
        body: data,
      }),
    }),

    // Reset password with token
    resetPassword: builder.mutation<
      { success: boolean; message: string },
      ResetPasswordRequest
    >({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    // Check password
    checkPassword: builder.mutation<{ success: boolean; message: string; data: { isValid: boolean } }, CheckPasswordRequest>({
      query: (data) => ({
        url: "/auth/check-password",
        method: "POST",
        body: data,
      }),
    }),

    // Change password
    changePassword: builder.mutation<
      { success: boolean; message: string },
      ChangePasswordRequest
    >({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetMeMutation,
  useRequestPasswordResetMutation,
  useResetPasswordMutation,
  useCheckPasswordMutation,
  useChangePasswordMutation,
} = authApi;
