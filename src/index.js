import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ProSidebarProvider } from "react-pro-sidebar";
import RecipeState from "./Context/RecipeState";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthState from "./Context/AuthState";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ProSidebarProvider>
        <React.StrictMode>
          <AuthState>
          <RecipeState>
            <App  />
          </RecipeState>
          </AuthState>
        </React.StrictMode>
      </ProSidebarProvider>
    </BrowserRouter>
    </QueryClientProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
