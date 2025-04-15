"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { MainProvider } from "./context/MainContext";
import { AuthProvider } from "./context/AuthContext";
interface Providers {
  children: React.ReactNode;
}

export function Providers({ children }: Providers) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <MainProvider>{children}</MainProvider>
      </AuthProvider>
    </Provider>
  );
}
