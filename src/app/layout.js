"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { useReducer } from "react";
import { init } from "@/statemanagement/init";
import { Provider } from "@/context/appContext";
import { reducer } from "@/statemanagement/reducer";
import { Model } from "@/Model";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const[state,dispatch]=useReducer(reducer,init)

  return (
    <html lang="en">
      <body className={inter.className} >
        <Provider value={{state,dispatch}}>
        {children}
        {state?.isShowModal && <Model/>}
        </Provider>
      </body>
    </html>
  );
}
