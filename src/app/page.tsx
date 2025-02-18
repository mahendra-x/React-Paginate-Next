"use client";
import { redirect } from "next/navigation";

export default function Home() {
  const nextBtnHandler = () => {
    // alert("hi");
    redirect(`/page`); // Navigate to the new post page
  };
  const handleTabForms = () => {
    // alert("hi");
    redirect(`/tabForms`); // Navigate to the new post page
  };
  const handleSearchBar = () => {
    // alert("hi");
    redirect(`/autoSearchBar`); // Navigate to the new post page
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Home Page</h3>
        <button onClick={nextBtnHandler} className="border-2 p-2 bg-slate-500 text-white border-cyan-400">Please Click for Pagination View</button>
        <button onClick={handleTabForms} className="border-2 p-2 bg-slate-500 text-white border-cyan-400">Please Click for Tab-Forms</button>
        <button onClick={handleSearchBar} className="border-2 p-2 bg-slate-500 text-white border-cyan-400">Please Click for AutoComplete Search Bar</button>


      </main>
    </div>
  );
}
