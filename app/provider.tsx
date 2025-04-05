"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RulesProvider } from "./context/RulesContext";

interface Providers {
  children: React.ReactNode;
}

export function Providers({ children }: Providers) {
  return (
    <Provider store={store}>
      <RulesProvider>{children}</RulesProvider>
    </Provider>
  );
}
