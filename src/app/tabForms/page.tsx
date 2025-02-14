"use client";
import { redirect } from "next/navigation";
import React from "react";
import TabForm from "@/app/Components/TabForm"
import "./styles.css"

const TabForms = () => {
    const backToHomeHandler = () => {
        redirect("/");
      };
  return (
    <div>
      <button onClick={backToHomeHandler} className="text-2xl p-5">
        ⬅️ back to home page
      </button>
      TabForms
      <TabForm/>
    </div>
  );
};

export default TabForms;
