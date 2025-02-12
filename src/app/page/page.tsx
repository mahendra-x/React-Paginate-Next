"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles.css";
import Pagination from "../Components/Pagination";
import { PAGE_SIZE } from "../constants";
import { ProductCards } from "../Components/ProductCard";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const backToHomeHandler = () => {
    redirect("/");
  };

  const fetchApiData = async () => {
    try {
      const apiData = await fetch("https://dummyjson.com/products?limit=500");
      const responseJson = await apiData.json();
      console.log("responseJson", responseJson.products);
      setProducts(responseJson.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchApiData();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageNumber = (n: number) => {
    setCurrentPage(n);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const initialPageReached = currentPage === 0;
  const lastPageReached = currentPage === noOfPages - 1;

  return !products.length ? (
    <div className="flex items-center justify-center h-screen font-bold text-slate-600 text-4xl">
      Loading...
    </div>
  ) : (
    <div className="App">
      <button onClick={backToHomeHandler} className="text-2xl p-5">⬅️ back to home page</button>
      <h1 className="flex justify-center font-bold from-neutral-950 text-4xl">
        Pagination
      </h1>
      <Pagination
        initialPageReached={initialPageReached}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        noofPages={noOfPages}
        handlePageNumber={handlePageNumber}
        lastPageReached={lastPageReached}
        currentPage={currentPage}
      />

      <div className="product-container">
        {products.slice(start, end).map((item) => (
          <ProductCards
            key={item.id}
            productId={item.id.toString()}
            title={item.title}
            imgUrl={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
